import React from "react";
import {
  Box,
  Button,
  FormLabel,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react";

const BookingConfirmed = (props) => {
  const closePage = () => {
    props.setBookData({ type: "close" });
  };

  const dataBook = props.bookData;

  return (
    <div className="booking width-100 bg-primary-green">
      <div className="container">
        <div className="row">
          <div className="col-2 col-sm-1"></div>

          <div className="col-8 col-sm-10">
            <Box p={6} rounded="md" w="100%">
              <h1 className="karla-p fz-16 m-0 color-sec-white text-center">
                Booking Page
              </h1>
              <h1 className="markazi-subtitle m-0 mb-2 color-primary-yellow text-center sm-d-none">
                Your Table Reservation Confirmed
              </h1>
              <h1 className="markazi-subtitle m-0 mb-2 color-primary-yellow text-center testimoni-subtitle lg-d-none">
                Reservation Confirmed
              </h1>
              <form className="mt-3">
                <div className="container">
                  <div className="row">
                    <FormControl className="col-6 col-sm-12">
                      <FormLabel className="color-sec-white" htmlFor="date">
                        Date
                      </FormLabel>
                      <Input
                        bg="white"
                        aria-label="Date"
                        type="input"
                        value={dataBook.date}
                      />
                    </FormControl>

                    <FormControl className="col-6 col-sm-12">
                      <FormLabel className="color-sec-white" htmlFor="time">
                        Time
                      </FormLabel>
                      <Input
                        bg="white"
                        aria-label="Time"
                        type="input"
                        value={dataBook.time}
                      />
                    </FormControl>

                    <FormControl className="col-6 col-sm-12">
                      <FormLabel className="color-sec-white" htmlFor="guest">
                        Number of Guest
                      </FormLabel>
                      <Input
                        bg="white"
                        aria-label="Number of Guest"
                        type="input"
                        value={dataBook.guest}
                      />
                    </FormControl>

                    <FormControl className="col-6 col-sm-12">
                      <FormLabel className="color-sec-white" htmlFor="occasion">
                        Occasion
                      </FormLabel>
                      <Input
                        bg="white"
                        aria-label="Occasion"
                        type="input"
                        value={dataBook.occasion}
                      />
                    </FormControl>

                    <FormControl className="col-6 col-sm-12">
                      <FormLabel className="color-sec-white" htmlFor="name">
                        Full Name
                      </FormLabel>
                      <Input
                        bg="white"
                        aria-label="Full Name"
                        type="input"
                        value={dataBook.name}
                      />
                    </FormControl>

                    <FormControl className="col-6 col-sm-12">
                      <FormLabel className="color-sec-white" htmlFor="email">
                        Email Address
                      </FormLabel>
                      <Input
                        bg="white"
                        aria-label="Email Address"
                        type="input"
                        value={dataBook.email}
                      />
                    </FormControl>

                    <FormControl className="col-12">
                      <FormLabel className="color-sec-white" htmlFor="note">
                        Note Reservation
                      </FormLabel>
                      <Textarea
                        bg="white"
                        aria-label="Note Reservation"
                        type="input"
                        value={dataBook.note}
                      />
                    </FormControl>
                  </div>
                </div>
              </form>

              <Button
                aria-label="Close"
                width="full"
                className="btn-submit bg-primary-yellow"
                onClick={closePage}
              >
                Close
              </Button>
            </Box>
          </div>

          <div className="col-2 col-sm-1"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;
