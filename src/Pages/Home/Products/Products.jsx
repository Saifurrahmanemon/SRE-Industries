import { Grid } from "@mantine/core";
import React from "react";
import { useQuery } from "react-query";
import SectionTitle from "../../Shared/SectionTitle";
import Product from "./Product";
// const products = {
//     image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     category: "technology",
//     title: "The best laptop for Frontend engineers in 2022",
//     date: "Feb 6th",
//     author: {
//         name: "Elsa Brown",
//         avatar: "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
//     },
// };
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
            <SectionTitle>Parts</SectionTitle>
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
