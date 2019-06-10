import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAKT7QE-lxG-cC1UocIrpEZnXdyhV9duYI',
  authDomain: 'udemy-carmines-smoothies.firebaseapp.com',
  databaseURL: 'https://udemy-carmines-smoothies.firebaseio.com',
  projectId: 'udemy-carmines-smoothies',
  storageBucket: 'udemy-carmines-smoothies.appspot.com',
  messagingSenderId: '68204252364',
  appId: '1:68204252364:web:f0ba82b1c2d3dfe3'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
