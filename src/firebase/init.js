import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAKT7QE-lxG-cC1UocIrpEZnXdyhV9duYI',
  authDomain: 'udemy-carmines-smoothies.firebaseapp.com',
  databaseURL: 'https://udemy-carmines-smoothies.firebaseio.com',
  projectId: 'udemy-carmines-smoothies',
  storageBucket: 'udemy-carmines-smoothies.appspot.com',
  messagingSenderId: '68204252364',
  appId: '1:68204252364:web:f0ba82b1c2d3dfe3'
}

const firebaseApp = firebaseConfig.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
