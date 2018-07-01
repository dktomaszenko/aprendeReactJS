import React, {Component} from 'react';

export default class Eventos extends Component {

    constructor() {
        super();
        this.state = {
            mouseX: 0,
            mouseY: 0
        }
    }

    handleClick(e) {
        console.log(e);
        console.log(e.nativeEvent);
        alert('Hola Mundo');
    }

    handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        this.setState({
            mouseX: clientX,
            mouseY: clientY
        });
        console.log(this.state.mouseX + ',' + this.state.mouseY)
    };

    render(){
        return (
            <React.Fragment>
                <hr/>
                <h4>Eventos</h4>
                <div onMouseMove={this.handleMouseMove}
                     style={{
                         border: '1px solid #000',
                         marginTop: 10,
                         padding: 10
                     }}
                >
                    <button onClick={this.handleClick}>Hi there !</button>
                </div>
            </React.Fragment>
        )
    }
}