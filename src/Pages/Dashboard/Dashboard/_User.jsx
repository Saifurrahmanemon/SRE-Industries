import {
   Avatar,
   Box,
   Group,
   Text,
   UnstyledButton,
   useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import auth from "../../../firebase.init";

export default function User() {
   const theme = useMantineTheme();
   const [user] = useAuthState(auth);
   return (
      <Box
         sx={{
            paddingTop: theme.spacing.sm,
            borderTop: `1px solid ${
               theme.colorScheme === "dark"
                  ? theme.colors.dark[4]
                  : theme.colors.gray[2]
            }`,
         }}
      >
         <UnstyledButton
            sx={{
               display: "block",
               width: "100%",
               padding: theme.spacing.xs,
               borderRadius: theme.radius.sm,
               color:
                  theme.colorScheme === "dark"
                     ? theme.colors.dark[0]
                     : theme.black,

               "&:hover": {
                  backgroundColor:
                     theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
               },
            }}
         >
            <Group>
               <Avatar src={user?.photoURL} radius="xl" />
               <Box sx={{ flex: 1 }}>
                  <Text size="sm" weight={500}>
                     {user?.displayName}
                  </Text>
                  <Text color="dimmed" size="xs">
                     {user?.email}
                  </Text>
               </Box>

               {theme.dir === "ltr" ? (
                  <ChevronRight size={18} />
               ) : (
                  <ChevronLeft size={18} />
               )}
            </Group>
         </UnstyledButton>
      </Box>
   );
}
