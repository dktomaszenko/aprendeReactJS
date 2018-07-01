
import React, {Component} from 'react';
import ContadorNumero from './contadorNumero';

export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: this.props.contadorInicial
        };
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000)
    }

    /*    state = {contador: 0};*/
    render() {
        return <ContadorNumero numero={this.state.contador}/>
    }
}

Contador.defaultProps = {
    contadorInicial: 0
};