const secciones = [
  ['Situación', 'situacion'],
  ['Síntomas', 'sintomas'],
  ['Diagnóstico', 'diagnostico'],
  ['Prevención / Tratamiento Boticario', 'prevencion'],
];

export default function Descripcion({
  situacion,
  sintomas,
  diagnostico,
  prevencion,
}) {
  const valores = { situacion, sintomas, diagnostico, prevencion };

  return (
    <div className="descripcion-tarjeta">
      {secciones.map(([etiqueta, campo]) =>
        valores[campo] ? (
          <section
            className={`bloque-info ${campo === 'prevencion' ? 'prevencion' : ''}`}
            key={campo}
          >
            <h3>{etiqueta}</h3>
            <p>{valores[campo]}</p>
          </section>
        ) : null
      )}
    </div>
  );
}