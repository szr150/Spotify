import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Informacion from './auth/components/Home/Informacion';
import HomePage from './auth/components/Home/HomePage';
import Login from './auth/components/Login/Login';
import Registro from './auth/components/Login/Registro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
