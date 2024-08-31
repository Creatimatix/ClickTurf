import React from 'react';
import "../styles/BookingPage.css";

function BookingPage() {
  return (
    <div> <div class="container">
        <h1>Book Your Time Slot</h1>
        <div class="time-slots">
            <div class="slot-card" data-slot="09:00 AM">09:00 AM</div>
            <div class="slot-card" data-slot="10:00 AM">10:00 AM</div>
            <div class="slot-card" data-slot="11:00 AM">11:00 AM</div>
            <div class="slot-card" data-slot="12:00 PM">12:00 PM</div>
            <div class="slot-card booked" data-slot="01:00 PM">01:00 PM<br/><small>Booked</small></div>
            <div class="slot-card booked" data-slot="01:30 PM">01:30 PM<br/><small>Booked</small></div>
            <div class="slot-card booked" data-slot="02:00 PM">02:00 PM<br/><small>Booked</small></div>
            <div class="slot-card" data-slot="03:00 PM">03:00 PM</div>
            <div class="slot-card" data-slot="04:00 PM">04:00 PM</div>
        </div>
        <button id="book-button">Book Slot</button>
        <p id="selected-slot">No slot selected</p>
    </div></div>
  )
}

export default BookingPage