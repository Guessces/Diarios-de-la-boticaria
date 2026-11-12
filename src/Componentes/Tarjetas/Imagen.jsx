export default function Imagen({ src, alt }) {
  return <img src={src} alt={alt} className="imagen-tarjeta" loading="lazy" />;
}
