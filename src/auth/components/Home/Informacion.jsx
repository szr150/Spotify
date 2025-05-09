import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../Styles/Informacion.css';

const Informacion = () => {
  const { state } = useLocation();

  if (!state) return <p>No hay datos del usuario.</p>;

  return (
    <div className="informacion-container">
      <h2>Información del Usuario</h2>
      <img
        src={state.photo}
        alt="Foto de perfil"
        width={120}
        style={{ borderRadius: '50%', marginBottom: '1rem' }}
      />
      <p><strong>Nombre:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>

      <h3>Top 10 canciones más escuchadas en Spotify</h3>
      <ol>
        <li>Blinding Lights - The Weeknd</li>
        <li>Dance Monkey - Tones and I</li>
        <li>Levitating - Dua Lipa</li>
        <li>Good 4 U - Olivia Rodrigo</li>
        <li>Stay - The Kid LAROI & Justin Bieber</li>
        <li>Montero (Call Me By Your Name) - Lil Nas X</li>
        <li>Shivers - Ed Sheeran</li>
        <li>Save Your Tears - The Weeknd</li>
        <li>Peaches - Justin Bieber</li>
        <li>Bad Habits - Ed Sheeran</li>
      </ol>
    </div>
  );
};

export default Informacion;
