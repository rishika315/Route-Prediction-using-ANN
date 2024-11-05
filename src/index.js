import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './App';
import 'leaflet/dist/leaflet.css';


// Render the App component into the root DOM node
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
