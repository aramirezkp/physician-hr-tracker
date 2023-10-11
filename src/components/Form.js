import React, { useState } from 'react';

function Form() {
  const [doctorData, setDoctorData] = useState({
    name: '',
    specialty: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the doctorData to your backend or API for database insertion
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctorData),
      });

      if (response.ok) {
        alert('Doctor information submitted successfully');
        // Clear the form
        setDoctorData({
          name: '',
          specialty: '',
          location: '',
        });
      } else {
        alert('Error submitting doctor information');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={doctorData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="specialty">Specialty:</label>
        <input
          type="text"
          id="specialty"
          name="specialty"
          value={doctorData.specialty}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={doctorData.location}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
