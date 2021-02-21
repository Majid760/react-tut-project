import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAOMLC_ziqn50s-f4tRr4x-egfRmqc1ehk",
    authDomain: "ecom-db-1d8be.firebaseapp.com",
    projectId: "ecom-db-1d8be",
    storageBucket: "ecom-db-1d8be.appspot.com",
    messagingSenderId: "634455833193",
    appId: "1:634455833193:web:26113089127f6c955e80f8",
    measurementId: "G-0W12YEECK8"
  };

 
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  
  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email}=userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })

        }catch(error){
            console.log('error creating the user: ',error.message);
        }
    }

    return userRef;
}