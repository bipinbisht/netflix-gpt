// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZ6aW-LO7XglcWEIWdQsFjHswkFwo-nPA',
  authDomain: 'netflix-gpt-d05e3.firebaseapp.com',
  projectId: 'netflix-gpt-d05e3',
  storageBucket: 'netflix-gpt-d05e3.appspot.com',
  messagingSenderId: '858018221606',
  appId: '1:858018221606:web:c3b4ed3657e936cd8ca0e7',
  measurementId: 'G-ZKHZKTE30D',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
