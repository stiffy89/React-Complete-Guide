import React, {useEffect} from 'react';

const cockpit = (props) => {

    useEffect( () => {

        console.log('cockpit use effect');

        setTimeout(() => {
            alert('saved data to cloud!!');
        }, 1000);
    }, [props.person]);

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>

            <button className="button" onClick = {props.togglePersonsHandler}>
                Click Me!
            </button>
        </div>
    );

};

export default React.memo(cockpit);