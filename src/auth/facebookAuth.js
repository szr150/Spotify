import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import appFirebase from '../firebaseconfig/FireBase';

const auth = getAuth(appFirebase);
const facebookProvider = new FacebookAuthProvider();

export const loginWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    return result.user;
  } catch (error) {
    throw new Error("Error en login con Facebook: " + error.message);
  }
};
