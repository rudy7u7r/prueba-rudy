export default function CardVehiculo({ vehiculo, onRetirar }) {
  // Template literals para clases dinámicas (requerido por rúbrica)
  const claseTipo = `tarjeta-vehiculo ${vehiculo.permanente ? 'permanente' : 'visita'}`;

  return (
    <div className={claseTipo}>
      <span className="patente-texto">{vehiculo.patente}</span>
      <span className="tipo-badge">{vehiculo.permanente ? 'Residente' : 'Visita'}</span>
      <button onClick={() => onRetirar(vehiculo.id)}>Retirar</button>
    </div>
  );
}