import React, { useState } from "react";
import Title from "../Components/Title";
import firebaseConfig from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
const db = firebaseConfig.db;

const time = Date.now();
const dateData = new Intl.DateTimeFormat("en-UK", {
	year: "numeric",
	month: "long",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
}).format(time);

const formData = {
	first_name: "",
	last_name: "",
	email: "",
	message: "",
	time: dateData,
};

const Contact = () => {
	const [formInputs, setFormInputs] = useState(formData);
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [formError, setFormError] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const validateEmail = (email) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormInputs((values) => ({ ...values, [name]: value }));

		if (name === "email") {
			const isValid = validateEmail(value);
			setIsValidEmail(isValid);
			if (!isValid) {
				setFormError("Please enter a valid email address.");
			} else {
				setFormError(null);
			}
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const formSubmissionsRef = await addDoc(
				collection(db, "formSubmissions"),
				{
					...formInputs,
				}
			);
			console.log("submitted");
			setIsSubmitted(true);
			setFormInputs(formData);
		} catch (error) {
			console.log("error message", error);
		}
	};

	return (
		<section className='home'>
			<Title />
			<p className='home__text'>
				If you have any questions, ideas, or opportunities you'd like to
				discuss, I'd love to hear from you! Fill out the form below, and I'll
				get back to you as soon as possible
			</p>
			<section className='contact-form'>
				<form
					className='form'
					onSubmit={handleSubmit}>
					<div className='contact-form__labels'>
						<label htmlFor='first_name'>First Name</label>
						<input
							type='text'
							name='first_name'
							value={formInputs.first_name}
							placeholder='First Name'
							id='first_name'
							onChange={handleChange}
							className={
								formInputs.first_name &&
								formInputs.first_name.length >= 2 &&
								formInputs.first_name.length <= 50
									? "valid-input"
									: "invalid"
							}
							autoComplete='off'
							required
						/>
						{!formInputs.first_name ||
						formInputs.first_name.length < 2 ||
						formInputs.first_name.length > 50 ? (
							<p className='form_error'>
								Please enter a valid name (2-50 characters).
							</p>
						) : null}
						<label htmlFor='last_name'>Last name</label>
						<input
							type='text'
							name='last_name'
							value={formInputs.last_name}
							placeholder='Last Name'
							id='last_name'
							onChange={handleChange}
							className={
								formInputs.last_name &&
								formInputs.last_name.length >= 2 &&
								formInputs.last_name.length <= 50
									? "valid-input"
									: "invalid"
							}
							autoComplete='off'
							required></input>
						{!formInputs.last_name ||
						formInputs.last_name.length < 2 ||
						formInputs.last_name.length > 50 ? (
							<p className='form_error'>
								Please enter a valid name (2-50 characters).
							</p>
						) : null}
						<label htmlFor='email_address'>Email</label>
						<input
							type='text'
							name='email'
							value={formInputs.email}
							id='email_address'
							className={!isValidEmail ? "invalid" : "valid-input"}
							placeholder='example@hello.co.uk'
							autoComplete='off'
							onChange={handleChange}
							required
						/>
						{!isValidEmail && (
							<p className='form_error'>Please enter a valid email address.</p>
						)}
						<label htmlFor='message'>Message</label>
						<textarea
							placeholder='Start typing...'
							id='message'
							value={formInputs.message}
							name='message'
							autoComplete='off'
							onChange={handleChange}
							className={
								formInputs.message &&
								formInputs.message.length >= 2 &&
								formInputs.message.length <= 150
									? "valid-input"
									: "invalid"
							}
							required
						/>
						<button
							className='submit'
							type='submit'
							disabled={!isValidEmail}>
							Submit
						</button>
					</div>

					{!!isSubmitted ? (
						<p className='form_submitted'>Form submitted Successfully</p>
					) : (
						formError && <p className='form_error'>{formError}</p>
					)}
				</form>
			</section>
		</section>
	);
};

export default Contact;
