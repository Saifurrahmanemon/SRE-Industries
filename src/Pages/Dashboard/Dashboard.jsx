import {
   AppShell,
   Burger,
   MediaQuery,
   Navbar,
   useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { MainLinks } from "./Dashboard/_MainLinks";
import User from "./Dashboard/_User";

export default function Dashboard() {
   const theme = useMantineTheme();
   const [opened, setOpened] = useState(false);
   return (
      <AppShell
         styles={{
            main: {
               background:
                  theme.colorScheme === "dark"
                     ? theme.colors.dark[8]
                     : theme.colors.gray[0],
            },
         }}
         navbarOffsetBreakpoint="sm"
         navbar={
            <Navbar
               p="md"
               hiddenBreakpoint="sm"
               hidden={!opened}
               width={{ sm: 200, lg: 300 }}
            >
               <Navbar.Section grow mt="xs">
                  <MainLinks />
               </Navbar.Section>
               <Navbar.Section>
                  <User />
               </Navbar.Section>
            </Navbar>
         }
      >
         <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
               opened={opened}
               onClick={() => setOpened((o) => !o)}
               size="sm"
               color={theme.colors.gray[6]}
               mr="xl"
            />
         </MediaQuery>
         <Outlet />
      </AppShell>
   );
}
