import { ActionIcon, createStyles, NumberInput } from "@mantine/core";
import React, { useRef, useState } from "react";
import { Minus, Plus } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
    quantityWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `6px ${theme.spacing.xs}px`,
        borderRadius: theme.radius.sm,
        border: `1px solid ${
            theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
        }`,
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,

        "&:focus-within": {
            borderColor: theme.colors[theme.primaryColor][6],
        },
    },

    quantityControl: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        border: `1px solid ${
            theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
        }`,

        "&:disabled": {
            borderColor:
                theme.colorScheme === "dark"
                    ? "transparent"
                    : theme.colors.gray[3],
            opacity: 0.8,
            backgroundColor: "transparent",
        },
    },

    quantityInput: {
        textAlign: "center",
        paddingRight: `${theme.spacing.sm}px !important`,
        paddingLeft: `${theme.spacing.sm}px !important`,
        height: 28,
        flex: 1,
    },
}));

export default function Blog({ min = 1, max = 10 }) {
    const { classes } = useStyles();
    const handlers = useRef();
    const [value, setValue] = useState(1);

    return (
        <div className={classes.quantityWrapper}>
            <ActionIcon
                size={28}
                variant="transparent"
                onClick={() => handlers.current.decrement()}
                disabled={value === min}
                className={classes.quantityControl}
                onMouseDown={(event) => event.preventDefault()}
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
                classNames={{ input: classes.quantityInput }}
            />

            <ActionIcon
                size={28}
                variant="transparent"
                onClick={() => handlers.current.increment()}
                disabled={value === max}
                className={classes.quantityControl}
                onMouseDown={(event) => event.preventDefault()}
            >
                <Plus size={16} />
            </ActionIcon>
        </div>
    );
}
