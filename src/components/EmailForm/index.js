import React from "react";
import "./emailForm.css";
import * as emailjs from 'emailjs-com';


class EmailForm extends React.Component {

    state={
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleSubmit(event) {
        event.preventDefault();

        const { 
            name, 
            email, 
            subject, 
            message 
        } = this.state;

        let templateParams = {
            name: name,
            email: email,
            to_name: 'ashvinithomas@gmail.com',
            subject: subject,
            message: message
        }

        emailjs.send(
            'service_hk2sbyd',
            'template_gqq38ms',
            templateParams,
            'user_sZ6kGvr63lmC5nKplabKd'
        )

        this.resetForm()
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    handleChange = (param, event) => {
        this.setState({ [param]: event.target.value })
    }

    render() {
        return (
            <div className="container" style={{width:"600px", height:"fit-content"}}>
                <p className="heading">contact me.</p>
                <p classname="info">ashvinithomas@gmail.com</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {/* name */}
                    <label for="name">Full Name:</label> <br/>
                    <input value={this.state.name} onChange={this.handleChange.bind(this, 'name')} type="text" id="name" name="fullname" placeholder="Your name.." /> <br/>
                    {/* email */}
                    <label for="email">Email Address:</label> <br/>
                    <input value={this.state.email} onChange={this.handleChange.bind(this, 'email')} type="text" id="email" name="email" placeholder="Your email.." /> <br/>
                    {/* subject */}
                    <label for="subject">Subject</label> <br/>
                    <input value={this.state.subject} onChange={this.handleChange.bind(this, 'subject')} type="text" id="subject" name="subject" placeholder="Subject..." /> <br/>
                    {/* message */}
                    <label for="message">Message:</label> <br/>
                    <textarea value={this.state.message} onChange={this.handleChange.bind(this, 'message')} id="message" name="message" placeholder="Message"></textarea> <br/>
                    {/* Send */}
                    <input type="submit" value="Send" style={{margin: "3% 0"}}></input>
                </form>
            </div>
        )
    }
}

export default EmailForm;