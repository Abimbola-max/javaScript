import React, {useEffect} from 'react';
import {useGetAllDummyProductsQuery} from "../../service/dummyProductApi.jsx";
import DummyProductsCard from "../../reuseable/dummyProductsCard.jsx";

const GetAllDummyProducts = () => {

    const {data, isError, isLoading} = useGetAllDummyProductsQuery();
    console.log("get all dummy data",data)

    if (isLoading) return <div>Loading products...</div>;
    if (isError) return <div>Error loading products.</div>;
    console.log(data)

    return (
        <div>

            <DummyProductsCard data={data}/>
        </div>
    );
};

export default GetAllDummyProducts;
