import { NextPage } from 'next'
import products from '../../data/products.json';
const product = products[0]

const Productview: NextPage = () => {
  return(
    <div>
      <h1 key={product.sku}>{product.name}</h1>
    </div>
  );
}

export async function getStaticPaths() {

  return {
      paths: products.map(product => ({
          params: {sku: String(product.sku)}
      })),
      fallback: false
  };
}


export default Productview;