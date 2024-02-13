import React from 'react';
import PropTypes from 'prop-types';
import { PlusIcon } from '@heroicons/react/24/outline' 
import { AppContext } from '../Context';



const Card = ({ title, price, images, category, description }) =>{
    const { 
        count,
        setCount, 
        openProductDetail, 
        closeProductDetail,
        setProductToShow, 
        cardProducts, 
        setCardProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu } = React.useContext(AppContext);

    const img = images.filter( (image) => !image.includes('any'));
    if( img.length === 0){
        img.push("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg");
    }
    const showProduct = (productDetail) =>{
        openProductDetail();
        closeCheckoutSideMenu();
        setProductToShow(productDetail);
        

    }

    const addProductsToCard = (event, productData) =>{
        event.stopPropagation();
        setCount(count + 1)
        setCardProducts([...cardProducts, productData]);
        openCheckoutSideMenu();
        closeProductDetail();
    };

    return(
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={ () => showProduct({ title, price, img, category, description }) }
        >
            <figure className='relative mb-3 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{ category.name }</span>
                <img className='h-40 object-cover rounded-lg ' src={ img[0].replace(/[[\]""]/g,"") } alt={ title } />
                <button 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={ (event) => addProductsToCard(event, { title, price, img, category, description }) }
                >
                    <PlusIcon className='h-4 w-4 stroke-black'/>
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{ title }</span>
                <span className='text-lg font-semibold'>${ price }</span>
            </p>
        </div>
    );
}


Card.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    category: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired
};


export default Card;