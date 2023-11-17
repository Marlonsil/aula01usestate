import React, {useState} from 'react'; 
import CalculadoraDesoma from './components/soma';
import Calculadorademenos from'./components/menos';
import './App.css';

function App() {
  const[contador, setContador] = useState(0);
  return (
    <div className="App">
      <h1> soma </h1>
      <CalculadoraDesoma />
    </div>

  );
}

export default App;
