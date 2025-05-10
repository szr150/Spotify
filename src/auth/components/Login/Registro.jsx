import React, { useState, useEffect } from 'react';
import '../../Styles/Login.css'; 
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import appFirebase from '../../../firebaseconfig/FireBase';

import { loginWithGoogle } from '../../googleAuth';
import { loginWithFacebook } from '../../facebookAuth';

const auth = getAuth(appFirebase);

const Registro = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      setUser(user);
      navigate('/');
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const user = await loginWithFacebook();
      setUser(user);
      navigate('/');
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

  const handleRegister = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      const result = await createUserWithEmailAndPassword(auth, correo, contraseña);
      setUser(result.user);
      navigate('/'); // Redirige al login
    } catch (error) {
      alert("Asegúrate de que la contraseña tenga al menos 6 caracteres.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Regístrate en Spotify</h1>
        <form onSubmit={handleRegister}>
          <input type="email" placeholder="Correo electrónico" name="email" required />
          <input type="password" placeholder="Contraseña" name="password" required />
          <button type="submit" className="login-button">Registrarse</button>
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
          <p>¿Ya tienes una cuenta? <a href="/">Inicia sesión</a></p>
        </div>
      </div>
    </div>
  );
};

export default Registro;
