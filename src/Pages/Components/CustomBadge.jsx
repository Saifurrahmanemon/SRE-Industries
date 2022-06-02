import { Badge, createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
   main: {
      fontSize: theme.spacing.sm,
      [theme.fn.smallerThan("sm")]: {
         fontSize: theme.spacing.xs,
      },
   },
}));

const CustomBadge = (props) => {
   const { classes } = useStyles();
   return (
      <>
         <Badge
            color="dark"
            className={classes.main}
            weight={900}
            {...props}
         ></Badge>
      </>
   );
};

export default CustomBadge;
