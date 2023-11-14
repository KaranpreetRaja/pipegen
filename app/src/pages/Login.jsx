import React, { useState } from 'react';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc'
import { IconContext } from "react-icons";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        try {
            const user = {
                email: formData.email,
                password: formData.password
            };

            const response = await axios.post('/api/login', user);
            console.log('User logged in successfully:', response.data.uid);
        } catch (error) {
            console.error('Error during login:', error.response ? error.response.data.error : error.message);
        }
    };

    return (
        <div className="login-form-container">
            <div className="login-form2">
                <h2>
                    <img src='/logo.png' width={28} /> PipeGen AI
                </h2>
            </div>
            <div>
                <div className="flex justify-center w-full mt-2">
                    <button className="w-96 h-12 input-field bg-white border-slate-500 border-2 text-black font-bold py-3 px-24 rounded inline-flex items-center">
                        <IconContext.Provider value={{ size: "30px" }}>
                            <FcGoogle />
                        </IconContext.Provider>
                        <span className="ml-4">Sign in with Google</span>
                    </button>
                </div>
                <p className="text-sm font-semibold text-center mt-4">
                    <span className="border-b w-full text-center border-gray-300 py-1">
                    Or
                    </span>
                </p>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        className="input-field"
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
                        className="input-field"
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
                    <button className="btn-submit" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
