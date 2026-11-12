import Descripcion from './Descripcion';
import Imagen from './Imagen';
import Titulo from './Titulo';

export default function Tarjeta({ caso, style, headerStyle }) {
  return (
    <article className="tarjeta-contenedor" style={style}>
      <header className="tarjeta-cabecera" style={headerStyle}>
        <Titulo texto={caso.titulo} />
      </header>
      <div className="cuerpo-tarjeta">
        <Imagen src={caso.imagen} alt={caso.titulo} />
        <Descripcion
          situacion={caso.situacion}
          sintomas={caso.sintomas}
          diagnostico={caso.diagnostico}
          prevencion={caso.prevencion_boticaria}
        />
      </div>
    </article>
  );
}
