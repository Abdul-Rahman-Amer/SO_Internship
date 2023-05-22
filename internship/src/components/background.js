import React from 'react';

const Background = ({ formSubmitted }) => {
  return (
    <div className={`background-container ${formSubmitted ? 'form-submitted' : ''}`}>
     
    </div>
  );
};

export default Background;
