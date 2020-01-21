import React from 'react';
import './Person.css';
import styled from 'styled-components';

const person = (props) => {

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
            <div onClick = {props.click}>
                <p> Hi my name is {props.name} and i am currently {props.age} years old!</p>
                <input type="text" onChange={props.changed}></input>
            </div>
        </StyledDiv>
    )
}

export default person;