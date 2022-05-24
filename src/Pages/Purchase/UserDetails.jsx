import {
    ActionIcon,
    Button,
    Group,
    NumberInput,
    Paper,
    TextInput,
} from "@mantine/core";
import React, { useRef, useState } from "react";
import { Minus, Plus } from "tabler-icons-react";
import { useStyles } from "./UserDetails.styles";

const UserDetails = ({
    email,
    name,
    minimumQuantity: min,
    availableQuantity: max,
}) => {
    const { classes } = useStyles();

    const [value, setValue] = useState(min);
    const handlers = useRef();

    return (
        <>
            {" "}
            <Paper shadow="xl" withBorder radius="lg" p="lg">
                <Group>
                    <Group direction="column">
                        <div className={classes.form}>
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
                            />
                            <TextInput
                                label="Shipping address"
                                placeholder="15329 Huston 21st"
                                mt="md"
                                classNames={{
                                    input: classes.input,
                                    label: classes.inputLabel,
                                }}
                            />
                            <div className={classes.quantityWrapper}>
                                <ActionIcon
                                    size={28}
                                    variant="transparent"
                                    onClick={() => handlers.current.decrement()}
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
                                    handlersRef={handlers}
                                    value={value}
                                    onChange={setValue}
                                    classNames={{
                                        input: classes.quantityInput,
                                    }}
                                />

                                <ActionIcon
                                    size={28}
                                    variant="transparent"
                                    onClick={() => handlers.current.increment()}
                                    disabled={value === max}
                                    className={classes.quantityControl}
                                    onMouseDown={(event) =>
                                        event.preventDefault()
                                    }
                                >
                                    <Plus size={16} />
                                </ActionIcon>
                            </div>

                            <Group position="left" mt="md">
                                <Button className={classes.control}>
                                    Send message
                                </Button>
                            </Group>
                        </div>
                    </Group>
                </Group>
            </Paper>
        </>
    );
};

export default UserDetails;
