import {
   ActionIcon,
   Avatar,
   Badge,
   Button,
   Group,
   Modal,
   Text,
   useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Trash } from "tabler-icons-react";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
const MyOrder = ({ order, index }) => {
   const theme = useMantineTheme();
   const { img, productName, phone, quantity, price, _id, productId } = order;
   const [opened, setOpened] = useState(false);
   const navigate = useNavigate();
   console.log(productId);

   const handleDeleteItem = async (id) => {
      const { data } = await axiosPrivate.delete(`${API_URL}orders/${id}`);
      if (data.deletedCount) {
         toast.success("Order removed Successfully");
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
            <Text weight={500}>
               Are you sure you want to remove {productName} from order list?
            </Text>
            <Group noWrap position="right" mt={theme.spacing.xl * 2}>
               {" "}
               <Button
                  color="red"
                  onClick={() => {
                     handleDeleteItem(_id);
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
                  <Text size="sm" weight={500}>
                     {productName}
                  </Text>
               </Group>
            </td>

            <td>
               <Badge
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan", deg: 105 }}
               >
                  {phone}
               </Badge>
            </td>
            <td>
               <Button
                  variant="light"
                  color="violet"
                  onClick={() => navigate(`/dashboard/payment/${productId}`)}
                  compact
               >
                  Pay
               </Button>
            </td>
            <td>
               <Text size="md" weight={700} color="gray">
                  {quantity}
               </Text>
            </td>
            <td>
               <Text size="sm" weight={500} color="gray">
                  ${price}
               </Text>
            </td>
            <td>
               <Group spacing={0} position="right">
                  <ActionIcon color="red" onClick={() => setOpened(true)}>
                     <Trash size={18} color="orange" />
                  </ActionIcon>
               </Group>
            </td>
         </tr>
      </>
   );
};

export default MyOrder;
