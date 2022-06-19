import {
   AppShell,
   Box,
   Burger,
   MediaQuery,
   Navbar,
   useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
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

//links for users
const userLinks = [
   { link: "/dashboard/myorders", label: "My Orders", icon: BellRinging },
   { link: "", label: "My Profile", icon: Users },
   { link: "/dashboard/addreview", label: "Add Review", icon: Ballpen },
   { link: "/dashboard/history", label: "History", icon: History },
   { link: "/dashboard/othersettings", label: "Other Settings", icon: Settings },
];

//links for admin
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
      <Box>
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
                  onClick={() => setOpened(!opened)}
                  style={{
                     position: "sticky",
                  }}
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
                  size="xs"
                  color={
                     theme.colorScheme === "dark"
                        ? theme.white
                        : theme.colors[theme.primaryColor][7]
                  }
               />
            </MediaQuery>
            <Outlet />
         </AppShell>
      </Box>
   );
}
