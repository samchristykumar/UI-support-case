import React, { Component } from 'react';
import Header from './Header';
import FinalSubmit from './FinalSubmit';

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // date: new Date().toLocaleString()
            // steRandomStr: Math.floor(Math.random() * 10000000 + 1000) 
            objPass: ""
        }
        this.doSubmit = this.doSubmit.bind(this);
        // this.btnSubTech2 = this.btnSubTech2.bind(this);
        // this.doload = this.doload(this);
    }
    // btnSubTech2(evt){
    //     var buttons = document.getElementsByClassName("btnTech2");
    //     for (var i = 0; i < buttons.length; i++) {
    //          console.log(evt.target.value)
    //         buttons[i].style["background-color"] = "white"
    //         if (buttons[i] == evt.target) {
    //             evt.target.style["backgroundColor"] = "skyblue";
    //         }
    //     }
    // }
    // doload() {
    //     // alert()
    //     // let letRandom = Math.floor(Math.random() * 10000000 + 1000);
    //     // let letRandomStr = letRandom + "ABC";
    //     this.setState({
    //         steRandomStr: Math.floor(Math.random() * 10000000 + 1000)
    //     },()=>{console.log("jsssskj"+this.state.steRandomStr)})
    //     // alert(letRandomStr)
    //     console.log("jkj"+this.state.steRandomStr)
    // }

    doSubmit() {

        var objVal = {
            letTicket: this.props.product1.letRandom
        }
        // alert(this.props.product1.letRandom) 
        // let letTicket = this.props.match.params.ticketNum;
        // console.log(letTicket)
        // console.log(this.props.history.push(`/FinalTicket/${letTicket}`))
        // this.props.history.push(`/Submit/${letRandomStr}`);
        // this.props.history.push(`/FinalSubmit/${letTicket}`);
        this.setState({
            objPass: objVal
        })
        this.setState({ submitted: true })

    }
    render() {
        // <script src="./../src/components/dropzone.js"></script>
        var beforesubmit =
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <Header />

                    </div>
                </div>
                <hr></hr>
                <div className="submitCase">
                    <h3> <i className="far fa-check-circle fa-3x" style={{ backgroundColor: "white", color: "green" }}></i> <p1>Case Submitted, Your Case Reference Number is </p1><b>{this.props.product1.letRandom}.</b></h3>
                    {/* {this.props.match.params.ticketNum} */}
                    {/* {this.props.product1.letMainCategory}
                    {this.props.product1.letTech}
                    {this.props.product1.letDescription}
                    {this.props.product1.letSeverity} */}
                </div>
                <div className="finalAlign">
                    <div>
                        <table>
                            <tr>
                                <th><center>Main product</center></th>
                                <th><center>Description</center></th>
                                <th><center>Technology</center></th>
                                <th><center>Severity</center></th>
                            </tr>
                            <tr>
                                <td>{this.props.product1.letMainCategory}</td>
                                <td>{this.props.product1.letDescription}</td>
                                <td>{this.props.product1.letTech}</td>
                                <td>{this.props.product1.letSeverity}</td>

                            </tr>
                        </table>
                    </div>
                </div>

                {/* <div>
                    <b>{this.props.match.params.productMain}</b>
                </div>
                {this.props.match.params.productMain} */}
                <div className="add_info">
                    <label>ADDITIONAL INFORMATION (optional)</label>
                    <label>Contact Info</label>
                </div>
                <div>
                    <i className="far fa-envelope fa-1.5x" style={{ backgroundColor: "white", color: "skyblue" }}></i><span><p1>&nbsp;&nbsp;shunmuga@cisco.com</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <i className="fas fa-user fa-1.5x" style={{ backgroundColor: "white", color: "skyblue" }}></i><span><p1>&nbsp;&nbsp;Shanmuga Sundar V</p1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <i className="fas fa-fax fa-1x" style={{ backgroundColor: "white", color: "skyblue" }}></i><span><p1>&nbsp;&nbsp;22657809</p1></span>
                </div>
                {/* <div>
                    <label>Attachments</label>
                    <div className="fas fa-upload">
                        <input type="file" />
                    </div>
                </div> */}

                {/* <form action="/file-upload" className="dropzone">
                    <div className="fallback">
                        <input name="file" type="file" multiple />
                    </div>
                </form> */}

                <div>
                    <label>Attachments</label>
                    <div className="upload">
                        <input type="file"></input>
                    </div>

                </div>
                <div>
                    <br />
                    <button type="button" style={{ backgroundColor: "skyblue", color: "white" }} className="clsSubmit" onClick={(e) => this.doSubmit(e)}> Submit Info </button>
                </div>
            </div>
        var aftersubmit = <FinalSubmit finalCase={this.state.objPass} />
        var output = (!this.state.submitted) ? beforesubmit : aftersubmit;
        return output;

    }
}
export default Submit;