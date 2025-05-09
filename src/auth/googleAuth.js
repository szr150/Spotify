import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import appFirebase from '../firebaseconfig/FireBase';

const auth = getAuth(appFirebase);
const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    throw new Error("Error en login con Google: " + error.message);
  }
};
