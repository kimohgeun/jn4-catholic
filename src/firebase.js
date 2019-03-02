import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyAwkkdE-u0T_29KyxTn3Ttr7Pui_LfLi2I',
	authDomain: 'jn4-catholic.firebaseapp.com',
	databaseURL: 'https://jn4-catholic.firebaseio.com',
	projectId: 'jn4-catholic',
	storageBucket: 'jn4-catholic.appspot.com',
	messagingSenderId: '67512058231',
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

export { firestore };
