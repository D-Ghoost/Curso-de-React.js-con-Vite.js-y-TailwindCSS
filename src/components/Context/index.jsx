import { createContext, useState } from "react"; 
import PropTypes from 'prop-types';

export const AppContext = createContext();

// provider = provedor de datos
export const AppProvider = ({ children }) =>{

    const [count, setCount] = useState(0);

    return(
        <AppContext.Provider 
            value={{
                count,
                setCount
            }}
        >
            { children }
        </AppContext.Provider>
    );
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
};
