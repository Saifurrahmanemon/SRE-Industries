import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
   root: {
      position: "relative",
   },

   input: {
      height: "auto",
      paddingTop: 18,
   },

   label: {
      position: "absolute",
      pointerEvents: "none",
      fontSize: theme.fontSizes.xs,
      paddingLeft: theme.spacing.sm,
      paddingTop: theme.spacing.sm / 2,
      zIndex: 1,
   },
   title: {
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [theme.fn.smallerThan("sm")]: {
         marginBottom: theme.spacing.sm,
         fontSize: theme.spacing.md,
      },
   },
   control: {
      [theme.fn.smallerThan("sm")]: {
         flex: 1,
      },
   },
   descriptionInput: {
      height: "100px",
   },
}));
