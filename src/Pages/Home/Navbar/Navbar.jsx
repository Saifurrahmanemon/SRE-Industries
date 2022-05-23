import { Anchor, Burger, Container, Group, Header, Title } from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../Assets/logo/AppLogo";
import MoodToggleButton from "../../Components/MoodToggleButton";
import { HEADER_HEIGHT, useStyles } from "./Navbar.Styles";

const userLinks = [
    {
        link: "Login",
        label: "Login",
    },
    {
        link: "#",
        label: "Account settings",
    },
    {
        link: "#",
        label: "Support options",
    },
];
const mainLinks = [
    {
        link: "dashboard",
        label: "Dashboard",
    },
    {
        link: "login",
        label: "Login",
    },
    {
        link: "blog",
        label: "Blog",
    },
    {
        link: "#",
        label: "Academy",
    },
    {
        link: "#",
        label: "Forums",
    },
];

export default function Navbar() {
    const navigate = useNavigate();
    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(0);

    const mainItems = mainLinks.map((item, index) => (
        <Anchor
            component={Link}
            to={item.link}
            key={item.label}
            className={cx(classes.mainLink, {
                [classes.mainLinkActive]: index === active,
            })}
            onClick={(event) => {
                setActive(index);
            }}
        >
            {item.label}
        </Anchor>
    ));

    const secondaryItems = userLinks.map((item) => (
        <Anchor
            href={item.link}
            key={item.label}
            onClick={(event) => event.preventDefault()}
            className={classes.secondaryLink}
        >
            {item.label}
        </Anchor>
    ));

    return (
        <Header height={HEADER_HEIGHT}>
            <Container className={classes.inner}>
                <Group>
                    {" "}
                    <Title onClick={() => navigate("/")} ml={-60} mt={10}>
                        <Logo />
                    </Title>
                    <MoodToggleButton ml={-40} />
                </Group>
                <div className={classes.links}>
                    <Group position="right">{secondaryItems}</Group>
                    <Group
                        spacing={0}
                        position="right"
                        className={classes.mainLinks}
                    >
                        {mainItems}
                    </Group>
                </div>
                <Burger
                    opened={opened}
                    onClick={() => toggleOpened()}
                    className={classes.burger}
                    size="sm"
                />
            </Container>
        </Header>
    );
}
