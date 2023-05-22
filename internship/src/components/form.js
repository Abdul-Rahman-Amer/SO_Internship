import React, { useState } from 'react';
import ErrorMessage from './errorMessage';



const Form = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [handle, setHandle] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if any fields are empty
    if (!name || !email || !handle) {
      setError('Missing fields');
      return;
    }
  
    // Perform any desired actions with the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Handle:', handle);
    
    // Reset the form fields
    setName('');
    setEmail('');
    setHandle('');
    setError('');
    
    // Call the onFormSubmit function if it is a valid function 
    if (typeof onFormSubmit === 'function') {
      onFormSubmit();
    }

  };



  return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <div className="input-group">
            <input
              type="text"
              id="name"
              className="form-name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              className="form-email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="consent"></div>
        <div className="input-group">
          <input
            type="text"
            id="handle"
            className="form-handle"
            placeholder="Handle"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
        </div>
        <p className="consent">
          By entering the above information, you are agreeing to receive emails from or on behalf of SPECIAL OFFER.
        </p>
        <button className="form-submit" type="submit">
          Submit
        </button>
        {error && <ErrorMessage message={error} />}
      </form>
    </div>
  );
};

export default Form;
