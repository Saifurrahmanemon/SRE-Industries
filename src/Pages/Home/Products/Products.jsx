import { Grid } from "@mantine/core";
import React from "react";
import { useQuery } from "react-query";
import SectionTitle from "../../Shared/SectionTitle";
import Product from "./Product";

//TODO: load data properly
const Products = () => {
    const {
        data: products,
        isLoading,
        error,
    } = useQuery("products", () =>
        fetch("products.json").then((res) => res.json())
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;
    console.log(products);
    return (
        <div>
            <SectionTitle mb="sm">Parts</SectionTitle>
            <Grid>
                {" "}
                {products.map((products, index) => (
                    <Grid.Col md={6} lg={3} key={index}>
                        <Product products={products} key={index}></Product>
                    </Grid.Col>
                ))}
            </Grid>
        </div>
    );
};

export default Products;
