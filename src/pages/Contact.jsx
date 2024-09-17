import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send("service_yz469wu","template_z9phfa9", 'S7Pm1uhHKlrsYu99X', {
            name:formData.name,
            email: formData.email,
            subject:formData.subject,
            message:formData.message
        })
            .then((response) => {
                console.log('Success:', response);
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.log('Error:', error);
                alert('Failed to send message.Please try again later!');
            });
    };

    return (
        <>
                <nav>
            <h2 className='logo'>FELIX <span>JOHN</span></h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/services">Services</a></li>
            </ul>
            <button className='btn'>Contact me</button>
        </nav>
        <div className="contact-form-container">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input" />
                </label>
                <label className="form-label">
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />
                </label>
                <label className="form-label">
                    Subject:
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="form-input" />
                </label>
                <label className="form-label">
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required className="form-textarea"></textarea>
                </label>
                <button type="submit" className="form-button">Send</button>
            </form>
        </div>
        </>
    );
};

export default Contact;
