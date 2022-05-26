import { Button, Modal, Text } from "@mantine/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
import Loading from "../../Shared/Loading";

const CheckoutForm = ({ product }) => {
   const stripe = useStripe();
   const elements = useElements();
   const [cardError, setCardError] = useState("");
   const [success, setSuccess] = useState("");
   const [processing, setProcessing] = useState(false);
   const [transactionId, setTransactionId] = useState("");
   const [clientSecret, setClientSecret] = useState("");
   const [opened, setOpened] = useState(true);
   const navigate = useNavigate();

   const { price, email, name, _id } = product;

   useEffect(() => {
      axiosPrivate
         .post(`${API_URL}create-payment-intent`, { price })
         .then((res) => {
            if (res?.data?.clientSecret) {
               setClientSecret(res?.data?.clientSecret);
            }
         });
   }, [price]);
   const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();

      if (!stripe || !elements) {
         // Stripe.js has not loaded yet. Make sure to disable
         // form submission until Stripe.js has loaded.
         return;
      }

      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);

      if (card == null) {
         return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: "card",
         card,
      });

      setCardError(error?.message || "");
      setSuccess("");
      setProcessing(true);

      const { paymentIntent, error: intentError } =
         await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
               card: card,
               billing_details: {
                  name: name,
                  email: email,
               },
            },
         });

      if (intentError) {
         setCardError(intentError?.message);
         setProcessing(false);
      } else {
         setCardError("");
         setTransactionId(paymentIntent.id);
         console.log(paymentIntent);
         setSuccess("Congrats! Your payment is completed.");
         //store payment on database
         const payment = {
            productId: _id,
            transactionId: paymentIntent.id,
         };

         axiosPrivate.patch(`${API_URL}orders/${_id}`, payment).then((res) => {
            setProcessing(false);
         });
      }
   };

   if (processing) {
      return <Loading />;
   }

   const handleModalClose = () => {
      setOpened(false);
      navigate("/dashboard/myorders");
   };
   return (
      <>
         <form onSubmit={handleSubmit}>
            <CardElement
               options={{
                  style: {
                     base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                           color: "#aab7c4",
                        },
                     },
                     invalid: {
                        color: "#9e2146",
                     },
                  },
               }}
            />
            <Button my="xs" type="submit" disabled={!stripe || !clientSecret}>
               Pay
            </Button>
         </form>
         {cardError && <Text color="red">{cardError}</Text>}
         {success && (
            <Modal
               opened={opened}
               onClose={handleModalClose}
               title="Payment Complete!"
            >
               <Text color="green">{success}</Text>
               <Text my="xs">
                  Your transaction Id:{" "}
                  <Text color="blue" weight={700}>
                     {transactionId}
                  </Text>{" "}
               </Text>
            </Modal>
         )}
      </>
   );
};

export default CheckoutForm;
