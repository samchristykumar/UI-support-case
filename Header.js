import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString()
        }
    }
    render() {
        //return (
        //<div>
        // <div className="container-fluid">
        // <div className="row">
        //  <div className="col-sm-12">
        //    <div className="col-sm-3">
        //   <h1></h1>
        //     <img src={require('./1280px-Cisco_logo_blue_2016.svg.png')} width="50" height="50" />

        // </div>
        // <div className="col-sm-9">

        //     <h1>Support Case Manager</h1>
        // </div>

        //  </div>

        // </div>
        // </div>
        // </div>
        var style = { "margin-left": "5px" ,"margin-left": "5%" }
        var style2 = { "padding-top": "20px", "font-size": "13px" ,"margin-right": "75%"}
        return (
            <div>
                <div style={style}>
                    <img src={require('./1280px-Cisco_logo_blue_2016.svg.png')} width="35" height="35" className="pull-left" />
                    <div style={style2}><b>Support Case Manager</b></div>
                </div>
            </div>

        );
    }
}
export default Header;