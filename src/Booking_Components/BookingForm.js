import './BookingForm.css';
import React, {useState} from 'react';
import { submitAPI } from '../Api';

function BookingForm(props) {
    const [formData, setFormData] = useState(
        {
            'date':'',
            'time':'',
            'guestsNum':'',
            'occasion':''
        }
    );

    const dateChange = (e) => {
        setFormData(prevState => { return {...prevState,'date':e.target.value}});
        props.dispatch(e.target.value);
    }

    var curr = new Date();
    curr.setMinutes(curr.getMinutes() - curr.getTimezoneOffset());
    var date = curr.toISOString().substring(0,10);
    return (
        <div className='bookingform'>
            <div className='hu'></div>
            <form onSubmit={submitAPI(formData)}>
            <h1>Book Now</h1>
                <label htmlFor="res-date" >Choose date</label>
                <input type="date" id="res-date" onChange={dateChange} defaultValue={date}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " onChange={(e) => setFormData(prevState => { return {...prevState,'time':e.target.value}})}>
                    {props.availableTime.map((time, i) => { return <option key={i}>{time}</option>})}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setFormData(prevState => { return {...prevState,'guestsNum':e.target.value}})}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={(e) => setFormData(prevState => { return {...prevState,'occasion':e.target.value}})}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"  className='make'/>
            </form>
        </div>
    )
}

export default BookingForm;