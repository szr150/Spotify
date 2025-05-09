import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace('#', '?'));
    const accessToken = params.get('access_token');

    if (accessToken) {
      localStorage.setItem('spotify_access_token', accessToken);
      navigate('/home');
    } else {
      alert("No se pudo autenticar con Spotify.");
      navigate('/');
    }
  }, [navigate]);

  return <div>Conectando con Spotify...</div>;
};

export default Callback;