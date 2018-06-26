import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
    render() {
        return <h1 className="App-title">{this.props.title}</h1>
    }
}

class Text extends Component {
    render() {
        const {
            isActivated,
            arrayOfNumbers,
            objectWithInfo,
            multiply
        } = this.props;
        const textoSegunBool = isActivated ? 'On' : 'Off';
        const mappedNumber = arrayOfNumbers.map(multiply);
        return (
            <div>
                <p className="App-intro">{mappedNumber.join(', ')}</p>
                <p className="App-intro">{objectWithInfo.key}</p>
                <Contador />
            </div>
        )
    }
}

class Contador extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: this.props.contadorInicial
        };
        setInterval(()=>{
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000)
    }
/*    state = {contador: 0};*/
    render(){
        return <ContadorNumero numero={this.state.contador} />
    }
}

Contador.defaultProps = {
    contadorInicial: 0
};

class ContadorNumero extends Component {
    render (){
        return <span>{this.props.numero}</span>
    }
}

Hello.defaultProps = {
    title: 'Titulo por defecto'
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Hello title='Welcome to React props'/>
                </header>
                <Text
                    arrayOfNumbers={[2, 3, 10]}
                    objectWithInfo={{
                        key: 'First',
                        key2: 'otherValue'
                    }}
                    isActivated
                    multiply={(number) => number * 4}
                    number={2}
                />
            </div>
        );
    }
}

export default App;
