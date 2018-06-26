import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
    render() {
        return <h1 className="App-title">{this.props.title}</h1>
    }
}

class Text extends Component {
render (){
    const { isActivated , arrayOfNumbers, objectWithInfo, multiply} = this.props;
    const textoSegunBool = isActivated ? 'On': 'Off';
    const mappedNumber = arrayOfNumbers.map(multiply);
    return (
        <div>
            <p className="App-intro">{mappedNumber.join(', ')}</p>
            <p className="App-intro">{objectWithInfo.key}</p>
        </div>
    )
}
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Hello title='Welcome to React props' />
                </header>
                <Text
                    arrayOfNumbers={[2,3,10]}
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
