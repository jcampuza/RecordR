import * as firebase from 'firebase';
import { firebaseConfig } from '../config.js';

// If trying to develop your own, make a new firebase instance (or existing) and
// put that config here, or in a separate file like above
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

export default db;
