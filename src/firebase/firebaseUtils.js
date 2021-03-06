import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAF5uGGbki9n5R2bPGaxKZ2pICamq0-uvQ",
    authDomain: "crwn-clothing-b2796.firebaseapp.com",
    projectId: "crwn-clothing-b2796",
    storageBucket: "crwn-clothing-b2796.appspot.com",
    messagingSenderId: "138692825337",
    appId: "1:138692825337:web:96eefc257297654d151228"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDocument = async(user) => {
    
    const userRef = firestore.doc(`users/${user.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
        const {displayName, email} = user
        const createdAt = new Date()

       try {
         await userRef.set({
            displayName,
            email,
            createdAt
         })

       }catch (error) {
           console.log('error creating user', error.message);
       }
    }
    return userRef;
}

export const collectionSnapToMap = (snap) => {
    const snapData = snap.docs.map(doc => {
      const {title, items} = doc.data()
      
      return {
        id: doc.id,
        routeName: encodeURI(title.toLowerCase()),
        title,
        items
      }
    })

    return snapData.reduce((newObj, collection) => {
      // collection theke title ar collection jemon mens = mens er collection, 
      newObj[collection.title.toLowerCase()] = collection
      return newObj
    },{})
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase