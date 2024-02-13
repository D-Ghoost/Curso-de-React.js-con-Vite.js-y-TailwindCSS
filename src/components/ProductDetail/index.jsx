import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline'
import { AppContext } from '../Context';

const ProductDetail = () => {
    const { isProductDetailOpen, closeProductDetail, productToShow } = React.useContext(AppContext);

    // console.log(productToShow.img);

    return(
        <aside className={ ` ${ isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-haside flex-col fixed right-0 top-[68px] border bg-white border-black rounded-lg >` }>
            <div className='flex justify-between items-center p-4 border-b'>
                <h2 className='text-lg font-semibold'>Product Detail</h2>
                <button 
                    className='text-2xl'
                    onClick={ () => closeProductDetail() }
                >
                    <XCircleIcon className="h-6 w-6 stroke-black"/>
                </button>
                
            </div>
            <figure className='px-6'>
                <img 
                    className='w-full h-full rounded-lg' 
                    src={ productToShow.img?.[0] } 
                    alt={ productToShow.title }
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${ productToShow.price }</span>
                <span className='font-medium text-xl mb-1'>{ productToShow.title }</span>
                <span className='font-light text-md '>{ productToShow.description }</span>
            </p>
        </aside>
    );
}

export default ProductDetail;