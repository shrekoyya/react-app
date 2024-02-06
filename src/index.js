import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add your Bing Search API key here
const BING_API_KEY = 'YOUR_BING_API_KEY';

ReactDOM.render(
  <React.StrictMode>
    <App apiKey={BING_API_KEY} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
