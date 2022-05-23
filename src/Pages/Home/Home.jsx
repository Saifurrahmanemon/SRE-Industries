import { Container } from "@mantine/core";
import React from "react";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Products from "./Products/Products";

const Home = () => {
    return (
        <Container>
            <Banner />
            <Products />
            <BusinessSummary />
        </Container>
    );
};

export default Home;
