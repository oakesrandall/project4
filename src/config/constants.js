import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAP-MzzO6Yzl_tHYAdaVaTtdIPK2YLloxI',
  authDomain: 'dubow-house-project-management.firebaseapp.com',
  databaseURL: 'https://dubow-house-project-management.firebaseio.com',
  projectId: "dubow-house-project-management",
  storageBucket: "dubow-house-project-management.appspot.com",
  messagingSenderId: "973562385261",
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;