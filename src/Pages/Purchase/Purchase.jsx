import { Container, Group, Image, Paper, SimpleGrid } from "@mantine/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useProductDetails from "../../Hooks/useProductDetails";
import Loading from "../Shared/Loading";
import ProductDetails from "./ProductDetails";
import UserDetails from "./UserDetails";
/*
 *display product details
 * user name and email and add extra field such as address phone number other info
 * input field for quantity min will min quantity and max will be available quantity
 * You will display an error and disable the purchase button in both cases.
 */

const BASE_HEIGHT = 360;

const Purchase = () => {
   const [user] = useAuthState(auth);
   const { purchaseId } = useParams();

   const name = user?.displayName;
   const email = user?.email;
   // this hook will return full info about product
   const { product, isLoading } = useProductDetails(purchaseId);

   if (isLoading) {
      return <Loading />;
   }
   const { img, name: productName } = product.data;

   return (
      <Container my="md">
         <SimpleGrid cols={2} breakpoints={[{ maxWidth: "xs", cols: 1 }]}>
            <Paper height={BASE_HEIGHT}>
               <UserDetails
                  name={name}
                  email={email}
                  productId={purchaseId}
                  product={product.data}
               />
            </Paper>
            <Group direction="column">
               <Group>
                  <Image
                     src={img}
                     alt={productName}
                     width={200}
                     style={{
                        borderRadius: "md",
                     }}
                  />
               </Group>
               <ProductDetails product={product.data} />
            </Group>
         </SimpleGrid>
      </Container>
   );
};

export default Purchase;
