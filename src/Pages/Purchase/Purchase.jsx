import {
   Container,
   Grid,
   Paper,
   SimpleGrid,
   Skeleton,
   useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useProductDetails from "../../Hooks/useProductDetails";
import Loading from "../Shared/Loading";
import OrderSummary from "./OrderSummary";
import ProductDetails from "./ProductDetails";
import UserDetails from "./UserDetails";
/*
 *display product details
 * user name and email and add extra field such as address phone number other info
 * input field for quantity min will min quantity and max will be available quantity
 * You will display an error and disable the purchase button in both cases.
 */

const PRIMARY_COL_HEIGHT = 300;

const Purchase = () => {
   const [user] = useAuthState(auth);
   const { purchaseId } = useParams();
   const theme = useMantineTheme();

   const name = user?.displayName;
   const email = user?.email;
   // this hook will return full info about product
   const { product, isLoading } = useProductDetails(purchaseId);

   const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

   if (isLoading) {
      return <Loading />;
   }

   return (
      <Container my="md">
         <SimpleGrid
            cols={2}
            spacing="md"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
         >
            <Grid gutter="md">
               <Grid.Col>
                  <ProductDetails product={product?.data} />
               </Grid.Col>
               <Grid.Col span={6}>
                  <Paper height={SECONDARY_COL_HEIGHT}>
                     <OrderSummary product={product?.data} />
                  </Paper>
               </Grid.Col>
               <Grid.Col span={6}>
                  <Skeleton
                     height={SECONDARY_COL_HEIGHT}
                     radius="md"
                     animate={false}
                  />
               </Grid.Col>
            </Grid>
            <UserDetails
               name={name}
               email={email}
               productId={purchaseId}
               product={product.data}
            />
         </SimpleGrid>
      </Container>
   );
};

export default Purchase;
