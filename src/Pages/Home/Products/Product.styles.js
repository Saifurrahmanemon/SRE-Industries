import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
   card: {
      backgroundColor:
         theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      display: "flex",
      [theme.fn.smallerThan("sm")]: {
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
      },
   },

   text: {
      color: "gray",
      fontSize: 14,
      lineHeight: 1.2,
      [theme.fn.smallerThan("xs")]: {
         fontSize: 12,
      },
   },

   body: {
      padding: theme.spacing.md,
      [theme.fn.smallerThan("sm")]: {
         marginTop: theme.spacing.xl,
      },
   },
   image: {
      width: 150,

      [theme.fn.smallerThan("sm")]: {
         width: "100%",
      },
   },
}));
