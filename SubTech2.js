import React, { Component } from 'react';

class SubTech2 extends React.Component {

    
        constructor(props) {
            super(props);
            this.state = {
                date: new Date().toLocaleString()
            }
            this.btnSubTech2 = this.btnSubTech2.bind(this);
        }
        btnSubTech2(evt){
            var buttons = document.getElementsByClassName("btnTech2");
            for (var i = 0; i < buttons.length; i++) {
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
                
                <button type="button" onClick={(e) => this.btnSubTech2(e)} style={{ backgroundColor: "grey", color: "white" }}  className="btnTech2 btn_narrow">Cisco Cate Switches 2<i className=""></i></button>
                <button type="button" onClick={(e) => this.btnSubTech2(e)} style={{ backgroundColor: "grey", color: "white" }} className="btnTech2 btn_narrow">Cisco Cate Switches 2<i className=""></i></button>
                <button type="button" onClick={(e) => this.btnSubTech2(e)} style={{ backgroundColor: "grey", color: "white" }}  className="btnTech2 btn_narrow">Cisco Cate Switches 2<i className=""></i></button>
            </div>


        );
    };
}

export default SubTech2;