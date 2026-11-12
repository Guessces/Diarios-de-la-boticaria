import { useState } from 'react';
import { Link } from 'react-router-dom';
import datosCasos from '../../data.json';
import Efecto from '../Home/Efecto';
import Tarjeta from '../Orquestador/Tarjeta';
import Boton from '../Tarjetas/Boton';
import '../Styles/main.css';
import '../Styles/Tarjeta.css';

export default function Inicio() {
  const [casoActual, setCasoActual] = useState(datosCasos[0]);

  return (
    <main className="pagina">
      <header className="encabezado">
        <div>
          <p className="sobretitulo">Diario interactivo</p>
          <h1>Los Diarios de la Boticaria</h1>
          <p>Explora los casos y descubrimientos de Maomao.</p>
        </div>
        <nav className="navegacion-principal" aria-label="Navegación principal">
          <Link to="/Tarjetas">Ver todos los casos</Link>
          <Link to="/Formulario">Formulario</Link>
        </nav>
      </header>

      <div className="layout-principal">
        <aside className="panel-navegacion">
          <h2>Casos del diario</h2>
          <div className="lista-botones">
            {datosCasos.map((caso) => (
              <Boton
                key={caso.id}
                texto={caso.titulo}
                activo={casoActual.id === caso.id}
                onClick={() => setCasoActual(caso)}
              />
            ))}
          </div>
        </aside>

        <section className="visor-caso" aria-live="polite">
          <Efecto key={casoActual.id}>
            <Tarjeta caso={casoActual} />
          </Efecto>
        </section>
      </div>
    </main>
  );
}
