import { Anchor, Burger, Container, Group, Header, Title } from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { Login, Logout } from "tabler-icons-react";
import Logo from "../../../Assets/logo/AppLogo";
import auth from "../../../firebase.init";
import CustomSignInOutButton from "../../Components/CustomSignInOutButton";
import MoodToggleButton from "../../Components/MoodToggleButton";
import { HEADER_HEIGHT, useStyles } from "./Navbar.Styles";

const userLinks = [
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
        link: "",
        label: "Home",
    },

    {
        link: "dashboard",
        label: "Dashboard",
    },
    {
        link: "blog",
        label: "Blog",
    },
    {
        link: "portfolio",
        label: "Portfolio",
    },
];

export default function Navbar() {
    const navigate = useNavigate();
    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(0);
    const [user] = useAuthState(auth);

    // for sign out

    const handleSignOut = () => {
        signOut(auth);
    };

    //for sign in

    const handleSignIn = () => {
        navigate("/login");
    };

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
                    {user ? (
                        <CustomSignInOutButton
                            leftIcon={<Logout color="red" strokeOpacity={1} />}
                            color="red"
                            onClick={handleSignOut}
                        >
                            Sign out
                        </CustomSignInOutButton>
                    ) : (
                        <CustomSignInOutButton
                            leftIcon={<Login />}
                            onClick={handleSignIn}
                        >
                            Sign in
                        </CustomSignInOutButton>
                    )}
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
