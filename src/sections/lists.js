import React, {Component} from 'react';
import cars from '../data/cars.json';

export default class MiLista extends Component {
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
