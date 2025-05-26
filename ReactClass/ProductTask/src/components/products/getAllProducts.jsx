import React, {useEffect} from 'react';
import { useGetAllFakeProductsQuery } from "../../service/fakeStoreApi.jsx";
import FakeStoreCard from "../../reuseable/fakeStoreCard.jsx";

const GetAllFakeProducts = () => {

    const {data, isError, isLoading} = useGetAllFakeProductsQuery();


    if (isLoading) return <div>Loading products...</div>;
    if (isError) return <div>Error loading products.</div>;
    console.log(data)

    return (
        <div>

            <FakeStoreCard data={data}/>
        </div>
    );
};

export default GetAllFakeProducts;
