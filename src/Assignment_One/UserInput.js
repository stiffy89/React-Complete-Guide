import React from 'react';

const UserInputComponent = (props) => {
    return (
        <input value={props.initialValue} onChange={props.inputTyped}>

        </input>
    )
}

export default UserInputComponent;
