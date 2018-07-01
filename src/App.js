import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/conditional'
import cars from './data/cars.json';


class Hello extends Component {
    render() {
        return <h1 className="App-title">{this.props.title}</h1>
    }
}

class MiLista extends Component {
    render() {
        const numbers = [1, 1, 3, 4, 5];
        return (
            <div>
                <h4>Trabajando con listas</h4>
                {
                    cars.map(car => {
                        return (
                            <li key={car.id}>
                                <p><strong>Nombre: </strong>{car.name}</p>
                                <p><strong>Marca: </strong>{car.company}</p>
                            </li>
                        )
                    })
                }
            </div>
        )
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
                <Contador/>
                <ConditionalSection/>
                <MiLista/>
            </div>
        )
    }
}

class Contador extends Component {
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

class ContadorNumero extends Component {
    render() {
        return <span>{this.props.numero}</span>
    }
}

Hello.defaultProps = {
    title: 'Titulo por defecto'
};

class App extends Component {

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
            </div>
        );
    }
}

export default App;
