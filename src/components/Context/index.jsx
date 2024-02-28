import { createContext, useState } from "react"; 
import PropTypes from 'prop-types';

export const AppContext = createContext();

// provider = provedor de datos
export const AppProvider = ({ children }) =>{

    const [count, setCount] = useState(0);
    // Products -> Open . Close
    const [ isProductDetailOpen, setIsProductDetailOpen ] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail
    const [productToShow, setProductToShow] = useState({});

    //Shopping card
    const [cardProducts, setCardProducts] = useState([]);

    // Shopping Card . order
    const [order, setOrder] = useState([]);

    // Checkout Side Menu -> Open . Close
    const [ isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen ] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    return(
        <AppContext.Provider 
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cardProducts,
                setCardProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder
            }}
        >
            { children }
        </AppContext.Provider>
    );
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
};
