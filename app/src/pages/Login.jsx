import React, { useState } from 'react';
import axios from 'axios';

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
