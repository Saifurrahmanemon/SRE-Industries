import {
    ActionIcon,
    Avatar,
    Badge,
    Button,
    Group,
    Text,
    useMantineTheme,
} from "@mantine/core";
import React from "react";
import { Trash } from "tabler-icons-react";
const MyOrder = ({ order, index }) => {
    const theme = useMantineTheme();
    const { img, productName, phone, quantity, price, name } = order;
    return (
        <>
            <tr>
                <td>
                    <Group spacing="sm">
                        <Text size="sm" weight={500}>
                            {index + 1}
                        </Text>
                    </Group>
                </td>
                <td>
                    <Group spacing="sm">
                        <Avatar size={30} src={img} />
                        <Text size="sm" weight={500}>
                            {productName}
                        </Text>
                    </Group>
                </td>

                <td>
                    <Badge
                        variant="gradient"
                        gradient={{ from: "blue", to: "cyan", deg: 105 }}
                    >
                        {phone}
                    </Badge>
                </td>
                <td>
                    <Button variant="light" color="violet" compact>
                        Pay
                    </Button>
                </td>
                <td>
                    <Text size="md" weight={700} color="gray">
                        {quantity}
                    </Text>
                </td>
                <td>
                    <Text size="sm" weight={500} color="gray">
                        ${price}
                    </Text>
                </td>
                <td>
                    <Group spacing={0} position="right">
                        <ActionIcon color="red">
                            <Trash size={18} color="orange" />
                        </ActionIcon>
                    </Group>
                </td>
            </tr>
        </>
    );
};

export default MyOrder;
