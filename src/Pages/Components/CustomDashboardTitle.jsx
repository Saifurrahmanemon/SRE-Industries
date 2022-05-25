import { createStyles, Text } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
   text: {
      fontSize: 20,
      [theme.fn.smallerThan("sm")]: {
         fontSize: 15,
      },
   },
}));

const CustomDashboardTitle = (props) => {
   const { classes } = useStyles();
   return (
      <>
         <Text
            transform="capitalize"
            className={classes.text}
            component="h1"
            size="xl"
            {...props}
         ></Text>
      </>
   );
};

export default CustomDashboardTitle;
