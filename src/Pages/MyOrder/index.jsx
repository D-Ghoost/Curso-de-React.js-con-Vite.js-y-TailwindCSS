import React from "react";
import { AppContext } from "../../components/Context";
import Layout from "../../components/Layout";
import OrderCard from "../../components/OrderCard";


function MyOrder() {
    const { order } = React.useContext(AppContext);
    // const handleDelete = () =>{
    //     // console.log('delete');
    // }

    console.log(` order = ${ order.slice(-1,0) } `);

    return(
        <Layout>
            <h1>
                My Order :D
            </h1>
            {/* <div className='px-3 mt-4 overflow-y-scroll flex-1'>
            {
                order?.map( ( product ) => (
                    <OrderCard 
                        key={ product.id }
                        title={ product.title }
                        image={ product.img }
                        price={ product.price }
                        id={ product.id }
                        handleDelete={ handleDelete }
                    />
                ))
            }
            </div> */}
        </Layout>
    );   
}

export default MyOrder;