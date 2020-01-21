import React from 'react';

const ValidationComponent = (props) => {

    let textMessage = "not long enough";

    if (props.textLength > 5)
    {
        textMessage = "long enough";
    }

    return (
        <p>
            {textMessage}
        </p>
    )
    
}

export default ValidationComponent;