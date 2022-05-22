import { Anchor, Burger, Container, Group, Header, Title } from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import React, { useState } from "react";
import { HEADER_HEIGHT, useStyles } from "./Navbar.Styles";

const userLinks = [
    {
        link: "#",
        label: "Privacy & Security",
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
        link: "#",
        label: "Book a demo",
    },
    {
        link: "#",
        label: "Documentation",
    },
    {
        link: "#",
        label: "Community",
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
    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(0);

    const mainItems = mainLinks.map((item, index) => (
        <Anchor
            href={item.link}
            key={item.label}
            className={cx(classes.mainLink, {
                [classes.mainLinkActive]: index === active,
            })}
            onClick={(event) => {
                event.preventDefault();
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
        <Header height={HEADER_HEIGHT} mb={120}>
            <Container className={classes.inner}>
                <Title>Hello world</Title>
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
