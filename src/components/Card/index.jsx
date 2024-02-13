import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../Context';



const Card = ({ title, price, images, category }) =>{
    const { count, setCount } = React.useContext(AppContext);
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-3 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{ category }</span>
                <img className='object-cover w-full h-40 rounded-lg' src={ images[0] } alt={ title } />
                <button 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={ () => setCount(count + 1)}
                >
                    +
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
    category: PropTypes.string.isRequired
};


export default Card;