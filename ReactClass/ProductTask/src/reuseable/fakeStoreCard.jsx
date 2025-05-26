import React from 'react';
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
                    <div key={product.id}>
                        <img src={product.image} alt={product.title} width={150} />
                        <p>{product.price}</p>
                        <p>{product.title}</p>
                    </div>
                ))}
        </div>
    );
};

export default FakeStoreCard;
