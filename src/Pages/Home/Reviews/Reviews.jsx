import { Box, ScrollArea } from "@mantine/core";
import React from "react";
import SectionTitle from "../../Shared/SectionTitle";
import Review from "./Review";
const reviews = [
    {
        postedAt: "10 minutes ago",
        body: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        name: "Jacob Warnhalter",
        image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    },
    {
        postedAt: "10 minutes ago",
        body: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        name: "Jacob Warnhalter",
        image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    },
    {
        postedAt: "10 minutes ago",
        body: "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has water spouts that protrude from its shell. The water spouts are very accurate.",
        name: "Jacob Warnhalter",
        image: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    },
];
const Reviews = () => {
    return (
        <>
            <SectionTitle>Reviews</SectionTitle>
            <ScrollArea>
                <Box
                    style={{
                        display: "flex",
                    }}
                    my="md"
                >
                    {reviews.map((review, index) => (
                        <Review review={review} key={index}></Review>
                    ))}
                </Box>
            </ScrollArea>
        </>
    );
};

export default Reviews;
