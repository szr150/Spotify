import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Login.css';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import appFirebase from '../../../firebaseconfig/FireBase';

// Autenticaciones externas
import { loginWithGoogle } from '../../googleAuth';
import { loginWithFacebook } from '../../facebookAuth';

const auth = getAuth(appFirebase);

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigate('/home');
    }
  }, [navigate]);

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      setUser(user);
      navigate('/home');
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const user = await loginWithFacebook();
      setUser(user);
      navigate('/home');
    } catch (err) {
      console.error(err.message);
      alert("No se pudo iniciar sesión con Facebook.");
    }
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    navigate('/');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      const result = await signInWithEmailAndPassword(auth, correo, contraseña);
      setUser(result.user);
      navigate('/home');
    } catch (error) {
      alert("El correo o la contraseña son incorrectos.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Inicia sesión en Spotify</h1>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Correo electrónico" name="email" required />
          <input type="password" placeholder="Contraseña" name="password" required />
          <button type="submit" className="login-button">Iniciar sesión</button>
        </form>
        <div className="social-login">
          <button className="social-button google-button" onClick={handleGoogleLogin}>
            <img src="/images/google-icon.png.png" alt="Google" />
            Continuar con Google
          </button>
          <button className="social-button facebook-button" onClick={handleFacebookLogin}>
            <img src="/images/facebook-icon.png.jpeg" alt="Facebook" />
            Continuar con Facebook
          </button>
          <button className="social-button spotify-button" onClick={handleFacebookLogin}>
            <img src="/images/spotify.png" alt="Spotify" />
            Continuar con Spotify
          </button>
        </div>
        <div className="login-footer">
          <a href="#">¿Olvidaste tu contraseña?</a>
          <p>¿No tienes cuenta?{" "}
            <a href="#" onClick={() => navigate('/registro')}>
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
