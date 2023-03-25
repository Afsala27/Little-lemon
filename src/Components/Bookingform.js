
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const initialValues = {
  Name: "",
  pickDate: null,
  time: "",
  guests: "",
  occation: "",
};

const onSubmit = (values) => {
  //console.log("Form Data", values);
};

const validationSchema = Yup.object({
  Name: Yup.string().required("Required"),
  pickDate: Yup.date().required("Required!").nullable(),
  time: Yup.string().required("Required"),
  guests: Yup.string().required("Required"),
  occation: Yup.string().required("Required"),
});

export default function Reservation(props) {
  const [pickDate, setPickDate] = useState("");
  const [finalTime, setFinalTime] = useState("");

  function handleDateChange(e) {
    setPickDate(e);
    var stringify = e;
    const pickDate = new Date(stringify);
    props.updateTimes(pickDate);
    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  //console.log("Visited", Formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      handleDateChange={handleDateChange}
      validateOnMount
    >
      {(formik) => {
        //console.log("Formik props", formik);
        return (
          <div className="background">
            <Form className="form">
              <fieldset className="App">
                <div className="Field-item">
                  <label htmlFor="Name">Name</label>
                  <Field
                    type="text"
                    placeholder="Enter your Name"
                    id="Name"
                    name="Name"
                  />
                  <ErrorMessage name="Name">
                    {(errorMsg) => <div className="error">{errorMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="Field-item">
                  <label htmlFor="date">Select Date</label>
                  <DatePicker
                    selected={pickDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                  />
                  <ErrorMessage name="date">
                    {(errorMsg) => <div className="error">{errorMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="Field-item">
                  <label htmlFor="time">Select Time</label>
                  <Field as="select" id="time" name="time">
                    {finalTime}
                  </Field>
                  <ErrorMessage name="time">
                    {(errorMsg) => <div className="error">{errorMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="Field-item">
                  <label htmlFor="guests">Number of guests</label>
                  <Field
                    type="number"
                    placeholder="Select Number of guests"
                    min="1"
                    max="10"
                    id="guests"
                    name="guests"
                  />
                  <ErrorMessage name="guests">
                    {(errorMsg) => <div className="error">{errorMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="Field-item">
                  <label htmlFor="occasion">Occasion</label>
                  <Field as="select" id="occasion" name="occation">
                    <option>Select any occation</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </Field>
                  <ErrorMessage name="occation">
                    {(errorMsg) => <div className="error">{errorMsg}</div>}
                  </ErrorMessage>
                </div>
                <Link to="/confirmbooking">
                  <button
                    className="primary-button"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Book Table
                  </button>
                </Link>
              </fieldset>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
