import React from 'react';
import styles from './fakeStoreCard.module.css'; // Import CSS module
// import {useGetAllFakeProductsQuery} from "../service/fakeStoreApi.jsx";

const FakeStoreCard = (props) => {

    console.log(props)

     const { data, isLoading, isError } = props;
     console.log(data);

     const product = data;
     console.log( "from fake store card product",product)

    if (isLoading) return <div>Loading products...</div>;
    if (isError) return <div>Error loading products.</div>;

    if (!data || data.length === 0) {
        return <div>No products found.</div>;
    }

    return (
        <div>
            {
                data?.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <img src={product.image} alt={product.title} className={styles.productImage} />
                        <div className={styles.cardBody}>
                            <p className={styles.price}>Price: ${product.price}</p>
                            <p className={styles.title}>{product.title}</p>
                            <button className={styles.addToCart}>Add to cart</button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default FakeStoreCard;
