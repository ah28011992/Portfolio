import React, { useState } from "react";
import Title from "../Components/Title";

const Contact = () => {
	const [inputs, setInputs] = useState({});
	const [isValidEmail, setIsValidEmail] = useState(true);
	const [formError, setFormError] = useState(null);

	const validateEmail = (email) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setInputs((values) => ({ ...values, [name]: value }));

		if (name === "email") {
			const isValid = validateEmail(value);
			setIsValidEmail(isValid);
			if (!isValid) {
				setFormError("Please enter a valid email address.");
			} else {
				setFormError(null);
			}
		} else if (name === "first_name" || name === "last_name") {
			if (value.length < 2 || value.length > 50) {
				setFormError("Please enter a valid name (2-50 characters).");
			} else {
				setFormError(null);
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className='home'>
			<Title />
			<p className='home__text'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta
				hendrerit leo, nec convallis sem efficitur a. Pellentesque accumsan
				velit sit amet tellus aliquet, non.
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
							placeholder='First Name'
							id='first_name'
							onChange={handleChange}
							className={
								inputs.first_name &&
								inputs.first_name.length >= 2 &&
								inputs.first_name.length <= 50
									? "valid-input"
									: "invalid"
							}
							autoComplete='off'
							required
						/>

						<label htmlFor='last_name'>Last name</label>
						<input
							type='text'
							name='last_name'
							placeholder='Last Name'
							id='last_name'
							onChange={handleChange}
							className={
								inputs.last_name &&
								inputs.last_name.length >= 2 &&
								inputs.last_name.length <= 50
									? "valid-input"
									: "invalid"
							}
							autoComplete='off'
							required></input>

						<label htmlFor='email_address'>Email</label>
						<input
							type='text'
							name='email'
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
							name='message'
							autoComplete='off'
							onChange={handleChange}
							className={
								inputs.message &&
								inputs.message.length >= 2 &&
								inputs.message.length <= 150
									? "valid-input"
									: "invalid"
							}
							required
						/>
						<button
							className='submit'
							type='submit'
							// className={styles.button__send}
							// disabled={!isValidEmail}>
						>
							Submit
						</button>
					</div>
					{/* {formError && <p className='form_error'>{formError}</p>}
					{isSubmitted && (
						<p className='form_submitted'>For submitted Successfully</p>
					)} */}
				</form>
			</section>
		</section>
	);
};

export default Contact;
