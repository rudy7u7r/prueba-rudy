import CardVehiculo from "./CardVehiculo";


export default function ListaVehiculos({ lista, onRetirar }) {
  return (
    <div className="lista-container">
      <h2>Vehículos en el Estacionamiento</h2>
      
      {lista.length === 0 ? (
        <p>No hay vehículos registrados en este momento.</p>
      ) : (
        lista.map((vehiculo) => (
          <CardVehiculo 
            key={vehiculo.id} 
            vehiculo={vehiculo} 
            
            onRetirar={onRetirar} 
          />
        ))
      )}
    </div>
  );
}