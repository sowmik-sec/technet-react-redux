import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: import.meta.env.apiKey,
//   authDomain: import.meta.env.authDomain,
//   projectId: import.meta.env.projectId,
//   storageBucket: import.meta.env.storageBucket,
//   messagingSenderId: import.meta.env.messagingSenderId,
//   appId: import.meta.env.appId,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyAjhX8zOK7WKG7ZhGPWVMHxYiie4qer0cw',
  authDomain: 'technet-1303b.firebaseapp.com',
  projectId: 'technet-1303b',
  storageBucket: 'technet-1303b.firebasestorage.app',
  messagingSenderId: '213965843934',
  appId: '1:213965843934:web:d5f6cd274dfcb55b82814f',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
