import React, {useEffect, useRef, useContext} from 'react';
import AuthContext from '../../context/auth-context.js';

const cockpit = (props) => {

    // in functional components, we use the useRef thru hooks
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    //the if the functional component equivalent of componentDidMount()
    //this will get called AFTER every render()
    useEffect(() => {
        console.log('cockpit use effect');
        toggleButtonRef.current.click();
    }, []);

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>

            <button ref={toggleButtonRef} className="button" onClick = {props.togglePersonsHandler}>
                Click Me!
            </button>
        </div>
    );

};

export default React.memo(cockpit);