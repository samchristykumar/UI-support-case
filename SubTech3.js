import React, { Component } from 'react';

class SubTech3 extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString()
        }
        this.btnSubTech3 = this.btnSubTech3.bind(this);
    }
    btnSubTech3(evt){
        var buttons = document.getElementsByClassName("btnTech3");
        for (var i = 0; i < buttons.length; i++) {
             console.log(evt.target.value)
            buttons[i].style["background-color"] = "grey";
            buttons[i].style["color"] = "white";
            if (buttons[i] == evt.target) {
                evt.target.style["backgroundColor"] = "skyblue";
            }
        }
    }
    render() {
        return (
            <div>
                <button type="button" onClick={(e) => this.btnSubTech3(e)} style={{ backgroundColor: "grey", color: "white" }}  className="btnTech3 btn_narrow" > Cisco Cate Switches 3</button>
                <button type="button" onClick={(e) => this.btnSubTech3(e)} style={{ backgroundColor: "grey", color: "white" }}  className="btnTech3 btn_narrow"> Cisco Cate Switches 3</button>
                <button type="button" onClick={(e) => this.btnSubTech3(e)} style={{ backgroundColor: "grey", color: "white" }}  className="btnTech3 btn_narrow">Cisco Cate Switches 3</button>
            </div>
        );
    }
}
export default SubTech3;