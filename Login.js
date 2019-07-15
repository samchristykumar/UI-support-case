import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header';



class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            pass: ""
        }

        this.updateUser = this.updateUser.bind(this);
        this.updatePass = this.updatePass.bind(this);
        this.updateDetails = this.updateDetails.bind(this);

    }
    updateUser(e) {
        this.setState({ user: e.target.value });
    }
    updatePass(e) {
        this.setState({ pass: e.target.value });
    }
    updateDetails(e) {
        // alert(this.state.pass)
        if (this.state.user == "cisco" && this.state.pass == "1234") {
            this.props.history.push(`/Login/${this.state.user}`);
            // alert(this.state.user)
        }
        else {
            alert("Please enter a valid name");
        }
    }
    render() {
        return (


            <div>

                <div className="clsHeader">
                    <Header/>
                    

                </div>
                <div className="clsLogin">
                    <h2>Login</h2>

                    <form onSubmit={this.updateDetails}>
                        <label>Username:</label>
                        <input type="text" value={this.state.user} onChange={this.updateUser} required /> <br />

                        <br />
                        <label>Password:</label>
                        <input type="password" value={this.state.pass} onChange={this.updatePass} required /> <br />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}



export default Login;