import { Box, Container, createStyles, Paper, Text } from "@mantine/core";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
import CustomDashboardTitle from "../../Components/CustomDashboardTitle";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
   "pk_test_51Jn2enKEK5s8ugFqWpDRBr1nYooCWmIs7BiPe9M5XAsbjeF2IU8peOKxX01UBs2G39QH3xZP8mn0qUDYVNaEV32100lhf7RYW0"
);

const useStyles = createStyles((theme) => ({
   text: {
      margin: `${theme.spacing.xs}px 0px `,
      color:
         theme.colorScheme === "dark"
            ? theme.colors.white
            : theme.colors.gray[6],
      fontWeight: 500,
   },
   span: {
      fontWeight: 700,
      color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[9],
   },
}));
const Payment = () => {
   const { id } = useParams();
   const { classes } = useStyles();

   const { data: product, isLoading } = useQuery(
      ["order", id],
      async () => await axiosPrivate.get(`${API_URL}order/${id}`)
   );

   if (isLoading) {
      return <Loading />;
   }

   return (
      <>
         <Container my={20} mx={50} mr={90}>
            <CustomDashboardTitle>Payment: </CustomDashboardTitle>
            <Paper shadow="xl" radius="md" p="xl">
               <Text size="xl" weight={700} className={classes.text}>
                  Greetings!{" "}
                  <span className={classes.span}>{product?.data.name}</span>
               </Text>
               <Text className={classes.text}>
                  Payment Details for:
                  <span className={classes.span}>
                     {" "}
                     {product?.data.productName}
                  </span>
               </Text>

               <Text className={classes.text}>
                  Quantity:
                  <span className={classes.span}>
                     {" "}
                     {product?.data.quantity} pcs
                  </span>
               </Text>
               <Text className={classes.text}>
                  You have to pay:
                  <span className={classes.span}> ${product?.data.price}</span>
               </Text>

               <Text size="xl" className={classes.text}>
                  {" "}
                  Billing Address :{" "}
               </Text>
               <Text className={classes.text}>
                  Phone :{" "}
                  <span className={classes.span}> {product?.data.phone}</span>
               </Text>
               <Text className={classes.text}>
                  Email :{" "}
                  <span className={classes.span}> {product?.data.email}</span>
               </Text>
               <Text className={classes.text}>
                  Shipping Address :{" "}
                  <span className={classes.span}> {product?.data.address}</span>
               </Text>

               <Box my="xl">
                  <Elements stripe={stripePromise}>
                     <CheckoutForm product={product?.data} />
                  </Elements>
               </Box>
            </Paper>
         </Container>
      </>
   );
};

export default Payment;
