import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <div className = "Style" onClick = {props.clicked}>
            {props.selectedLetter}
        </div>
    )
}

export default CharComponent;