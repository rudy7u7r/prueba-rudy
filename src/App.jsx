import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaVehiculos from './components/ListaVehiculos';
import './App.css';

function App() {
  const [vehiculos, setVehiculos] = useState(() => {
    const vehiculosGuardados = localStorage.getItem('estacionamiento');
    return vehiculosGuardados ? JSON.parse(vehiculosGuardados) : [];
  });

  useEffect(() => {
    localStorage.setItem('estacionamiento', JSON.stringify(vehiculos));
  }, [vehiculos]);


  const agregarVehiculo = (nuevoVehiculo) => {
    if (vehiculos.length >= 10) {
      alert('El estacionamiento está lleno. No hay cupos disponibles.');
      return;
    }

    const patenteExiste = vehiculos.some((auto) => auto.patente === nuevoVehiculo.patente);
    if (patenteExiste) {
      alert('Esta patente ya se encuentra registrada en el sistema.');
      return;
    }

    setVehiculos([...vehiculos, nuevoVehiculo]);
  };


  const retirarVehiculo = (id) => {
    const nuevaLista = vehiculos.filter((vehiculo) => vehiculo.id !== id);
    setVehiculos(nuevaLista);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Sistema de Gestión de Estacionamientos</h1>
      </header>

      <main>
        <section className="contenedor-formulario">
          <Formulario onAgregarVehiculo={agregarVehiculo} />
        </section>

        <section className="contenedor-lista">
          <h3>Cupos Disponibles: {10 - vehiculos.length} / 10</h3>
          {/* Pasamos correctamente la lista y la función de retiro */}
          <ListaVehiculos lista={vehiculos} onRetirar={retirarVehiculo} />
        </section>
      </main>

      <footer>
        <p>&copy; 2026 - Evaluación Sumativa 3 - Programación Front End</p>
      </footer>
    </div>
  );
}

export default App;