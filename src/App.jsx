import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'; // Custom styles
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    
    switch(newTheme) {
      case 'dark':
        document.body.style.backgroundColor = '#212529';
        document.body.style.color = 'white';
        showAlert('Dark mode enabled', 'success');
        break;
      case 'blue':
        document.body.style.backgroundColor = '#0d6efd';
        document.body.style.color = 'white';
        showAlert('Blue theme enabled', 'success');
        break;
      case 'brown':
        document.body.style.backgroundColor = '#8B4513';
        document.body.style.color = 'white';
        showAlert('Brown theme enabled', 'success');
        break;
      case 'purple':
        document.body.style.backgroundColor = '#800080';
        document.body.style.color = 'white';
        showAlert('Purple theme enabled', 'success');
        break;
      default: // light
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        showAlert('Light mode enabled', 'success');
    }
  };

  return (
    <Router>
      <Navbar 
        title="TextUtils" 
        aboutText="About Us" 
        currentTheme={theme}
        toggleTheme={toggleTheme}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route 
            exact path="/TextForm" 
            element={
              <TextForm 
                heading="Enter the text to analyze below" 
                currentTheme={theme}
                showAlert={showAlert} 
              />
            } 
          />
          <Route 
            exact path="/About" 
            element={<About currentTheme={theme} />} 
          />
          <Route 
            exact path="/" 
            element={<Home currentTheme={theme} />}
            />
        </Routes>
      </div>
    </Router>
  )
}

export default App;