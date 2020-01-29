import React, {Component} from 'react';
import classes from './Person.css';

import Auxiliary from '../../../hoc/Auxiliary.js';
import WithProps from "../../../hoc/WithProps.js";

import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context.js';


class Person extends Component {

    /* another way to create reference in functional components
    constructor() {
        super(props);
        this.inputElementRef = React.createRef();
    }
    */

    static contextType = AuthContext;


    componentDidMount() {

        this.inputElement.focus();
        console.log(this.context.authenticated);

        //this.inputElementRef.current.focus();

    }

    render () {
        /*const StyledDiv = styled.div`
        width: 60%;
        margin: 16px;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width:500px) {
            width: 450px;
        }
    `;*/

    //adjacent elements uses an array to render elements without wrapping tags
    /*return [
            <p key="i1" onClick = {this.props.click}> 
                Hi my name is {this.props.name} and i am currently {this.props.age} years old!
            </p>,
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}/>
    ];*/

    //another potential way of doing this would be to use the auxiliary as a "shell component" which will wrap all your elements
    
    return (
        <Auxiliary>
            {this.context.authenticated ? <p> Authenticated! </p> : <p> PLease log in</p>}
            <p key="i1" 
               onClick = {this.props.click}> Hi my name is {this.props.name} and i am currently {this.props.age} years old!
            </p>
            <input key="i3" 
                   type="text" 
                   //referece method number 1
                   //we then store inputElement as a global variable which is accessible anywhere
                   //after this our component did mount will have access to the var 
                   ref={(inputEl) => {this.inputElement = inputEl}}

                   //functional component method
                   //ref={this.inputElementRef}
                   onChange={this.props.changed} 
                   value={this.props.name}/>
        </Auxiliary>
    );
    

    /*
        we can also use fragments 
        <Fragment>
            To wrap our content since react V16.2
        <Fragment/>

    */

    /*
       
    */
    }
}


//here we declare the prop types in the key value pairs
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default WithProps(Person, classes.Person);