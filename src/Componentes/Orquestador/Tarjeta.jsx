import TarjetaVista from '../Tarjetas/Tarjeta';

export default function Tarjeta({ caso }) {
  const color = caso.color || '#2e5a44';

  return (
    <TarjetaVista
      caso={caso}
      style={{
        borderColor: color,
        boxShadow: `0 8px 24px ${color}33`,
      }}
      headerStyle={{
        backgroundColor: color,
        color: caso.colorLetra || '#ffffff',
      }}
    />
  );
}