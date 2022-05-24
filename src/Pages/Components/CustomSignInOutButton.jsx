import { Button, createStyles } from "@mantine/core";
import React from "react";
const useStyles = createStyles((theme) => ({
    button: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        transition: "all 0.2s ease-in-out",
    },
}));

const CustomSignInOutButton = (props) => {
    const { classes } = useStyles();

    return (
        <>
            <Button
                compact
                {...props}
                className={classes.button}
                variant="light"
            ></Button>
        </>
    );
};

export default CustomSignInOutButton;
