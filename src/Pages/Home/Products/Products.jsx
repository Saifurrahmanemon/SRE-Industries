import { Box, Grid, useMantineTheme } from "@mantine/core";
import React from "react";
import useParts from "../../../Hooks/useParts";
import Loading from "../../Shared/Loading";
import SectionTitle from "../../Shared/SectionTitle";
import Product from "./Product";

//TODO: load data properly
const Products = () => {
    const theme = useMantineTheme();
    const { products, isLoading, error } = useParts();

    if (isLoading) return <Loading />;

    if (error) return "An error has occurred: " + error.message;

    return (
        <Box mb={theme.spacing.xl * 2}>
            <SectionTitle mb="xl">Parts</SectionTitle>
            <Grid>
                {" "}
                {products.map((products, index) => (
                    <Grid.Col md={6} lg={3} key={index}>
                        <Product products={products} key={index}></Product>
                    </Grid.Col>
                ))}
            </Grid>
        </Box>
    );
};

export default Products;
