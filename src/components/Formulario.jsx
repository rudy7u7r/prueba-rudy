import { useState } from 'react';


export default function Formulario({ onAgregarVehiculo }) {
  
  const [patente, setPatente] = useState('');
  const [permanente, setPermanente] = useState(false); 

  const manejarEnvio = (e) => {
    e.preventDefault(); 

    
    const nuevoVehiculo = {
      id: Date.now(),
      patente: patente.toUpperCase(), // Lo guardamos en mayúsculas
      permanente: permanente
    };

    
    onAgregarVehiculo(nuevoVehiculo);

    
    setPatente('');
    setPermanente(false);
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario-registro">
      <h2>Registrar Ingreso</h2>
      
      <div className="campo">
        <label htmlFor="patente">Patente Vehículo:</label>
        <input 
          id="patente"
          type="text" 
          placeholder="Ej: ABCD12" 
          value={patente}
          onChange={(e) => setPatente(e.target.value)}
        />
      </div>

      <div className="campo checkbox">
        <label>
          <input 
            type="checkbox" 
            checked={permanente}
            onChange={(e) => setPermanente(e.target.checked)}
          />
          ¿Es Residente Permanente?
        </label>
      </div>

      <button type="submit">Registrar Vehículo</button>
    </form>
  );
}