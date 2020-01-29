import React from 'react';


//the whole purpose of this is that it will wrap the contents and then return it
const withClass = (props) => {
    return (
        <div className ={props.classes}>
                {props.children}
        </div>
    );
}

export default withClass;