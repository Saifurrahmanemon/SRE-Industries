import {
   AppShell,
   Burger,
   MediaQuery,
   Navbar,
   useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import {
   Ballpen,
   BellRinging,
   BuildingStore,
   History,
   Settings,
   UserPlus,
   Users,
} from "tabler-icons-react";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import { MainLinks } from "./Dashboard/_MainLinks";
import User from "./Dashboard/_User";
const userLinks = [
   { link: "/dashboard/myorders", label: "My Orders", icon: BellRinging },
   { link: "", label: "My Profile", icon: Users },
   { link: "/dashboard/addreview", label: "Add Review", icon: Ballpen },
   { link: "", label: "History", icon: History },
   { link: "", label: "Other Settings", icon: Settings },
];
const adminLinks = [
   { link: "/dashboard/makeadmin", label: "Make Admin", icon: UserPlus },
   {
      link: "/dashboard/manageproducts",
      label: "Manage Products",
      icon: BuildingStore,
   },
   { link: "/dashboard/addproduct", label: "Add Product", icon: Ballpen },
   {
      link: "/dashboard/manageallorders",
      label: "Manage All Orders",
      icon: History,
   },
   { link: "", label: "My Profile", icon: Users },
];
export default function Dashboard() {
   const theme = useMantineTheme();
   const [opened, setOpened] = useState(false);
   const [user] = useAuthState(auth);
   const [admin] = useAdmin(user);
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
                  <MainLinks links={admin ? adminLinks : userLinks} />
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
