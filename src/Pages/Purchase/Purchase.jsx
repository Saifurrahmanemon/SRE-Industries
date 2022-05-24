import { Container, Group, Image, Paper, SimpleGrid } from "@mantine/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../API/axiosPrivate";
import { API_URL } from "../../API/rootURL";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import ProductDetails from "./ProductDetails";
import UserDetails from "./UserDetails";
/*
 *display product details
 * user name and email and add extra field such as address phone number other info
 * input field for quantity min will min quantity and max will be available quantity
 * You will display an error and disable the purchase button in both cases.
 */

const BASE_HEIGHT = 360;

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { purchaseId } = useParams();

    const name = user?.displayName;
    const email = user?.email;

    const { data: product, isLoading } = useQuery("parts", () =>
        axiosPrivate.get(`${API_URL}parts/${purchaseId}`)
    );

    if (isLoading) {
        return <Loading />;
    }
    const {
        img,
        name: productName,
        minimumQuantity,
        availableQuantity,
    } = product.data;

    return (
        <Container my="md">
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
                <Group direction="column">
                    <ProductDetails product={product.data} />
                    <UserDetails
                        name={name}
                        email={email}
                        minimumQuantity={minimumQuantity}
                        availableQuantity={availableQuantity}
                        productId={purchaseId}
                    />
                </Group>
                <Paper height={BASE_HEIGHT}>
                    <Group>
                        <Image
                            src={img}
                            alt={productName}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "md",
                            }}
                        />
                    </Group>
                </Paper>
            </SimpleGrid>
        </Container>
    );
};

export default Purchase;
