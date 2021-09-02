import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import firebase from 'firebase/app'

const env = process.env

export const firebaseApp = firebase.initializeApp({
  appId: env.REACT_APP_APP_ID,
  apiKey: env.REACT_APP_API_KEY,
  projectId: env.REACT_APP_PROJECT_ID,
  authDomain: env.REACT_APP_AUTH_DOMAIN,
  storageBucket: env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
})

export const fireStore = firebaseApp.firestore()
