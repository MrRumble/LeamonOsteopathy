import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './RequestBooking.css';
import Navbar from '../../Components/NavBar/NavBarComponent';
import Logo from '../../Components/LogoComponent/Logo';

const RequestBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    booking_type: '',
    date_of_appointment: '',
    time_preference: '',
    email_address: '',
    phone_number: '',
    additional_information: '',
  });

  const [formErrors, setFormErrors] = useState({}); 


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Full name is required.';
    if (!formData.booking_type) errors.booking_type = 'Booking type is required.';
    if (!formData.email_address) errors.email_address = 'Email is required.';
    if (!formData.phone_number) errors.phone_number = 'Phone number is required.';
    if (formData.booking_type !== 'General Enquiry') {
      if (!formData.date_of_appointment) errors.date_of_appointment = 'Appointment date is required.';
      if (!formData.time_preference) errors.time_preference = 'Preferred time is required.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return; 

    // Send email via EmailJS
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Service ID from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID from .env
        {
          name: formData.name,
          booking_type: formData.booking_type,
          date_of_appointment: formData.date_of_appointment,
          time_preference: formData.time_preference,
          email_address: formData.email_address,
          phone_number: formData.phone_number,
          additional_information: formData.additional_information,
        },
        process.env.REACT_APP_EMAILJS_USER_ID // User ID from .env
      )
      .then(
        (response) => {
          alert('Booking request sent successfully!');
          setFormData({
            name: '',
            booking_type: '',
            date_of_appointment: '',
            time_preference: '',
            email_address: '',
            phone_number: '',
            additional_information: '',
          });
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Error sending request. Please try again.');
        }
      );
  };

  return (
    <div className="request-booking">
      <Logo size="120px" />
      <Navbar />
      <h1>Request An Appointment</h1>

      <form onSubmit={handleSubmit} id="contact-form">
        <p>
          If you would like to request an appointment, please fill in the form below and I will get back to you as soon as possible. If you have a general enquiry or any questions, please select 'General Enquiry' under the booking type, and I will be happy to assist you with any queries.
        </p>

        <div>
          <label htmlFor="name">Full Name <span className="required">*</span>:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>

        <div>
          <label htmlFor="booking_type">Booking Type <span className="required">*</span>:</label>
          <select
            id="booking_type"
            name="booking_type"
            value={formData.booking_type}
            onChange={handleInputChange}
            required
          >
            <option value="">Select...</option>
            <option value="Initial Consultation">Initial Consultation</option>
            <option value="Follow-up Appointment">Follow-up Appointment</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
          {formErrors.booking_type && <span className="error">{formErrors.booking_type}</span>}
        </div>

        {formData.booking_type !== 'General Enquiry' && (
          <>
            <div>
              <label htmlFor="date_of_appointment">Date of Appointment <span className="required">*</span>:</label>
              <input
                type="date"
                id="date_of_appointment"
                name="date_of_appointment"
                value={formData.date_of_appointment}
                onChange={handleInputChange}
                required={formData.booking_type !== 'General Enquiry'}
              />
              {formErrors.date_of_appointment && <span className="error">{formErrors.date_of_appointment}</span>}
            </div>
            <div>
              <label htmlFor="time_preference">Time Preference <span className="required">*</span>:</label>
              <input
                type="time"
                id="time_preference"
                name="time_preference"
                value={formData.time_preference}
                onChange={handleInputChange}
                required={formData.booking_type !== 'General Enquiry'}
              />
              {formErrors.time_preference && <span className="error">{formErrors.time_preference}</span>}
            </div>
          </>
        )}

        <div>
          <label htmlFor="email_address">Your Email <span className="required">*</span>:</label>
          <input
            type="email"
            id="email_address"
            name="email_address"
            value={formData.email_address}
            onChange={handleInputChange}
            required
          />
          {formErrors.email_address && <span className="error">{formErrors.email_address}</span>}
        </div>

        <div>
          <label htmlFor="phone_number">Phone Number <span className="required">*</span>:</label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
            required
          />
          {formErrors.phone_number && <span className="error">{formErrors.phone_number}</span>}
        </div>

        <div>
          <label htmlFor="additional_information">Additional Information:</label>
          <textarea
            id="additional_information"
            name="additional_information"
            value={formData.additional_information}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestBooking;
