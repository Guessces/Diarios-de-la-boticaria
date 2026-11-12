export default function Campos({
  etiqueta,
  nombre,
  tipo,
  valor,
  alCambiar,
  requerido = false,
}) {
  return (
    <div className="campo-formulario">
      <label htmlFor={nombre}>{etiqueta}</label>
      <input
        id={nombre}
        name={nombre}
        type={tipo}
        value={valor}
        onChange={alCambiar}
        required={requerido}
      />
    </div>
  );
}
