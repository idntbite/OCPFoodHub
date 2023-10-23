import React, { useState } from 'react';


function Form(props) {
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [order, setOrder] = useState('');

  // Access the selected restaurant data from props.location.state
  const selectedRestaurant = props.location.state.selectedRestaurant;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can handle the form submission, including the selected restaurant data.
    console.log('Selected Restaurant:', selectedRestaurant);
    
    // After handling the submission, you can clear the form inputs if needed.
    setReservationDate('');
    setReservationTime('');
    setNumberOfGuests('');
    setOrder('');
  };

  return (
    <div>
      <h2>Reservation and Order Form for {selectedRestaurant.name}</h2>
      {/* Rest of your form */}
    </div>
  );
}

export default Form;
