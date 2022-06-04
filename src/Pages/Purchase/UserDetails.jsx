import {
   ActionIcon,
   Avatar,
   Button,
   Group,
   NumberInput,
   Paper,
   Text,
   TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Mail, Minus, Plus } from "tabler-icons-react";
import axiosPrivate from "../../API/axiosPrivate";
import { API_URL } from "../../API/rootURL";
import auth from "../../firebase.init";
import Wishlist from "../Components/Wishlist";
import { useStore } from "../Shared/store";
import { useStyles } from "./UserDetails.styles";
const UserDetails = ({ email, name, productId, product }) => {
   const {
      img,
      price,
      minimumQuantity: min,
      availableQuantity: max,
      name: productName,
   } = product;
   const { classes } = useStyles();
   const [user] = useAuthState(auth);

   const {
      quantity,
      setQuantity,

      decreaseQuantity,
      increaseQuantity,
      shipping,
      promotion,
   } = useStore();
   useEffect(() => {
      setQuantity(min);
   }, [min, setQuantity]);

   const form = useForm({
      initialValues: {
         email: email,
         name: name,
         address: "",
         phone: Number,
      },
   });

   const handleOnSubmit = async ({ email, address, phone }) => {
      const productDetails = {
         productName: productName,
         img: img,
         productId: productId,
         email,
         address,
         phone,
         quantity,
         total: quantity * price + shipping + promotion,
         name,
      };

      const { data } = await axiosPrivate.post(
         `${API_URL}orders`,
         productDetails
      );
      if (data.success) {
         toast.success("Order placed successfully📦");
      } else {
         toast.error("Can not Order Same Product Twice");
      }
      if (data.error) {
         toast.error(data.error);
      }
   };

   return (
      <>
         <Paper p="lg">
            <Group className={classes.responsiveText} spacing="xs" ml={25}>
               <Avatar src={user?.photoURL} />
               <Group direction="column" spacing="xs">
                  <Text
                     className={classes.responsiveText}
                     color="gray"
                     weight={700}
                     size="sm"
                     mb={-5}
                  >
                     {name}
                  </Text>
                  <Text
                     className={classes.responsiveText}
                     color="dimmed"
                     weight={600}
                     size="sm"
                     mt={-5}
                  >
                     New Member
                  </Text>
               </Group>
            </Group>
            <Group>
               <Group direction="column">
                  <form
                     onSubmit={form.onSubmit(handleOnSubmit)}
                     className={classes.form}
                  >
                     <TextInput
                        placeholder={email}
                        icon={<Mail size={19} />}
                        disabled
                        required
                        classNames={{
                           input: classes.input,
                           label: classes.inputLabel,
                        }}
                     />

                     <NumberInput
                        placeholder="88"
                        label="Phone Number"
                        hideControls
                        required
                        classNames={{
                           input: classes.input,
                           label: classes.inputLabel,
                        }}
                        mt="md"
                        {...form.getInputProps("phone")}
                     />
                     <TextInput
                        label="Shipping address"
                        placeholder="15329 Huston 21st"
                        mt="md"
                        required
                        classNames={{
                           input: classes.input,
                           label: classes.inputLabel,
                        }}
                        {...form.getInputProps("address")}
                     />
                     <div className={classes.quantityWrapper}>
                        <ActionIcon
                           size={28}
                           variant="transparent"
                           onClick={decreaseQuantity}
                           disabled={quantity === min}
                           className={classes.quantityControl}
                           onMouseDown={(event) => event.preventDefault()}
                        >
                           <Minus size={16} />
                        </ActionIcon>

                        <NumberInput
                           variant="unstyled"
                           min={min}
                           max={max}
                           value={quantity}
                           classNames={{
                              input: classes.quantityInput,
                           }}
                        />

                        <ActionIcon
                           size={28}
                           variant="transparent"
                           onClick={increaseQuantity}
                           disabled={quantity >= max}
                           className={classes.quantityControl}
                           onMouseDown={(event) => event.preventDefault()}
                        >
                           <Plus size={16} />
                        </ActionIcon>
                     </div>

                     <Group position="left" variant="light" mt="md">
                        <Button
                           className={classes.button}
                           variant="light"
                           type="submit"
                        >
                           Place Order
                        </Button>
                        <Wishlist />
                     </Group>
                  </form>
               </Group>
            </Group>
         </Paper>
      </>
   );
};

export default UserDetails;
