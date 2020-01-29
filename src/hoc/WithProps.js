import React from 'react';

//this effectively wraps our component and gives it an extra layer of functionality

const withProps = (WrappedComponent, className) => {

    console.log("hello");
    
    return props => (
        <div>
            <WrappedComponent className={className}
                {...props}
            />
        </div>
    );
};

export default withProps;