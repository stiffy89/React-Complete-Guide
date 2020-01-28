import React, {Component} from 'react';
import './Person.css';
import styled from 'styled-components';

class Person extends Component {

    render () {
        const StyledDiv = styled.div`
        width: 60%;
        margin: 16px;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;

        @media (min-width:500px) {
            width: 450px;
        }
    `;

    return (
        <StyledDiv>
            <div onClick = {this.props.click}>
                <p> Hi my name is {this.props.name} and i am currently {this.props.age} years old!</p>
                <input type="text" onChange={this.props.changed}></input>
            </div>
        </StyledDiv>
    );
    }

    
}

export default Person;