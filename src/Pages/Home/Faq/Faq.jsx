import {
   Accordion,
   Col,
   Container,
   createStyles,
   Grid,
   Image,
   Title,
} from "@mantine/core";
import React from "react";
import img from "../../../Assets/svg/Faq.svg";
import SectionTitle from "../../Shared/SectionTitle";

const useStyles = createStyles((theme) => ({
   wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
   },

   title: {
      marginBottom: theme.spacing.md,
      paddingLeft: theme.spacing.md,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
   },

   item: {
      fontSize: theme.fontSizes.sm,
      color:
         theme.colorScheme === "dark"
            ? theme.colors.dark[1]
            : theme.colors.gray[7],
   },
}));

export default function Faq() {
   const { classes } = useStyles();
   return (
      <div className={classes.wrapper}>
         <SectionTitle mb="xl">FAQ's</SectionTitle>
         <Container size="lg">
            <Grid id="faq-grid" gutter={50}>
               <Col span={12} md={6}>
                  <Image src={img} alt="Frequently Asked Questions" />
               </Col>
               <Col span={12} md={6}>
                  <Title order={2} align="left" className={classes.title}>
                     Frequently Asked Questions
                  </Title>

                  <Accordion iconPosition="right" initialItem={0}>
                     <Accordion.Item
                        label="How can I become an Admin?"
                        className={classes.item}
                     >
                        If any of admin makes you admin you can become an admin
                        get access to the admin panel.
                     </Accordion.Item>
                     <Accordion.Item
                        label="Do you store credit card information securely?"
                        className={classes.item}
                     >
                        No!! We do not store your credit card information.
                     </Accordion.Item>
                     <Accordion.Item
                        label="How do I change my password?"
                        className={classes.item}
                     >
                        You can change your password by clicking on the “Change
                        Password” button on the bottom right corner of the login
                        page
                     </Accordion.Item>
                     <Accordion.Item
                        label="What payment systems to you work with?"
                        className={classes.item}
                     >
                        We accept Visa, MasterCard, American Express, Discover,
                        and JCB.
                     </Accordion.Item>
                  </Accordion>
               </Col>
            </Grid>
         </Container>
      </div>
   );
}
