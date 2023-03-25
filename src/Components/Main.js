import React, { useReducer } from "react";
import { fetchAPI } from "./FetchAPI";
import Reservation from "./Bookingform";

function updateTimes(date) {
  return fetchAPI(date);
}
const initializeTimes = fetchAPI(new Date());

export default function Bookingform() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Reservation availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
