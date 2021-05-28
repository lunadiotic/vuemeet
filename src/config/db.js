import firebase from 'firebase'

let firebaseConfig = {
  apiKey: 'AIzaSyCzS6ZmZkMzveOubXNG7MWQEFjCUvmbK5o',
  authDomain: 'vuemeet-2e308.firebaseapp.com',
  projectId: 'vuemeet-2e308',
  storageBucket: 'vuemeet-2e308.appspot.com',
  messagingSenderId: '478696386424',
  appId: '1:478696386424:web:8ad19aefc2ef1d3d7ca28d'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
