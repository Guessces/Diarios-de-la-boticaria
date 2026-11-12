import { Link } from 'react-router-dom';
import datosCasos from '../../data.json';
import Tarjeta from '../Orquestador/Tarjeta';
import '../Styles/main.css';
import '../Styles/Tarjeta.css';

export default function Tar() {
  return (
    <main className="pagina">
      <header className="encabezado">
        <div>
          <p className="sobretitulo">Archivo de Maomao</p>
          <h1>Todos los casos</h1>
          <p>El diario completo de la boticaria, reunido en un solo lugar.</p>
        </div>
        <nav className="navegacion-principal" aria-label="Navegación principal">
          <Link to="/">Volver al inicio</Link>
          <Link to="/Formulario">Formulario</Link>
        </nav>
      </header>

      <section className="catalogo-casos" aria-label="Casos del diario">
        {datosCasos.map((caso) => (
          <Tarjeta key={caso.id} caso={caso} />
        ))}
      </section>
    </main>
  );
}
