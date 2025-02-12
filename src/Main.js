import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import './App.css';
import { useReducer } from "react";
import { useState } from "react";
import { fetchAPI } from "./apifunction";
import { seededRandom } from "./apifunction";
import ConfirmedBooking from "./ConfirmedBooking";
function Main() {
    const [form, setForm] = useState({
        date:new Date().toISOString().split("T")[0],
        time:"17:00",
        nb_guests:1,
        occasion:"Birthday"
    });
    const initializeTimes = {
        date:form.date,
        list_available_times:fetchAPI(form.date)
    }
    function reducer(state, action) {
        switch (action.type) {
            case 'date_changed':
                return {
                    ...state,
                    list_available_times:action.list_times
                };
            default:
                return state;
        }
    }
    const [availableTimes, setavailableTimes] = useReducer(reducer, initializeTimes);
    const updateTimes = (e) => {
        if(e.target.name ==="date"){
            setavailableTimes({
                type:'date_changed',
                list_times:fetchAPI(form.date)
            });
        }
     }
    const handleChange = (e) => {
        setForm((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value
        }));
        updateTimes(e);
     }
    return (
<Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/menu" element={<Menu/>}></Route>
    <Route path="/booking" element={<BookingPage form={form} available_times={availableTimes} handleChange={handleChange}/>}></Route>
    <Route path="/booking_confirmation" element={<ConfirmedBooking/>}></Route>
    <Route path="/order-online" element={<OrderOnline/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
</Routes>
    );
}
export default Main;