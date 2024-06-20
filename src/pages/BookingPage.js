import React from "react";
import "../assets/css/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

const BookingPage = () => {
  return (
    <>
      <Header />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
