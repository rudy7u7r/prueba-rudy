import { useState } from 'react';

export default function Formulario({ onAgregarVehiculo }) {

  const [patente, setPatente] = useState('');
  const [permanente, setPermanente] = useState(false);


  const soloLetras = patente.slice(0, 4);
  const soloNumeros = patente.slice(4, 6);
  const formatoValido =
    patente.length === 6 &&
    /^[A-Z]+$/.test(soloLetras) &&
    /^[0-9]+$/.test(soloNumeros);

  const manejarEnvio = (e) => {
    e.preventDefault();

    const nuevoVehiculo = {
      id: Date.now(),
      patente: patente,
      permanente: permanente,
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
          maxLength={6}
          onChange={(e) => setPatente(e.target.value.toUpperCase())}
        />
        {patente.length > 0 && !formatoValido && (
          <span className="error-msg">Debe ser 4 letras y 2 números (ej: ABCD12)</span>
        )}
      </div>

      <div className="campo checkbox">
        <input
          type="checkbox"
          id="permanente"
          checked={permanente}
          onChange={(e) => setPermanente(e.target.checked)}
        />
        <label htmlFor="permanente">¿Es Residente Permanente?</label>
      </div>

      <button
        type="submit"
        disabled={!formatoValido}
        style={{ opacity: !formatoValido ? 0.6 : 1 }}
      >
        Registrar Vehículo
      </button>
    </form>
  );
}