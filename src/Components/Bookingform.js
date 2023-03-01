import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
//import {Bookingform} from './Main';
//import {useNavigate} from "react-router-dom"
//import { submitAPI } from './FetchAPI';
import {Confirmedbooking} from "./Confirmedbooking"


export default function Reservation(props) {

  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccation] = useState("");
  const [finalTime, setFinalTime] = useState("");
  const [formData, setFormData] = useState("")

  function handleDateChange(e){
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify)

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

 // function buttonSubmit (e) {
 //   e.preventDefault();
 //   props.submitForm(formData)
 //   console.log(formData);
 //  }

 const onChangeHandler = (e) => {
  setFormData(()=>({
      ...formData,
      [e.target.id]: e.target.value
  }))
}


  const clearForm = () => {
    setDate("");
    setGuests("");
    setOccation("");
    setFinalTime("");
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.table(formData)
  clearForm("")
  };

  //const navigate = useNavigate();

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>

        <div className="Field">
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          name='date'
          required
          value={date}
          onChange={handleDateChange}
        />
      </div>


      <div className="Field">
        <label htmlFor="time">Select Time</label>
        <select
        id="time"
        required
        name='time'
        >
        {finalTime}
        </select>
      </div>



        <div className="Field">
          <label htmlFor='guests'>Number of guests</label>
          <input
          type="number"
          placeholder="Select Number of guests"
          min="1"
          max="10"
          id="guests"
          name='guests'
          required
          value={guests}
          onChange={(e) => {
          setGuests(e.target.value)
          }}
          />
        </div>


        <div className="Field">
          <label htmlFor='occasion'>Occasion</label>
          <select
          id="occasion"
          name='occation'
          required
          value={occasion}
          onChange={onChangeHandler}
          >
           <option>Birthday</option>
           <option>Anniversary</option>
          </select>
        </div>

        <button className="primary-button" to="/confirmbooking">
          Book Table
        </button>
        </fieldset>
      </form>
    </div>
  );
 }