export default function CardVehiculo({ vehiculo, onRetirar }) {
  
  const claseTipo = vehiculo.permanente ? 'permanente' : 'visita';

  return (
    <div className={`tarjeta-vehiculo ${claseTipo}`}>
      <p><strong>Patente:</strong> {vehiculo.patente}</p>
      <p><strong>Tipo:</strong> {vehiculo.permanente ? 'Residente Permanente' : 'Visita'}</p>
      
      <button onClick={() => onRetirar(vehiculo.id)}>
        Retirar Vehículo
      </button>
    </div>
  );
}