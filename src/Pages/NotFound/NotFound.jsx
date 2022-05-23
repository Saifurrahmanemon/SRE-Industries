import {
    Button,
    Container,
    createStyles,
    Image,
    SimpleGrid,
    Text,
    Title,
} from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../Assets/svg/404.svg";

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    title: {
        fontWeight: 900,
        fontSize: 34,
        marginBottom: theme.spacing.md,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 32,
        },
    },

    control: {
        [theme.fn.smallerThan("sm")]: {
            width: "100%",
        },
    },

    mobileImage: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    desktopImage: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },
}));

export default function NotFound() {
    const { classes } = useStyles();
    const navigate = useNavigate();

    return (
        <Container className={classes.root}>
            <SimpleGrid
                spacing={80}
                cols={2}
                breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
            >
                <Image src={image} className={classes.mobileImage} />
                <div style={{ marginTop: 50 }}>
                    <Title className={classes.title}>
                        Something is not right...
                    </Title>
                    <Text color="dimmed" size="lg">
                        Page you are trying to open does not exist. You may have
                        mistyped the address, or the page has been moved to
                        another URL. If you think this is an error contact
                        support.
                    </Text>
                    <Button
                        variant="light"
                        size="md"
                        mt="xl"
                        className={classes.control}
                        onClick={() => navigate("/")}
                    >
                        Get back to home page
                    </Button>
                </div>
                <Image src={image} className={classes.desktopImage} />
            </SimpleGrid>
        </Container>
    );
}
