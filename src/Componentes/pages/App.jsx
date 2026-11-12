import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Formulario from '../Orquestador/Formulario';
import Inicio from './Inicio';
import Tar from './Tar';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Tarjetas" element={<Tar />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
