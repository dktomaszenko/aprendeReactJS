import React, {Component} from 'react';
import $ from "jquery";
import PropTypes from 'prop-types';


export default class Article extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    constructor(props){
        super(props);
        console.log('constructor');
    }

    componentWillMount(){
        console.log('componentWillMount');
        /*debugger*/
    }

    componentDidMount(){
        console.log('componentDidMount');
        // Integrating with jQuery
        this.$el = $(this.el);
    }

    render(){
        console.log('render');
        const {title, children} = this.props;
        return (
            <section>
                <h2>{title}</h2>
            </section>
        )
    }
}