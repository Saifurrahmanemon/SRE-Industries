import { Avatar, Badge, Button, Group, Text } from "@mantine/core";
import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../../API/axiosPrivate";
import { API_URL } from "../../../../API/rootURL";
const ShowAdmin = ({ user: userInfo, index }) => {
   const { email, img, phone } = userInfo;

   const handleMakeAdmin = async (email) => {
      const res = await axiosPrivate.put(
         `${API_URL}users/admin/${email}`,
         email
      );

      if (res.status === 403) {
         toast.error("You are not authorized to make this user admin 😔");
      }

      if (res?.data?.modifiedCount > 0) {
         toast.success(`Yes!! Successfully made an admin `);
      }
   };

   return (
      <>
         <tr>
            <td>
               <Group spacing="sm">
                  <Text size="sm" weight={500}>
                     {index + 1}
                  </Text>
               </Group>
            </td>
            <td>
               <Group spacing="sm">
                  <Avatar size={30} src={img} />
               </Group>
            </td>

            <td>
               <Badge size="md" weight={500} color="gray">
                  {email}
               </Badge>
            </td>
            <td>
               <Text size="sm" weight={500} color="gray">
                  {phone === null ? "No number" : phone}
               </Text>
            </td>

            <td>
               {userInfo.role === "admin" ? (
                  <Badge size="md" weight={500} color="green">
                     Admin
                  </Badge>
               ) : (
                  <Button
                     variant="light"
                     color="violet"
                     compact
                     onClick={() => handleMakeAdmin(email)}
                  >
                     Make Admin
                  </Button>
               )}
            </td>
         </tr>
      </>
   );
};

export default ShowAdmin;
