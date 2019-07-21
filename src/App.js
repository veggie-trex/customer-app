import React from 'react';
import './App.css';
import { basePaths } from './networking/urls';
import PatientShowInfo from './PatientShowInfoComponent/PatientShowInfo'
function App() {
  console.log(`API Url": ${basePaths.api}`);
  return (
    <div className="App">
      <PatientShowInfo/>
    </div>
  );
}

export default App;
