import React, {Component} from 'react';

export default class Hello extends Component {
    render() {
        return <h1 className="App-title">{this.props.title}</h1>
    }
}

Hello.defaultProps = {
    title: 'Titulo por defecto'
};