import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { getProducts } from "../../helpers/getProducts";
import ProductDetail from "../../components/ProductDetail";

function Home() {

  const [items, setItems] = useState(null);

  useEffect( () => {
    getProducts().then( (data) => {
      setItems(data.products);
    });
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
      <div className='grid gap-4 grid-cols-3 w-full max-w-screen-lg'>
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
    </Layout>
  );
}

export default Home;