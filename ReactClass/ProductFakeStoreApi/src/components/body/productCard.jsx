import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ id, title, price, image }) => {
  return (
    <div className="product">
      <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={image} alt={title} />
        <div>
          <p>{title}</p>
          <p>price: &#8358; {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;