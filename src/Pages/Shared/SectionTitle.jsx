import { Center, createStyles, Text, useMantineTheme } from "@mantine/core";
import React from "react";
const useStyles = createStyles((theme) => ({
    title: {
        fontSize: 30,
        textTransform: "uppercase",
        paddingBottom: theme.spacing.sm,
        borderBottom: "2px solid transparent",
        transition: "border-color 500ms ",
        "&:hover": {
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            textDecoration: "none",
            borderBottom: "2px solid",
            borderBottomColor:
                theme.colors[theme.primaryColor][
                    theme.colorScheme === "dark" ? 5 : 6
                ],
        },
    },
}));
const SectionTitle = (props) => {
    const theme = useMantineTheme();
    const { classes } = useStyles();
    return (
        <Center>
            <Text
                component="span"
                align="center"
                variant="gradient"
                className={classes.title}
                gradient={{
                    from: theme.colors[theme.primaryColor][9],
                    to: theme.colors[theme.primaryColor][2],
                    deg: 45,
                }}
                weight={800}
                {...props}
            ></Text>
        </Center>
    );
};

export default SectionTitle;
