import React, { Component } from 'react';
class ComponentOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString()
        }
    }
    render() {
        return (
            <div className="main-div">
                <h1>Cisco</h1>
                <p>>Welcome to:{this.props.match.params.username}</p>
            </div>
        );
    }
}
export default ComponentOne;