import React, { useState } from 'react';
import axios from "axios"
import { FcGoogle } from 'react-icons/fc'
import { IconContext } from "react-icons";

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

	const handleSubmit = async (formData) => {
		console.log('Form submitted:', formData);
		try {
			const user = {
				email: formData.email,
				password: formData.password,
				email_verified: true,
				account_disabled: false
			};

			const response = await axios.post('/api/register', user);
			console.log('User registered successfully:', response.data.uid);
		} catch (error) {
			console.error('Error during registration:', error.response ? error.response.data.error : error.message);
		}
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
				<p className="text-sm font-semibold text-center m-4">
					<span className="border-b w-full text-center border-gray-300 py-1">
						Or
					</span>
				</p>
				<div className="flex justify-center w-full mt-2">
					<button className="w-96 h-12 input-field bg-white border-slate-500 border-2 text-black font-bold py-3 px-24 rounded inline-flex items-center">
						<IconContext.Provider value={{ size: "30px" }}>
							<FcGoogle />
						</IconContext.Provider>
						<span className="ml-4">Continue with Google</span>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
