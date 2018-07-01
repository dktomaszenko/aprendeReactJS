import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Article extends Component {

    static propTypes = {
        title: PropTypes.string
    };

    constructor(props){
        super(props);
    }

    render(){
        const {title, children} = this.props;
        return (
            <section>
                <h2>{title}</h2>
            </section>
        )
    }
}