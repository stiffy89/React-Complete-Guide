//context helps us to share information as a "Global variable" so we dont need to
//pass it up and down the inheritance tree by using props when some objects clearly 
//don't care about it

import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;