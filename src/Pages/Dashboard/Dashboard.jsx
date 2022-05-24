import { AppShell, Navbar } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import { MainLinks } from "./Dashboard/_MainLinks";
import User from "./Dashboard/_User";

export default function Dashboard() {
    return (
        <AppShell
            padding="md"
            navbar={
                <Navbar width={{ base: 300 }} height={500} p="xs">
                    <Navbar.Section grow mt="xs">
                        <MainLinks />
                    </Navbar.Section>
                    <Navbar.Section>
                        <User />
                    </Navbar.Section>
                </Navbar>
            }
            styles={(theme) => ({
                main: {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            })}
        >
            <Outlet />
        </AppShell>
    );
}
