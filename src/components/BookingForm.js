import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spinner,
} from "@chakra-ui/react";

const BookingForm = () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const listTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (values) => {
    await wait(2000);
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guest: 0,
      occasion: "",
      name: "",
      email: "",
      note: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      await submit(values);
      setIsLoading(false);
    },
    validationSchema: Yup.object().shape({
      date: Yup.date().required("Required!"),
      time: Yup.string().required("Required!"),
      guest: Yup.number()
        .min(1, "Minimum guest is 1")
        .max(10, "Maximum guest is 10")
        .required("Required!"),
      occasion: Yup.string().required("Required!"),
      name: Yup.string().required("Required!"),
      email: Yup.string().email("Invalid email!").required("Required!"),
      note: Yup.string().required("Required!"),
    }),
  });

  return (
    <div className="booking width-100 bg-primary-green">
      <div className="container">
        <div className="row">
          <div className="col-2 col-sm-1"></div>

          <div className="col-8 col-sm-10">
            <Box p={6} rounded="md" w="100%" className="color-sec-white">
              <h1 className="karla-p fz-16 m-0 color-sec-white text-center">
                Booking Page
              </h1>
              <h1 className="markazi-subtitle m-0 color-primary-yellow text-center sm-d-none">
                Reserve Your Table at Little Lemon
              </h1>
              <h1 className="markazi-subtitle m-0 color-primary-yellow text-center lg-d-none">
                Reserve Your Table
              </h1>
              <form onSubmit={formik.handleSubmit} className="mt-3">
                <VStack spacing={4}>
                  <FormControl
                    isInvalid={formik.errors.date && formik.touched.date}
                  >
                    <FormLabel htmlFor="date">Choose Date</FormLabel>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.date && formik.touched.date ? (
                      <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={formik.errors.time && formik.touched.time}
                  >
                    <FormLabel htmlFor="time">Time</FormLabel>
                    <Select
                      id="time"
                      name="time"
                      value={formik.values.time}
                      onChange={formik.handleChange}
                    >
                      <option className="color-sec-black" value="">
                        _ _ : _ _
                      </option>
                      {listTime.map((vTime, iTime) => {
                        return (
                          <option
                            key={iTime}
                            className="color-sec-black"
                            value={vTime}
                          >
                            {vTime}
                          </option>
                        );
                      })}
                    </Select>
                    {formik.errors.time && formik.touched.time ? (
                      <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={formik.errors.guest && formik.touched.guest}
                  >
                    <FormLabel htmlFor="guest">Number of Guest</FormLabel>
                    <NumberInput
                      defaultValue={0}
                      min={1}
                      max={10}
                      id="guest"
                      name="guest"
                      clampValueOnBlur={false}
                    >
                      <NumberInputField
                        value={formik.values.guest}
                        onChange={formik.handleChange}
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    {formik.errors.guest && formik.touched.guest ? (
                      <FormErrorMessage>{formik.errors.guest}</FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={
                      formik.errors.occasion && formik.touched.occasion
                    }
                  >
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select
                      id="occasion"
                      name="occasion"
                      value={formik.values.occasion}
                      onChange={formik.handleChange}
                    >
                      <option className="color-sec-black" value="">
                        Choose Occasion
                      </option>
                      <option className="color-sec-black" value="Birthday">
                        Birthday
                      </option>
                      <option className="color-sec-black" value="Anniversary">
                        Anniversary
                      </option>
                    </Select>
                    {formik.errors.occasion && formik.touched.occasion ? (
                      <FormErrorMessage>
                        {formik.errors.occasion}
                      </FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={formik.errors.name && formik.touched.name}
                  >
                    <FormLabel htmlFor="name">Full Name</FormLabel>
                    <Input
                      id="name"
                      name="name"
                      placeholder="eg. Sophia Latjuba"
                      type="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={formik.errors.email && formik.touched.email}
                  >
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      placeholder="example@domain.com"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <FormControl
                    isInvalid={formik.errors.note && formik.touched.note}
                  >
                    <FormLabel htmlFor="note">Note Reservation</FormLabel>
                    <Textarea
                      id="note"
                      name="note"
                      height={150}
                      value={formik.values.note}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.note && formik.touched.note ? (
                      <FormErrorMessage>{formik.errors.note}</FormErrorMessage>
                    ) : null}
                  </FormControl>

                  <Button
                    isDisabled={isLoading}
                    type="submit"
                    width="full"
                    className="btn-submit bg-primary-yellow"
                  >
                    Make Your reservation
                    {isLoading ? <Spinner ml="1rem" /> : null}
                  </Button>
                </VStack>
              </form>
            </Box>
          </div>

          <div className="col-2 col-sm-1"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
