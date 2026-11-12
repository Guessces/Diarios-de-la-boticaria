export default function Boton({
  texto,
  tipo = 'button',
  clase,
  alHacerClick,
}) {
  return (
    <button type={tipo} className={clase} onClick={alHacerClick}>
      {texto}
    </button>
  );
}
