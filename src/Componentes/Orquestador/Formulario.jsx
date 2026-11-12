import { useState } from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Formularios/Boton';
import BotonVolver from '../Formularios/BotonVolver';
import Campos from '../Formularios/Campos';
import '../Styles/Formulario.css';

const datosIniciales = {
  nombre: '',
  correo: '',
  telefono: '',
};

export default function Formulario() {
  const [datos, setDatos] = useState(datosIniciales);
  const [mensaje, setMensaje] = useState('');

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setDatos((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));
    setMensaje('');
  }

  function enviarFormulario(evento) {
    evento.preventDefault();
    setMensaje(
      `Gracias, ${datos.nombre}. Este formulario es una demostración y no envía ni guarda tus datos.`
    );
  }

  function limpiarFormulario() {
    setDatos(datosIniciales);
    setMensaje('');
  }

  return (
    <main className="pagina pagina-formulario">
      <header className="encabezado encabezado-formulario">
        <div>
          <p className="sobretitulo">Diario interactivo</p>
          <h1>Formulario de contacto</h1>
          <p>Déjale un mensaje a la boticaria.</p>
        </div>
        <nav className="navegacion-principal" aria-label="Navegación principal">
          <Link to="/Tarjetas">Ver todos los casos</Link>
        </nav>
      </header>

      <section className="formulario-contenedor">
        <BotonVolver />
        <form className="formulario" onSubmit={enviarFormulario}>
          <h2>Cuaderno de visitantes</h2>
          <Campos
            etiqueta="Nombre"
            nombre="nombre"
            tipo="text"
            valor={datos.nombre}
            alCambiar={manejarCambio}
            requerido
          />
          <Campos
            etiqueta="Correo electrónico"
            nombre="correo"
            tipo="email"
            valor={datos.correo}
            alCambiar={manejarCambio}
            requerido
          />
          <Campos
            etiqueta="Teléfono"
            nombre="telefono"
            tipo="tel"
            valor={datos.telefono}
            alCambiar={manejarCambio}
          />
          <div className="botones-formulario">
            <Boton texto="Enviar" tipo="submit" clase="boton-enviar" />
            <Boton
              texto="Limpiar"
              tipo="button"
              clase="boton-limpiar"
              alHacerClick={limpiarFormulario}
            />
          </div>
          {mensaje && (
            <p className="mensaje-formulario" role="status">
              {mensaje}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
