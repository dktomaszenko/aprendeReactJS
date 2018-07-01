
import React, {Component} from 'react';

import MiLista from './../sections/lists';
import ConditionalSection from './../sections/conditional';
import Contador from './contador';


export default class Text extends Component {
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