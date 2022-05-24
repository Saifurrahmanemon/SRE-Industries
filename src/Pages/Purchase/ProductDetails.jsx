import { Group, Paper, Text } from "@mantine/core";
import React from "react";
import CustomBadge from "../Components/CustomBadge";

const ProductDetails = ({ product }) => {
    const {
        name: productName,
        description,
        price,
        minimumQuantity,
        availableQuantity,
    } = product;
    return (
        <>
            <Paper shadow="xl" withBorder radius="lg" p="lg">
                <Group>
                    <Group direction="column">
                        <Group>
                            <Text size="lg" weight="bold">
                                {productName}
                            </Text>
                        </Group>
                        <Group>
                            <Text size="sm" color="dimmed">
                                {description}
                            </Text>
                        </Group>
                        <Group>
                            <Text size="sm" color="dimmed">
                                Price: <CustomBadge>${price}</CustomBadge>
                            </Text>
                        </Group>
                        <Group>
                            <Text size="sm" color="dimmed">
                                Minimum Quantity you have to order:{" "}
                                <CustomBadge>{minimumQuantity}</CustomBadge>
                            </Text>
                        </Group>
                        <Group>
                            <Text size="sm" color="dimmed">
                                Available Quantity:{" "}
                                <CustomBadge color="red">
                                    {availableQuantity}
                                </CustomBadge>
                            </Text>
                        </Group>
                    </Group>
                </Group>
            </Paper>
        </>
    );
};

export default ProductDetails;
