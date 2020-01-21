import React from 'react';

const Athlete = (props) => {
    return (
        <div className = "Athlete">
            <p onClick = {props.click}>
                Hi my name is {props.athleteName} and my specialised sport is {props.sport}.
            </p>
        </div>
    )
}

export default Athlete;