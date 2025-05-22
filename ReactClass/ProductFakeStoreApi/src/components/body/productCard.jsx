// import React from 'react';
// import { Link } from 'react-router';
//
// const ProductCard = ({ id, title, price, image }) => {
//   return (
//     <div className="product">
//       <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//         <img src={image} alt={title} />
//         <div>
//           <p>{title}</p>
//           <p>price: &#8358; {price}</p>
//         </div>
//       </Link>
//     </div>
//   );
// };
//
// export default ProductCard;



import React from 'react'
import { UNSAFE_hydrationRouteProperties } from 'react-router'

const ImageBasedUrl = "https://dummyjson.com/products";


const ProductCard = (props) => {
    const {data,isLoading} = props.data
    console.log(data)
    console.log(isLoading)
    if(isLoading){
        return(
            <div>loading...</div>
        )
    }

    return(
        <div>
            {
                data?.products.map((result)=>(
                    <div key={result.id}>
                        <img src={`${result.images}`} alt ="" />
                        <p>{result.overview}</p>
                        <p>{result.title}</p>
                        <p>{result.price}</p>
                        <p>{result.description}</p>

                    </div>
                ))
            }
        </div>
    )
}
export default ProductCard;