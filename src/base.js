import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCh9Hu9Y2zCwWzTgo528kpn_mxOnYYDFO8",
    authDomain: "catch-of-the-day-stft.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-stft.firebaseio.com/",
})

const base = Rebase.createClass(firebaseApp.database())

// this is a named export
export { firebaseApp }

// this is a default export
export default base