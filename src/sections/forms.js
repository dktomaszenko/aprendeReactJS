import React, {Component} from 'react';


export default class Forms extends Component {

    constructor(prop){
        super(prop);
    }

    handleClick (e) {
        e.preventDefault();  // para que el original html no haga click
        const name = document.getElementById('name').value;
        const email = document.getElementById('twitter').value;
        console.log({name, email});
    }

    render(){
        return (
            <div>
                <h4>Formularios</h4>
                <form>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
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
                    <button onClick={this.handleClick}>Enviar</button>
                </form>
            </div>
        )
    }

}