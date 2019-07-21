import React from 'react';
import './App.css';
import { basePaths } from './networking/urls';
import PatientShowInfo from './PatientShowInfoComponent/PatientShowInfo'
function App() {
  return (
    <div className="App">
      <PatientShowInfo/>
    </div>
  );
}

export default App;
