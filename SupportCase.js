import React, { Component } from 'react';
import Header from './Header';
import SubTech1 from './SubTech1';
import SubTech2 from './SubTech2';
import SubTech3 from './SubTech3';
import FinalSubmit from './FinalSubmit';
import Submit from './Submit';



import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel, AccordionItemButton, AccordionSection
} from 'react-accessible-accordion';
//import './App.css'
class SupportCase extends Component {
    		constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString(),
            bgColor: "",
            counter: 0,
            col: "white",
            textAreaContent: "",
            display1: false,
            display2: false,
            display3: false,
            textAreaName: "",
            textAreaName1: "",
            technologyButton: "",
            severityVal: "",
            objPass: "",
            // submitBtn: backgroundColor = "skyblue"

            // subTech: this.state.subTechButton
            // steRandomStr: 1
            submitted: false
        }
        this.strhandleEvent = this.strhandleEvent.bind(this);
        this.btnhandleEvent = this.btnhandleEvent.bind(this);
        this.SubTechClick = this.SubTechClick.bind(this);
        this.doSubmit = this.doSubmit.bind(this);
        this.textDesc = this.textDesc.bind(this);
        // this.doLoad = this.doLoad.bind(this);
        // this.componentDidMount = this.componentDidMount(this);
    }
    strhandleEvent(evt) {
        if (evt.target.style["color"] != "yellow") {
            evt.target.style["color"] = "yellow";
            this.setState({
                counter: this.state.counter + 1
            });
        } else {
            this.setState({
                counter: this.state.counter - 1
            });
            evt.target.style["color"] = "black";
        }
    }
    btnhandleEvent(evt) {
        let temp = ""
        var buttons = document.getElementsByClassName("btnMain");
        // alert("hii"+ evt.target.value)
        // console.log(document.getElementsByClassName("btnMain").onClick)
        // if (evt.target.id != "valTextArea") {
        for (var i = 0; i < buttons.length; i++) {

            buttons[i].style["background-color"] = "white"
            if (buttons[i] == evt.target) {
                evt.target.style["backgroundColor"] = "skyblue";
                this.setState({
                    textAreaContent: document.getElementById(evt.target.id).textContent
                })
                // temp = document.getElementById(evt.target.id).textContent;
                // alert(temp)
            }
        }
        // }
        // else if (evt.target.id == "valTextArea") {
        //     temp = document.getElementById(evt.target.id).textContent;
        //     // alert(temp)
        // }
        // return temp;
    }
    SubTechClick(evt) {
        var buttons = document.getElementsByClassName("btnTech");
        for (var i = 0; i < buttons.length; i++) {
            if (evt.target.value != "") {
                buttons[i].style["background-color"] = "g	rey";
                buttons[i].style["color"] = "white"
                if (buttons[i] == evt.target) {
                    evt.target.style["backgroundColor"] = "skyblue";


                    if (evt.target.value == "1") {
                        const show1 = true;
                        this.setState({
                            display1: show1,
                            display2: !show1,
                            display3: !show1,
                            technologyButton: document.getElementById(evt.target.id).textContent

                        })
                    }
                    if (evt.target.value == "2") {
                        const show2 = true;
                        this.setState({
                            display1: !show2,
                            display2: show2,
                            display3: !show2,
                            technologyButton: document.getElementById(evt.target.id).textContent
                        })
                    }
                    if (evt.target.value == "3") {
                        const show3 = true;
                        this.setState({
                            display1: !show3,
                            display2: !show3,
                            display3: show3,
                            technologyButton: document.getElementById(evt.target.id).textContent
                        })
                    }

                }
            }
        }
    }
    severityColor(evt) {
        var buttons = document.getElementsByClassName("btn-circle");
        for (var i = 0; i < buttons.length; i++) {
            if (evt.target.value != "") {
                buttons[i].style["background-color"] = "white"
                if (buttons[i] == evt.target) {
                    evt.target.style["backgroundColor"] = "skyblue";
                    this.setState({
                        severityVal: evt.target.value
                    })
                }
            }
        }

    }

    textDesc(evt) {
        var evtVal = evt.target.value;
        var evtLen = evtVal.length;
        
        if (evtLen == "1") {
            this.setState({
                textAreaName: (this.state.textAreaContent) + evt.target.value
            })
        }
        else {
            this.setState({
                textAreaName: evt.target.value
            })
        }
        
    }

    doSubmit(evt) {
        // this.props.history.push(`/Login/${this.state.textAreaContent}`);
        console.log(this.state.technologyButton)
        if (this.state.textAreaContent == "") {
            alert("Choose the main Product")
            return false;
        }
        if (this.state.textAreaName == "") {
            alert("Enter Description")
            return false;
        }
        if (this.state.technologyButton == "") {
            alert("Choose the main Technology")
            return false;
        }
        if (this.state.severityVal == "") {
            alert("Choose the Severity level")
            return false;
        }
        let objVal = {
            letMainCategory: this.state.textAreaContent,
            letTech: this.state.technologyButton,
            letRandom: Math.floor(Math.random() * 1000000 + 1000) + "ABC",
            letDescription: this.state.textAreaName,
            letSeverity: this.state.severityVal,
        }
        this.setState({
            objPass: objVal
        })

        console.log(this.state.objPass)
        // let letMainCategory = this.state.textAreaContent;
        // let letTech = this.state.technologyButton;
        // let letRandom = Math.floor(Math.random() * 1000000 + 1000);
        // let letRandomStr = letRandom + "ABC";
        // let letDescription = this.state.textAreaName;
        // let letSeverity = this.state.severityVal;
        this.setState({ submitted: true })
        // alert(letSeverity)
        // this.setState({
        //     steRandomStr: Math.floor(Math.random() * 10000000 + 1000)
        // })

        // alert(this.state.textAreaContent)
        // this.props.history.push(`/Submit/${letRandomStr}`);
        // <Submit />
        // this.props.history.push(`/Submit1/${letMainCategory}`);

        // ${letMainCategory} ${letTech} ${letDescription}


    }

    // componentDidMount(){
    //     // alert()
    // }


    render() {
        var beforesubmit = <div className="container-fluid">
            <form onLoad={this.componentDidMount}>
                <div className="row">
                    <div className="col-md-10">
                        <Header />

                    </div>
                    <div className="col-md-2">
                        <h3>Welcome :{this.props.match.params.username}</h3>
                        {/* <h1>{this.props.subTechButton1}</h1> */}
                    </div>
                </div>
                <hr>
                </hr>
                <div>
                    <p align="right">Favourite({this.state.counter}) </p>
                </div>
                <div className="w5-show-inline-block btnStyle">
                    <div className="col-md-12">
                        <button type="button" id={1} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 1&nbsp;<i className="far fa-star" onClick={(e) => this.strhandleEvent(e)}></i></button>
                        <button type="button" id={2} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 2&nbsp;<i className="far fa-star" onClick={(e) => this.strhandleEvent(e)}></i></button>
                        <button type="button" id={3} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 3&nbsp;<i className="far fa-star" onClick={(e) => this.strhandleEvent(e)}></i></button>
                        <button type="button" id={4} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 4&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" id={5} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 5&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                    </div>
                    <div className="col-md-12">
                        <button type="button" id={6} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 6&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" id={7} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 7&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" id={8} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 8&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" id={9} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 9&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                        <button type="button" id={10} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 10&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                    </div>
                </div>
                <Accordion allowZeroExpanded="true">
                    <AccordionItem>
                        <AccordionItemButton>
                            <div className="fas fa-angle-down rotate-Avail icon fa-1x float" onClick={this.clickEvent}></div>
                            <label className="float">Show more</label>
                        </AccordionItemButton>
                        <AccordionItemPanel>
                            <div className="w5-show-inline-block btnStyle">
                                <div className="col-md-12">
                                    <button type="button" id={1} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 1&nbsp;<i className="far fa-star" onClick={(e) => this.strhandleEvent(e)}></i></button>
                                    <button type="button" id={2} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 2&nbsp;<i className="far fa-star" onClick={(e) => this.strhandleEvent(e)}></i></button>
                                    <button type="button" id={3} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 3&nbsp;<i className="far fa-star" onClick={(e) => this.strhandleEvent(e)}></i></button>
                                    <button type="button" id={4} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 4&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                    <button type="button" id={5} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 5&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                </div>
                                <div className="col-md-12">
                                    <button type="button" id={6} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 6&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                    <button type="button" id={7} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 7&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                    <button type="button" id={8} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 8&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                    <button type="button" id={9} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 9&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                    <button type="button" id={10} onClick={(e) => this.btnhandleEvent(e)} className="btnMain">Cisco Cat2k Switches 10&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                {/* <div className="w5-show-inline-block">
<div  className="col-md-12">
<Accordion allowZeroExpanded="true">
 <AccordionItem>
    <AccordionItemButton>
       <div className="fas fa-angle-down rotate-Avail icon fa-1x float" onClick={this.clickEvent}></div>
       <label className="float">Show more</label>valTextArea
    </AccordionItemButton>
    <AccordionItemPanel>
       <div className="w5-show-inline-block btnStyle">
          <div className="col-md-12">
             <button type="button" id={11} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 11&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
             <button type="button" id={12} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 12&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
             <button type="button" id={13} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 13&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
             <button type="button" id={14} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 14&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
             <button type="button" id={15} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 15&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
          </div>
          <div className="col-md-12">
             <button type="button" id={16} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 16&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
             <button type="button" id={17} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 17&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
             <button type="button" id={18} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 18&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
             <button type="button" id={19} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 19&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
             <button type="button" id={20} onClick={(e) => this.btnhandleEvent(e)} className="btn">Cisco Cat2k Switches 20&nbsp;<i className="far fa-star" style={{ color: this.state.bgColor }} onClick={this.strhandleEvent}></i></button>
          </div>
       </div>
    </AccordionItemPanel>
 </AccordionItem>
</Accordion>
</div>
</div> */}
                <div className="col-sm-12 clsTxtArea">
                    <label>Description</label>
                    <textarea rows="5" cols="120" onChange={this.textDesc} id={"valTextArea"} value={this.state.textAreaName} placeholder="Enter problem descripton here"></textarea>
                </div>
                <br />

                <div className="divTech">

                    <div className="btnStyle">
                        <label>Technology</label>
                        <div className="col-md-6">
                            <button type="button" id={1} style={{ backgroundColor: "grey", color: "white" }} className="btnTech btn_narrow" value={1} onClick={(e) => this.SubTechClick(e)}>Cisco Cat2k Switches 1</button>
                            <button type="button" id={2} style={{ backgroundColor: "grey", color: "white" }} className="btnTech btn_narrow" value={2} onClick={(e) => this.SubTechClick(e)}>Cisco Cat2k Switches 2</button>
                            <button type="button" id={3} style={{ backgroundColor: "grey", color: "white" }} className="btnTech btn_narrow" value={3} onClick={(e) => this.SubTechClick(e)}>Cisco Cat2k Switches 3</button>

                        </div>
                        <div className="col-md-6">
                            {this.state.display1 ?
                                <SubTech1></SubTech1>
                                : null}
                            {this.state.display2 ?
                                <SubTech2></SubTech2>
                                : null}
                            {this.state.display3 ?
                                <SubTech3></SubTech3>
                                : null}
                        </div>
                    </div>
                </div>
                <br />
                <br /><br />
                <div className="clsSeverity">
                    <label>Severity</label><br />
                    <button type="button" onClick={(e) => this.severityColor(e)} value={1} className="btn btn-default btn-circle clsSeverity"> 1 </button>
                    <button type="button" onClick={(e) => this.severityColor(e)} value={2} className="btn btn-default btn-circle clsSeverity"> 2 </button>
                    <button type="button" onClick={(e) => this.severityColor(e)} value={3} className="btn btn-default btn-circle clsSeverity"> 3 </button>
                    <button type="button" onClick={(e) => this.severityColor(e)} value={4} className="btn btn-default btn-circle clsSeverity"> 4 </button>
                </div>
                <div>
                    <br />
                    <button type="button" style={{ backgroundColor: "skyblue", color: "white" }} className="clsSubmit" onClick={(e) => this.doSubmit(e)}> Submit Case </button>
                    {/* <Submit /> */}
                </div>
            </form>
        </div>


        var aftersubmit = <Submit product1={this.state.objPass} />
        var output = (!this.state.submitted) ? beforesubmit : aftersubmit;
        return output;


    }
}
export default SupportCase;
