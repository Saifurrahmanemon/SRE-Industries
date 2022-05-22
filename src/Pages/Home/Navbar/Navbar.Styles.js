import { createStyles } from "@mantine/core";

export const HEADER_HEIGHT = 80;

export const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    links: {
        paddingTop: theme.spacing.lg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    mainLinks: {
        marginRight: -theme.spacing.sm,
    },

    mainLink: {
        textTransform: "uppercase",
        fontSize: 13,
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[1]
                : theme.colors.gray[6],
        padding: `7px ${theme.spacing.sm}px`,
        paddingBottom: theme.spacing.sm,
        fontWeight: 700,
        borderBottom: "2px solid transparent",
        transition: "border-color 100ms ease, color 100ms ease",

        "&:hover": {
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            textDecoration: "none",
        },
    },

    secondaryLink: {
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[6],
        fontSize: theme.fontSizes.xs,

        textTransform: "uppercase",
        transition: "color 100ms ease",

        "&:hover": {
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            textDecoration: "none",
        },
    },

    mainLinkActive: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        borderBottomColor:
            theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 5 : 6
            ],
    },
}));