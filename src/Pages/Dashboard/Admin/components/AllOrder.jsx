import {
   ActionIcon,
   Badge,
   Button,
   Group,
   Modal,
   Text,
   useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Trash } from "tabler-icons-react";
import axiosPrivate from "../../../../API/axiosPrivate";
import { API_URL } from "../../../../API/rootURL";

const AllOrder = ({ order, index, refetch }) => {
   const [opened, setOpened] = useState(false);
   const theme = useMantineTheme();
   const [loading, setLoading] = useState(false);
   const { name, productName, _id } = order;

   const handleDeleteItem = async (id) => {
      const { data } = await axiosPrivate.delete(`${API_URL}orders/${id}`);
      if (data.deletedCount) {
         toast.success("Removed Item Successfully");
         refetch();
      }
   };

   const handleShipping = async (id) => {
      const { data } = await axiosPrivate.put(`${API_URL}orders/${id}`, {
         status: "shipped",
      });
      if (data.status) {
         setLoading(!loading);
         toast.success("Order Shipped Successfully");
         refetch();
      }
   };

   return (
      <>
         <Modal
            radius="md"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Remove Order!!"
         >
            <Text color="red" weight={500}>
               Are you sure you want to remove from order list? This is very
               dangerous action. As this might effect the data of the user.
            </Text>
            <Group noWrap position="right" mt={theme.spacing.xl * 2}>
               {" "}
               <Button
                  color="red"
                  onClick={() => {
                     handleDeleteItem(_id);
                     setOpened(false);
                  }}
               >
                  Delete
               </Button>
               <Button variant="default" onClick={() => setOpened(false)}>
                  cancel
               </Button>
            </Group>
         </Modal>
         <tr>
            <td>{index + 1}</td>
            <td>
               <Text size="sm" weight={600} color="dimmed">
                  {name}
               </Text>
            </td>
            <td>
               <Text
                  size="sm"
                  weight={700}
                  color={
                     theme.colorScheme === "dark"
                        ? theme.colors.gray[3]
                        : theme.colors.gray[8]
                  }
               >
                  {productName}
               </Text>
            </td>
            <td>
               {!order?.paid ? (
                  <>
                     <Badge color="red">Unpaid</Badge>
                  </>
               ) : (
                  <>
                     {order.status === "shipped" ? (
                        <>
                           <Badge color="green">Shipped</Badge>
                        </>
                     ) : (
                        <>
                           <Button
                              compact
                              size="xs"
                              loading={loading}
                              onClick={() => {
                                 handleShipping(_id);
                                 setLoading(!loading);
                              }}
                              color="yellow"
                           >
                              Pending
                           </Button>
                        </>
                     )}
                  </>
               )}
            </td>
            <td>
               <Group spacing={0}>
                  <ActionIcon
                     disabled={order.status === "shipped"}
                     color="red"
                     onClick={() => setOpened(true)}
                  >
                     <Trash
                        size={18}
                        color={order.status === "shipped" ? "gray" : "orange"}
                     />
                  </ActionIcon>
               </Group>
            </td>
         </tr>
      </>
   );
};

export default AllOrder;
