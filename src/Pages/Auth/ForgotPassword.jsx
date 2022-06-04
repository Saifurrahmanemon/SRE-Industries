import {
   Anchor,
   Box,
   Button,
   Center,
   Container,
   createStyles,
   Group,
   Paper,
   Text,
   TextInput,
   Title,
} from "@mantine/core";
import React, { useRef } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowLeft } from "tabler-icons-react";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const useStyles = createStyles((theme) => ({
   title: {
      fontSize: 26,
      fontWeight: 900,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
   },

   controls: {
      [theme.fn.smallerThan("xs")]: {
         flexDirection: "column-reverse",
      },
   },

   control: {
      [theme.fn.smallerThan("xs")]: {
         width: "100%",
         textAlign: "center",
      },
   },
}));

export default function ForgotPassword() {
   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
   const emailRef = useRef("");

   const navigate = useNavigate();
   const { classes } = useStyles();

   const handleResetPassword = async () => {
      const email = emailRef.current.value;

      if (email) {
         await sendPasswordResetEmail(email);
         toast.success("Please check your email for reset password link. 😀");
      }
      if (!email) {
         toast.error("Please enter your email! 😕 ");
      }
   };

   if (sending) {
      return <Loading></Loading>;
   }

   return (
      <Container size={460} my={110}>
         <Title className={classes.title} align="center">
            Forgot your password?
         </Title>
         <Text color="dimmed" my={2} size="sm" align="center">
            Enter your email to get a reset link
         </Text>

         <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
            <TextInput
               label="Your email"
               placeholder="SRE@Industries.dev"
               required
               ref={emailRef}
            />
            <Group position="apart" mt="lg" className={classes.controls}>
               <Anchor color="dimmed" size="sm" className={classes.control}>
                  <Center inline>
                     <ArrowLeft size={12} />
                     <Box onClick={() => navigate("/login")} ml={5}>
                        Back to login page
                     </Box>
                  </Center>
               </Anchor>
               <Button
                  onClick={handleResetPassword}
                  variant="light"
                  className={classes.control}
               >
                  Reset password
               </Button>
            </Group>
         </Paper>
      </Container>
   );
}
