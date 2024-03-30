import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAz1AEp6byQlTQ7-AQ6N3G5EM2FyHdZ9uM',
  authDomain: 'fir-jsi14-modal.firebaseapp.com',
  projectId: 'fir-jsi14-modal',
  storageBucket: 'fir-jsi14-modal.appspot.com',
  messagingSenderId: '175205102404',
  appId: '1:175205102404:web:f232541096b92c310a9d11',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };
export { collection, addDoc, getDocs };
export { ref, uploadBytes, getDownloadURL };
