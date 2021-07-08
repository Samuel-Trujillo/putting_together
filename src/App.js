import React from 'react';
import './App.css';

import Demo from './components/demo'

function App() {
  return (
    <div className = "App">
    <Demo lastName = {"trujillo"} firstName = {"samuel"} age = {45} hairColor = {"black"}/>
    <Demo lastName = {"Feo"} firstName = {"bryant"} age = {25} hairColor = {"brown"}/>
    </div>
  
  );
}


export default App;


