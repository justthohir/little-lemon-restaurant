import React from 'react';
import { useFormik } from 'formik';
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
  NumberDecrementStepper
} from "@chakra-ui/react";

const BookingForm = () => {

	const time = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

	const submit = (values) => {
		console.log(values);
	}

	const formik = useFormik({
    initialValues: {
			date: "",
			time: "",
      guest: 1,
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values) => {
      await submit(values);
    },
    validationSchema: Yup.object().shape({
			date: Yup.date().required("Required!"),
			time: Yup.string().required("Required!"),
			guest: Yup.number().required("Required!"),
      email: Yup.string().email("Invalid email!").required("Required!"),
      type: Yup.string().required("Required!"),
      comment: Yup.string().required("Required!"),
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
										<FormLabel htmlFor="time">Choose Time</FormLabel>
										<Select
											id="time"
											name="time"
											value={formik.values.time}
											onChange={formik.handleChange}
										>
											<option className="color-sec-black" value="">Choose Time</option>
											{time.map((vTime, iTime) => {
												return (
													<option key={iTime} className="color-sec-black" value={vTime}>{vTime}</option>
												)
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
										{/* <Input
											id="guest"
											name="guest"
											type="number"
											min="1"
											max="10"
											value={formik.values.guest}
											onChange={formik.handleChange}
										/> */}
										<NumberInput
											defaultValue={0}
											min={1}
											max={10}
											id="guest"
											name="guest"
											value={formik.values.guest}
											onChange={formik.handleChange}
										>
											<NumberInputField />
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
										isInvalid={formik.errors.email && formik.touched.email}
									>
										<FormLabel htmlFor="email">Email Address</FormLabel>
										<Input
											id="email"
											name="email"
											type="email"
											value={formik.values.email}
											onChange={formik.handleChange}
										/>
										{formik.errors.email && formik.touched.email ? (
											<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
										) : null}
									</FormControl>

									<FormControl
										isInvalid={formik.errors.comment && formik.touched.comment}
									>
										<FormLabel htmlFor="comment">Your message</FormLabel>
										<Textarea
											id="comment"
											name="comment"
											height={250}
											value={formik.values.comment}
											onChange={formik.handleChange}
										/>
										{formik.errors.comment && formik.touched.comment ? (
											<FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
										) : null}
									</FormControl>

									<Button
										isDisabled={false}
										type="submit"
										width="full"
										className="btn-submit bg-primary-yellow"
									>
										Submit
										{/* {isLoading ? <Spinner ml="1rem" /> : null} */}
									</Button>
								</VStack>
							</form>
						</Box>

					</div>

					<div className="col-2 col-sm-1"></div>
				</div>
			</div>
    </div>
  )
}

export default BookingForm
