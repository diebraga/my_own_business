import { NextPage } from 'next'
import products from '../../data/products.json';
const product = products[0]

const Productview: NextPage = () => {
  return(
    <div>
      <h1 key={product.slug}>{product.name}</h1>
    </div>
  );
}

export default Productview;