import React, { useState } from 'react';
import Form from './components/form';
import './App.css';
import backgroundImage from './images/Asset.png';
import axios from 'axios';

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (formData) => {
    try {
      setFormSubmitted(true);
      // Send Post Request to API endpoint
      await axios.post('/api/submit', formData);
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Error Handling
    }
  };

  return (
    <div className={`app-container ${formSubmitted ? 'form-submitted' : ''}`}>
      <div className="background-container" style={formSubmitted ? { background: 'lightblue' } : { backgroundImage: `url(${backgroundImage})` }}>
        <div className="content-container">
          <h1 className="group6-head">What’s next for real-time conversation?</h1>
          <h2 className="group6-about">
            We are heads down on building this product towards an early alpha launch in Q2 2023.
            <br />
            <br />
            Reserve your handle, share this page, and follow us.
          </h2>
          <Form onFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default App;






