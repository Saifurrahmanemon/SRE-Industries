import { Container, SimpleGrid, useMantineTheme } from "@mantine/core";
import React from "react";
import { Certificate, Coin, MoodHappy } from "tabler-icons-react";
import SectionTitle from "../../Shared/SectionTitle";
import Feature from "./Feature";

const mockdata = [
    {
        icon: MoodHappy,
        title: "Satisfied Customers",
        description:
            "We served 100+ customers and received 99% positive feedback",
    },
    {
        icon: Certificate,
        title: "Best Quality Product",
        description:
            "80+ positive reviews from customers insuring quality of our products",
    },
    {
        icon: Coin,
        title: "Increasing Revenue",
        description: "12M+ Total Revenue Increased Compared to previous month",
    },
];

export default function BusinessSummary() {
    const theme = useMantineTheme();
    const items = mockdata.map((item) => (
        <Feature {...item} key={item.title} />
    ));

    return (
        <Container mt={30} mb={30} size="lg">
            <SectionTitle my="md" mb="xl">
                Customers love us
            </SectionTitle>
            <SimpleGrid
                my={theme.spacing.xl * 2}
                cols={3}
                breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                spacing={50}
            >
                {items}
            </SimpleGrid>
        </Container>
    );
}
