import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../../Styles/HomePage.css';

const HomePage = () => {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigate('/');
    } else {
      setUserData(user);
    }
  }, [auth, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión: ', error);
    }
  };

  const handleGoToInfo = () => {
    if (userData) {
      navigate('/informacion', {
        state: {
          name: userData.displayName,
          email: userData.email,
          photo: userData.photoURL,
        },
      });
    }
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-logo">MyApp</div>
        <ul className="nav-links">
          <li onClick={() => navigate('/')}>Inicio</li>
          <li onClick={handleGoToInfo}>Información</li>
        </ul>
      </nav>

      <div className="hero">
        <h1 className="hero-text">Bienvenido a la aplicación</h1>
      </div>

      {userData ? (
        <div className="user-info">
          <h2>{userData.displayName}</h2>
          <p>{userData.email}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}

      <button
        onClick={handleLogout}
        className="login-button"
        style={{ marginTop: '20px', backgroundColor: '#535353' }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default HomePage;
