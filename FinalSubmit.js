import React, { Component } from 'react';
import Header from './Header';
import { Link } from "react-router-dom";



class FinalSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }

    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <Header />

                    </div>
                </div>
                <hr></hr>

                <div className="submitCase">
                     <h3> <i className="far fa-check-circle fa-3x" style={{ backgroundColor: "white", color: "green" }}></i> <p1>Additional Info Updated For Your Case Reference Number is </p1><b>{this.props.finalCase.letTicket}.</b></h3> 
                </div>
            </div>
        );
    }
}

export default FinalSubmit;