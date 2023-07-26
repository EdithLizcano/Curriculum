import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './screens/Main';
import { Box } from "@mui/material";
import { Guardar } from './screens/Registro-de-usuario';
import { Contador } from './screens/Contador-useState';
import { Body } from './components/Body';
// import { Switch, Route } from 'react-router-dom';
function App() {
  let nombre='Pedro Pardo'  
  return (
    
      // <Body persona={nombre} apellido='Gaytan'/>
        <Guardar/>
    // <Contador/>
    
  );
}

export default App;
