import React, { createContext, useState } from 'react';

export const ContextProvider = createContext();

function Contextapi({ children }) {
    let [cartItem, setCartItem] = useState([]);

    return (
        <ContextProvider.Provider value={{ cartItem, setCartItem }}>
            {children}
        </ContextProvider.Provider>
    );
}

export default Contextapi;
