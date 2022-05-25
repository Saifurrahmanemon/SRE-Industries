import { Avatar, Box, createStyles, Group, Paper, Text } from "@mantine/core";
import React from "react";
import ReactStars from "react-rating-stars-component";

const useStyles = createStyles((theme) => ({
   comment: {
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      margin: theme.spacing.xl,
      "&:hover": {
         backgroundColor: theme.fn.rgba(
            theme.colors[theme.primaryColor][1],
            0.11
         ),

         transition: "background-color 500ms ease ",
      },
      width: theme.spacing.xl * 20,
   },

   body: {
      paddingLeft: 54,
      paddingTop: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
   },
}));

export default function Review({ review }) {
   const { description, name, img, rating, email } = review;

   const { classes } = useStyles();
   return (
      <Paper withBorder radius="md" shadow="lg" className={classes.comment}>
         <Group noWrap position="apart">
            <Box component="span" style={{ display: "flex" }}>
               <Avatar src={img} mr="md" alt={name} radius="xl" />
               <div>
                  <Text size="sm">{name}</Text>
                  <Text size="xs" color="dimmed">
                     {email}
                  </Text>
               </div>
            </Box>

            <Text>
               <ReactStars
                  edit={false}
                  value={rating}
                  activeColor="#ffd700"
               ></ReactStars>
            </Text>
         </Group>
         <Text className={classes.body} size="sm">
            {description}
         </Text>
      </Paper>
   );
}
