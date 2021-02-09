import React from "react";
import "./emailForm.css";

class EmailForm extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
                    {/* name */}
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="fullname" placeholder="Your name.." />
                    {/* message */}
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Message" style={{height:"200px"}}></textarea>
                    {/* Send */}
                    <input type="submit" value="Send"></input>
                </form>
            </div>
        )
    }
}

export default EmailForm;