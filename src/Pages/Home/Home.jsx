import { Container } from "@mantine/core";
import React from "react";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";

const Home = () => {
    return (
        <Container>
            <Banner />
            <Products />
        </Container>
    );
};

export default Home;
