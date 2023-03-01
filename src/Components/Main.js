import React, { useReducer } from 'react';
import {fetchAPI} from './FetchAPI';
import Reservation from './Bookingform'
import {useNavigate} from "react-router-dom"

export default function Bookingform() {
  //let setDate = ('');
  //const date = new Date();

  const navigate = useNavigate();

 // function submitForm (formData)  {
 //   submitAPI(formData)
 //   return ( navigate('/Confirmedbooking'))
 // }

  //submitForm(formData);

  function updateTimes(date) {
    return fetchAPI(date)
  }

  const initializeTimes = fetchAPI(new Date());


  //(availableTimes, action) => {

  //if (action.type === date) setDate(action.value);
    //return (availableTimes);
 // }
  const [ availableTimes, dispatch] =  useReducer(updateTimes, initializeTimes);

    return (
      <>
      <Reservation availableTimes={availableTimes} updateTimes={dispatch} />
      </>
    )
}


      {/*<div className="Field">

      <label htmlFor='date'>Choose Date</label>
      <input
      id='date'
      type="date"
      //name='date'
      //value={date}
      onChange={(e)=> dispatch({date:e.target.value})} />


     <label htmlFor='res-time'>Choose Time </label>
     <select
      id="res-time"
     // value=""
     // onChange={(e) =>{
     // dispatch(e.target.value)
     // }}
     >
    {availableTimes.map (time =>
    <option> {time} </option>
    )}
    </select>
   </div>

  )
} 
*/}
