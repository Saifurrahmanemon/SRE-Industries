import { Avatar, createStyles, Group, Text } from "@mantine/core";
import React from "react";
import { At, PhoneCall } from "tabler-icons-react";
const useStyles = createStyles((theme) => ({
   icon: {
      color:
         theme.colorScheme === "dark"
            ? theme.colors.dark[3]
            : theme.colors.gray[5],
   },

   name: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
   },
}));
const Profile = ({ fixedInfo, userInfo }) => {
   const { classes } = useStyles();
   return (
      <>
         <Group noWrap>
            <Avatar src={userInfo?.img} size={94} radius="md" />
            <div>
               <Text
                  size="xs"
                  sx={{ textTransform: "uppercase" }}
                  weight={700}
                  color="dimmed"
               >
                  {"hello world"}
               </Text>

               <Text size="lg" weight={500} className={classes.name}>
                  {fixedInfo.displayName}
               </Text>

               <Group noWrap spacing={10} mt={3}>
                  <At size={16} className={classes.icon} />
                  <Text size="xs" color="dimmed">
                     {fixedInfo?.email}
                  </Text>
               </Group>

               <Group noWrap spacing={10} mt={5}>
                  <PhoneCall size={16} className={classes.icon} />
                  <Text size="xs" color="dimmed">
                     {userInfo?.phone}
                  </Text>
               </Group>
            </div>
         </Group>
      </>
   );
};

export default Profile;
