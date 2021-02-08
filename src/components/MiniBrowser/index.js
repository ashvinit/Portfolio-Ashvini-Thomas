import React from "react";
import "./miniBrowser.css";

function MiniBrowser() {
    return (
        <div className="browser">
            <div className="row">
                <div className="col left">
                    <span className="dot" style={{background:"#ED594A"}}></span>
                    <span className="dot" style={{background:"#FDD800"}}></span>
                    <span className="dot" style={{background:"#5AC05A"}}></span>
                </div>
                <div className="col middle">
                    <input type="text" value="http://www.w3schools.com" />
                </div>
                <div className="col right">
                    <div style={{float:"right"}}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}

export default MiniBrowser;



