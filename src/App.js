import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Eventos from "./sections/events";
import Forms from './sections/forms';
import Hello from './sections/hello';
import Text from './sections/text';
import Article from './sections/article';


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
                <Eventos/>
                <hr/>
                <h4>Forms</h4>
                <Forms/>
                <hr/>
                <h4>Props</h4>
                <Article
                title='No lo se'
                />
            </div>
        );
    }
}

export default App;
