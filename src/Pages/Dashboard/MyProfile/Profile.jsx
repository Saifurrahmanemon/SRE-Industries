import { Anchor, Avatar, createStyles, Group, Text } from "@mantine/core";
import React from "react";
import { At, BrandLinkedin, Location, PhoneCall } from "tabler-icons-react";
import CustomDashboardTitle from "../../Components/CustomDashboardTitle";
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
         <CustomDashboardTitle>Update Profile</CustomDashboardTitle>
         <Group noWrap>
            <Avatar src={userInfo?.img} size={94} radius="md" />
            <div>
               <Text size="xs" weight={500} color="dimmed">
                  {userInfo?.creationTime}
               </Text>

               <Text size="lg" weight={500} className={classes.name}>
                  {fixedInfo.displayName}
               </Text>

               <Group noWrap spacing={10} mt={3}>
                  <At size={16} className={classes.icon} />
                  <Text size="xs" weight={600} color="dimmed">
                     {fixedInfo?.email}
                  </Text>
               </Group>
               <Group noWrap spacing={10} mt={5}>
                  <Location size={16} className={classes.icon} />
                  <Text size="md" color="dimmed">
                     {userInfo?.address}
                  </Text>
               </Group>

               <Group noWrap spacing={10} mt={5}>
                  <PhoneCall size={16} className={classes.icon} />
                  <Text size="xs" color="dimmed">
                     {userInfo?.phone}
                  </Text>
               </Group>

               <Group noWrap spacing={10} mt={5}>
                  <BrandLinkedin size={16} className={classes.icon} />
                  <Anchor
                     size="xs"
                     color="dimmed"
                     target="_blank"
                     href={userInfo?.linkedIn}
                  >
                     {userInfo?.linkedIn}
                  </Anchor>
               </Group>
            </div>
         </Group>
      </>
   );
};

export default Profile;
