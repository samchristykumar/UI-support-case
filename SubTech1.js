import React, { Component } from 'react';
import SupportCase from './SupportCase';


class SubTech1 extends Component {
    constructor(props) {
        super(props);
        //debugger;
        this.state = {
            date: new Date().toLocaleString(),
            subTechButton: "",
            // val:""subTechButton
        }
        this.btnSubTech1 = this.btnSubTech1.bind(this);
    }
    btnSubTech1(evt) {
        console.log(evt.target.id);
        var buttons = document.getElementsByClassName("btnTech1");
        for (var i = 0; i < buttons.length; i++) {
            // alert(evt.target.value)
            buttons[i].style["background-color"] = "grey";
            buttons[i].style["color"] = "white";
            if (buttons[i] == evt.target) {
                evt.target.style["backgroundColor"] = "skyblue";
                this.setState({
                    // subTechButton: evt.target.

                    subTechButton: document.getElementById(evt.target.id).textContent
                })
                // debugger;
                console.log(this.state.subTechButton)
            }
        }
        // this.props.history.push(`/SubTech1/${this.state.subTechButton}`);
    }

    render() {

        return (
            <div>
                <button type="button" id={1} onClick={(e) => this.btnSubTech1(e)} style={{ backgroundColor: "grey", color: "white" }} className="btnTech1 btn_narrow" >Cisco Cate Switches 1</button>
                <button type="button" id={2} onClick={(e) => this.btnSubTech1(e)} style={{ backgroundColor: "grey", color: "white" }} className="btnTech1 btn_narrow">Cisco Cate Switches 1</button>
                <button type="button" id={3} onClick={(e) => this.btnSubTech1(e)} style={{ backgroundColor: "grey", color: "white" }} className="btnTech1 btn_narrow">Cisco Cate Switches 1</button>



                {/* <span><SupportCase subTechButton1 = {this.state.subTechButton} /></span> */}
                {/* <SupportCase>{this.props.subTechButton1 * this.props.subTechButton1}</SupportCase>; */}

            </div>
        );
    }
}
export default SubTech1;