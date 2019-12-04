import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCA4C8jQDoUatBOY6WEmZEPYeYFhl8Pzec',
	authDomain: 'portfolio-db-cdbdc.firebaseapp.com',
	databaseURL: 'https://portfolio-db-cdbdc.firebaseio.com',
	projectId: 'portfolio-db-cdbdc',
	storageBucket: 'portfolio-db-cdbdc.appspot.com',
	messagingSenderId: '179642860360',
	appId: '1:179642860360:web:d4745a8241fcb0a879297d',
	measurementId: 'G-P25VYFKGCS'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
