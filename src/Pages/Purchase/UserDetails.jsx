import {
    ActionIcon,
    Button,
    Group,
    NumberInput,
    Paper,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Minus, Plus } from "tabler-icons-react";
import axiosPrivate from "../../API/axiosPrivate";
import { API_URL } from "../../API/rootURL";
import { useStyles } from "./UserDetails.styles";
const UserDetails = ({
    email,
    name,
    minimumQuantity: min,
    availableQuantity: max,
    productId,
}) => {
    const [value, setValue] = useState(min + 1);
    const { classes } = useStyles();

    useEffect(() => {
        if (value <= min) {
            toast.error("Can not order below minimum quantity ");
        }

        if (value >= max) {
            toast.error("Can not order over available quantity");
        }
    }, [max, min, value]);

    const form = useForm({
        initialValues: {
            email: email,
            name: name,
            productId: productId,
            quantity: min,
            address: "",
            phone: Number,
        },
    });
    console.log(value);

    const handleOnSubmit = async (values) => {
        const { data } = await axiosPrivate.post(`${API_URL}orders`, values);
        if (data.success) {
            toast.success("Order placed successfully📦");
        } else {
            toast.error("Can not Order Same Product Twice");
        }
        if (data.error) {
            toast.error(data.error);
        }
    };

    return (
        <>
            {" "}
            <Paper shadow="xl" withBorder radius="lg" p="lg">
                <Group>
                    <Group direction="column">
                        <form
                            onSubmit={form.onSubmit(handleOnSubmit)}
                            className={classes.form}
                        >
                            <TextInput
                                label="Email"
                                placeholder={email}
                                disabled
                                required
                                classNames={{
                                    input: classes.input,
                                    label: classes.inputLabel,
                                }}
                            />
                            <TextInput
                                label="Name"
                                placeholder={name}
                                disabled
                                mt="md"
                                classNames={{
                                    input: classes.input,
                                    label: classes.inputLabel,
                                }}
                            />
                            <NumberInput
                                placeholder="+88"
                                label="Phone Number"
                                hideControls
                                mt="md"
                                {...form.getInputProps("phone")}
                            />
                            <TextInput
                                label="Shipping address"
                                placeholder="15329 Huston 21st"
                                mt="md"
                                classNames={{
                                    input: classes.input,
                                    label: classes.inputLabel,
                                }}
                                {...form.getInputProps("address")}
                            />
                            <div className={classes.quantityWrapper}>
                                <ActionIcon
                                    size={28}
                                    variant="transparent"
                                    onClick={() => setValue((prev) => prev - 1)}
                                    disabled={value === min}
                                    className={classes.quantityControl}
                                    onMouseDown={(event) =>
                                        event.preventDefault()
                                    }
                                >
                                    <Minus size={16} />
                                </ActionIcon>

                                <NumberInput
                                    variant="unstyled"
                                    min={min}
                                    max={max}
                                    value={value}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            "quantity",
                                            event.currentTarget.value
                                        )
                                    }
                                    classNames={{
                                        input: classes.quantityInput,
                                    }}
                                />

                                <ActionIcon
                                    size={28}
                                    variant="transparent"
                                    onClick={() => setValue((prev) => prev + 1)}
                                    disabled={value === max}
                                    className={classes.quantityControl}
                                    onMouseDown={(event) =>
                                        event.preventDefault()
                                    }
                                >
                                    <Plus size={16} />
                                </ActionIcon>
                            </div>

                            <Group position="left" variant="light" mt="md">
                                <Button
                                    type="submit"
                                    className={classes.control}
                                >
                                    Purchase
                                </Button>
                            </Group>
                        </form>
                    </Group>
                </Group>
            </Paper>
        </>
    );
};

export default UserDetails;
