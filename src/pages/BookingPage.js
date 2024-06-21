import React, { useReducer } from "react";
import "../assets/css/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

const BookingPage = () => {
  const initializeTimes = {
    time: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };

  const updateTimes = (state, action) => {
    let day = new Date(action.date).getDay();
    var newTime = initializeTimes.time;

    if (day === 0 || day === 5 || day === 6) {
      newTime = [...state.time, "23:00", "24:00"];
    }

    return { ...state, time: newTime };
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      <Header />
      <main>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
