export default function Boton({ texto, activo, onClick }) {
  return (
    <button
      type="button"
      className={`btn-tarjeta ${activo ? 'activo' : ''}`}
      aria-pressed={activo}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}