import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { submitAPI } from "./apifunction";
function BookingForm({form,available_times,handleChange}) {
        const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();
        const today = new Date().toISOString().split("T")[0];
        if(submitAPI(form) && form.date>=today && form.nb_guests>=2){
            console.log(form);
            navigate('/booking_confirmation');
        }
        else {
            if(form.date<today){
                alert(`You must set a booking date at least to ${today}`);
            }
            if(form.nb_guests==1){
                alert("You must set a number of guests of at least 2");
            }
        }
    }
    return (
        <>
        <h1 className="book">Book a table!</h1>
        <div className="general">
        <form onSubmit={submitForm} className="form">
        <div className="options">
        <label htmlFor="res-date">Date</label>
        <input type="date" value={form.date} name="date" id="res-date" onChange={handleChange} data-testid="date-input" required/>
        </div>
        <div className="options">
        <label htmlFor="res-time">Time</label>
        <select id="res-time" name="time" value={form.time} onChange={handleChange} required>
        {available_times.list_available_times.map((time,index) => {
            return <option key={index} value={time}>{time}</option>
        })}
        </select>
        </div>
        <div className="options">
        <label htmlFor="guests">Guests</label>
        <input type="number" name="nb_guests" value={form.nb_guests} onChange={handleChange} placeholder="1" min="1" max="10" id="guests" required/>
        </div>
        <div className="options">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={form.occasion} onChange={handleChange} required>
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>
        </div>
        <input type="submit" className="submit" aria-label="On Click" value="Make your reservation"/>
     </form>
     </div>
     </>
    );
}

export default BookingForm;