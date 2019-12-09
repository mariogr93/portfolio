import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {CONFIG} from '../keys'


firebase.initializeApp(CONFIG);



export const auth = firebase.auth();
export const firestore = firebase.firestore();


//With Google
const providerGoogle = new firebase.auth.GoogleAuthProvider();


providerGoogle.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);

//With GitHub
const providerGit = new firebase.auth.GithubAuthProvider();
providerGit.setCustomParameters({ prompt: 'select_account' });

export const signInWithGit = () => auth.signInWithPopup(providerGit)
	.catch(function(error) {
		console.error(error.message);
		if(error.code == 'auth/account-exists-with-different-credential'){
			auth.fetchSignInMethodsForEmail(error.email).then(function(providers){
			var provider = new firebase.auth.GoogleAuthProvider();
			provider.setCustomParameters({login_hint: error.email});
			auth.signInWithPopup(provider);
		})
	}
		
});


export const createUserProfile = async (userAuth, additionalData) => {

	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};


export default firebase;
