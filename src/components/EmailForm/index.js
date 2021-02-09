import React from "react";
import "./emailForm.css";

class EmailForm extends React.Component {
    render() {
        return (
            <div className="container" style={{width:"600px", height:"700px"}}>
                <p className="heading">contact me.</p>
                <form>
                    {/* name */}
                    <label for="name">Full Name:</label> <br/>
                    <input type="text" id="name" name="fullname" placeholder="Your name.." /> <br/>
                    {/* subject */}
                    {/* name */}
                    <label for="subject">Subject</label> <br/>
                    <input type="text" id="subject" name="subject" placeholder="Subject..." /> <br/>
                    {/* message */}
                    <label for="message">Message:</label> <br/>
                    <textarea id="message" name="message" placeholder="Message"></textarea> <br/>
                    {/* Send */}
                    <input type="submit" value="Send"></input>
                </form>
            </div>
        )
    }
}

export default EmailForm;