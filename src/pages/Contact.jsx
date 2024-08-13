import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
                alert('Failed to send message.');
            });
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Subject:
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                </label>
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
