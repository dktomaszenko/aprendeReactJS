import React, {Component} from 'react';


export default class Forms extends Component {

    render(){
        return (
            <div>
                <h4>Formularios</h4>
                <form>
                    <p>
                        <label>Nombre: </label>
                        <input
                        id='name'
                        name='userName'
                        placeholder='Introduce el nombre'
                        />
                    </p>
                    <p>
                        <label>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            placeholder='Introduce tu Twitter'
                        />
                    </p>
                </form>
            </div>
        )
    }

}