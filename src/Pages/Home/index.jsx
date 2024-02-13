import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { getProducts } from "../../helpers/getProducts";
import ProductDetail from "../../components/ProductDetail";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";

function Home() {

  const [items, setItems] = useState(null);

  useEffect( () => {
    getProducts().then( (data) => {
      setItems(data);
    });
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
      <div className='grid gap-4 grid-cols-3 w-full max-w-screen-lg items-center justify-items-center'>
        {
          items?.map( (item) => (
            <Card 
              key={ item.id }
              { ...item }
            /> 
          ))
        }
      </div>
      <ProductDetail />
      <CheckoutSideMenu />
    </Layout>
  );
}

export default Home;