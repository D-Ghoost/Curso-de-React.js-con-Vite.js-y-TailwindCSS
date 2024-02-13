const ProductDetail = () => {
    return(
        <aside className='w-[360px] h-haside flex flex-col fixed right-0 top-[68px] border bg-white border-black rounded-lg >'>
            <div className='flex justify-between items-center p-4 border-b'>
                <h2 className='text-lg font-semibold'>Product Detail</h2>
                <button className='text-2xl'>&times;</button>
            </div>
        </aside>
    );
}

export default ProductDetail;