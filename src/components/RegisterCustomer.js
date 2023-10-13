import React, { useState } from 'react';
import axios from 'axios';

function RegisterCustomer() {
  const [customer, setCustomer] = useState({
    customerName: '',
    mobileNumber: '',
    password: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/customer/register', customer); // Update the URL
      console.log('Customer registered:', response.data);
      // You can handle success or redirect to another page here
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle errors here
    }
  };

  return (
    <div>
      <h2>Register Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          value={customer.customerName}
          onChange={handleInputChange}
          placeholder="Customer Name"
        />
        {/* Add more input fields for mobileNumber, password, etc. */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterCustomer;
