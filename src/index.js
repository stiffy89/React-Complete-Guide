import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AssignmentApp from './Assignment_One/AssignmentApp.js';
import CurrentAthlete from './Athlete/AthleteApp.js';
import AssignmentTwo from './Assignment_Two/AssignmentApp.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
