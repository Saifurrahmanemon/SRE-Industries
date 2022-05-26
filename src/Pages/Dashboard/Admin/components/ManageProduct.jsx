import {
   ActionIcon,
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
const ManageProduct = ({ product, index, refetch }) => {
   const { _id, name, price, availableQuantity } = product;

   const theme = useMantineTheme();

   const [opened, setOpened] = useState(false);
   

   const handleDeleteItem = async (id) => {
      const { data } = await axiosPrivate.delete(`${API_URL}parts/${id}`);
      if (data.deletedCount) {
         toast.success("Removed Item Successfully");
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
            <Text weight={500}>
               Are you sure you want to remove {name} from product list?
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
         <tr key={index}>
            <td>{name}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>
               <Group spacing={0}>
                  <ActionIcon color="red" onClick={() => setOpened(true)}>
                     <Trash size={18} color="orange" />
                  </ActionIcon>
               </Group>
            </td>
         </tr>
      </>
   );
};

export default ManageProduct;
