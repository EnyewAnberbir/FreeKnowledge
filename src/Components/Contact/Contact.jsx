import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);
    formData.append('access_key', 'f90272f9-2380-4eae-bc76-1a0696436b23');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.error('Error', data);
        setResult(data.message);
        event.target.reset();
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setResult('Error submitting form');
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta alias consequatur 
          deleniti id, exercitationem cupiditate, sapiente eveniet amet, corporis suscipit 
          vero officia minus accusantium. Atque sunt tempore laudantium corporis tenetur.
        </p>
        <ul>
          <li>enyewanb0000@gmail.com</li>
          <li>+251973110221</li>
          <li>Addis Ababa, Ethiopia</li>
        </ul>
      </div>
      <div className="contact-col2">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your Phone" required />
          <label>Write your message here</label>
          <textarea name="message" rows="10" placeholder="Enter your message here" required></textarea>
          <button type="submit" className="btn">Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
