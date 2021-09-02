import GameResults from '../Classes/GameResults'
import { IGameResults, IWordAfterGame } from '../Classes/IGemeResults'
import getUserNameFromEmail from '../Utils/getUserNameFromEmail'
import { firebaseApp, fireStore } from './Firebase'

export interface IUserWithOutId {
  userName: string
  email: string
}

export interface IUser extends IUserWithOutId {
  id: string
}

class FirebaseService {
  async registerUser(email: string, password: string): Promise<IUser> {
    try {
      const resp = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)

      const user = {
        id: resp.user?.uid as string,
        userName: getUserNameFromEmail(resp.user?.email as string),
        email: resp.user?.email as string,
      }
      this.addUser(user)

      return user
    } catch (error) {
      throw error
    }
  }

  async authorizeUser(email: string, password: string): Promise<IUser> {
    try {
      const resp = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)

      return {
        id: resp.user?.uid as string,
        userName: getUserNameFromEmail(resp.user?.email as string),
        email: resp.user?.email as string,
      }
    } catch (error) {
      throw error
    }
  }

  async signOut() {
    firebaseApp.auth().signOut()
  }

  async isAuthorized(
    onSignedIn: (user: IUser) => void,
    onSignedOut: () => void
  ) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        onSignedIn({
          id: user?.uid as string,
          userName: getUserNameFromEmail(user?.email as string),
          email: user?.email as string,
        })
      } else {
        onSignedOut()
      }
    })
  }

  addUser(user: IUser) {
    fireStore.collection('Users').doc(user.id).set(user)
  }

  addGameResults(gameResults: IGameResults | null) {
    if (gameResults) {
      fireStore
        .collection('Users')
        .doc(gameResults.user.id)
        .collection('Games')
        .add({
          userId: gameResults.user.id,
          dateOfGame: gameResults.dateOfGame,
          lv1: gameResults.lv1,
          lv2: gameResults.lv2,
          lv3: gameResults.lv3,
          lv4: gameResults.lv4,
          lv5: gameResults.lv5,
          lv6: gameResults.lv6,
        })
    }
  }

  async getGames(): Promise<Array<IGameResults>> {
    const [gamesData, usersData] = await Promise.all([
      fireStore.collectionGroup('Games').get(),
      fireStore.collection('Users').get(),
    ])

    const users: Array<IUser> = usersData.docs.map((doc) => {
      return doc.data() as IUser
    })

    return gamesData.docs.map((doc) => {
      const levels: Array<Array<IWordAfterGame>> = [
        doc.data().lv1,
        doc.data().lv2,
        doc.data().lv3,
        doc.data().lv4,
        doc.data().lv5,
        doc.data().lv6,
      ]
      const user: IUser = users.find(
        (us) => us.id === doc.data().userId
      ) as IUser

      return new GameResults({ id: doc.id, user, levels })
    })
  }
}
const firebaseService = new FirebaseService()
export default firebaseService

export enum firebaseServiceMethods {
  AUTHORIZE_USER = 'authorizeUser',
  REGISTER_USER = 'registerUser',
}
