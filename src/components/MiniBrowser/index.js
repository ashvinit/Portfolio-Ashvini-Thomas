import React from "react";
import "./miniBrowser.css";



class MiniBrowser extends React.Component {

    render() {
        return (
            <div className="browser">
                <div className="row">
                    <div className="col left">
                        <span className="dot" style={{background:"#ED594A"}}></span>
                        <span className="dot" style={{background:"#FDD800"}}></span>
                        <span className="dot" style={{background:"#5AC05A"}}></span>
                    </div>
                    <div className="col middle">
                        <input type="text" value={this.props.value} />
                    </div>
                    <div className="col right">
                        <div style={{float:"right"}}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                </div>
                <div>
                    <a href={this.props.link} className="deployed"><img className="projects" src={this.props.src} alt={""} /></a>
                </div>
                <a href={this.props.href} className="fa fa-github"></a>
            </div>
        )

    }

}

export default MiniBrowser;



