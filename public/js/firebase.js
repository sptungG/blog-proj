const firebaseConfig = {
  apiKey: "AIzaSyBnHXP-xa-xQXGXrvnck0OvEXQExH0BHuI",
  authDomain: "blog-7fae6.firebaseapp.com",
  projectId: "blog-7fae6",
  storageBucket: "blog-7fae6.appspot.com",
  messagingSenderId: "206049749689",
  appId: "1:206049749689:web:6680bf0c510acd50170968",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
  auth.signOut();
  location.reload();
};
