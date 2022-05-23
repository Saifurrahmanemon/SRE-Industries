import { Avatar, Box, createStyles, Group, Paper, Text } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
    comment: {
        padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
        margin: theme.spacing.xl,
        "&:hover": {
            backgroundColor: theme.fn.rgba(
                theme.colors[theme.primaryColor][1],
                0.11
            ),

            transition: "background-color 500ms ease ",
        },
        width: theme.spacing.xl * 20,
        [theme.fn.smallerThan["md"]]: {
            marginInline: theme.spacing.xl,
        },
    },

    body: {
        paddingLeft: 54,
        paddingTop: theme.spacing.sm,
        fontSize: theme.fontSizes.sm,
    },
}));

export default function Review({ review }) {
    const { postedAt, body, image, name } = review;
    const { classes } = useStyles();
    return (
        <Paper withBorder radius="md" shadow="lg" className={classes.comment}>
            <Group noWrap position="apart">
                <Box component="span" sx={{ display: "flex" }}>
                    <Avatar src={image} mr="md" alt={name} radius="xl" />
                    <div>
                        <Text size="sm">{name}</Text>
                        <Text size="xs" color="dimmed">
                            {postedAt}
                        </Text>
                    </div>
                </Box>

                <Text>Stars</Text>
            </Group>
            <Text className={classes.body} size="sm">
                {body}
            </Text>
        </Paper>
    );
}
