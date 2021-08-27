import getUserNameFromEmail from '../Utils/getUserNameFromEmail'
import { firebaseApp } from './Firebase'

class FirebaseService {
  async registerUser(email: string, password: string) {
    try {
      const resp = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
      return getUserNameFromEmail(resp.user?.email as string)
    } catch (error) {
      throw error
    }
  }

  async authorizeUser(email: string, password: string) {
    try {
      const resp = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
      return getUserNameFromEmail(resp.user?.email as string)
    } catch (error) {
      throw error
    }
  }

  async signOut() {
    firebaseApp.auth().signOut()
  }

  async isAuthorized(
    onSignedIn: (userName: string) => void,
    onSignedOut: () => void
  ) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        onSignedIn(getUserNameFromEmail(user.email as string))
      } else {
        onSignedOut()
      }
    })
  }
}
const firebaseService = new FirebaseService()
export default firebaseService

export enum firebaseServiceMethods {
  AUTHORIZE_USER = 'authorizeUser',
  REGISTER_USER = 'registerUser',
}
