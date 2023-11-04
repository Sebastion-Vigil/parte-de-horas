import React from 'react'
import { standardToMilitary } from '../utils/time-util.js';

import Timesheet from '../components/Timesheet.js';

import '../css/app.css'
import '../css/flexbox.css'

function App() {
  console.log(standardToMilitary('9:30:PM'))
  return (
    <div className="app">
     <Timesheet />
    </div>
  );
}

export default App;