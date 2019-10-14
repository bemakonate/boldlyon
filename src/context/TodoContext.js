import React from 'react';

const todoContext = React.createContext({
    delete: null,
    complete: null,
    editFunc: null,
    editState: null,
});

export default todoContext;