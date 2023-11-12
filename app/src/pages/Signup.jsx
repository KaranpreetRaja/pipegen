import React, { useState } from 'react';

const Signup = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your form submission logic here
		console.log('Form submitted:', formData);
	};

	return (
		<div className="sign-up-form-container">
			<div className='sign-up-form'>
				<h2><img src='/logo.png' width={28} /> PipeGen AI</h2>
			</div>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<div className="form-row">
					<div className="form-group">
						<label htmlFor="firstName">First Name</label>
						<input
							className='input-field'
							type="text"
							id="firstName"
							name="firstName"
							value={formData.firstName}
							onChange={handleChange}
							placeholder="First name"
							required
						/>
					</div>
					<div className="form-group" style={{ marginLeft: 10 }}>
						<label htmlFor="lastName">Last Name</label>
						<input
							className='input-field'
							type="text"
							id="lastName"
							name="lastName"
							value={formData.lastName}
							onChange={handleChange}
							placeholder="Last name"
							required
						/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						className='input-field'
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Enter your email"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						className='input-field'
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="Enter your password"
						required
					/>
				</div>
				<div className="form-group">
					<button className='btn-submit' type="submit">Sign Up</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
