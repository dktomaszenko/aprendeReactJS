import React, {Component} from 'react';


export default class Forms extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            inputName: '',
            inputTwitter: '',
            inputTerms: true
        }
    }

    handleClick = (e) => {
        e.preventDefault();  // para que el original html no haga click
        const name = this.inputName.value;
        const email = document.getElementById('twitter').value;
        console.log({name, email});
    };

    handleSubmit = (e) => {
        e.preventDefault();  // para que el original html no haga click
        const name = this.inputName.value;
        const email = document.getElementById('twitter').value;
        console.log({name, email});
    };

    handleChange = (e) => {
        console.log(e.target.checked);
        this.setState({
            inputTerms: e.target.checked
        })
    };

    render() {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre: </label>
                        <input
                            id='name'
                            name='userName'
                            placeholder='Introduce el nombre'
                            ref={inputElement => this.inputName = inputElement}
                            value={this.state.inputName}
                            onChange={e => this.setState({
                                inputName: e.target.value
                            })}
                        />
                    </p>
                    <p>
                        <label>Twitter: </label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            placeholder='Introduce tu Twitter'
                            value={this.state.inputTwitter}
                            onChange={event => this.setState({
                                inputTwitter: event.target.value
                            })}
                        />
                    </p>
                    <p>
                        <label>
                            <input
                                type='checkbox'
                                onChange={this.handleChange}
                                checked={this.state.inputTerms}
                            />
                            Accepted terms
                        </label>
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }

}