import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
   inner: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
   },

   content: {
      maxWidth: 480,
      marginRight: theme.spacing.xl * 3,

      [theme.fn.smallerThan("md")]: {
         maxWidth: "100%",
         marginRight: 0,
      },
   },

   title: {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 40,
      lineHeight: 1.2,
      fontWeight: 900,

      [theme.fn.smallerThan("xs")]: {
         fontSize: 28,
      },
   },
   tagline: {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 23,
      lineHeight: 1.2,
      fontWeight: 700,
      margin: 0,

      [theme.fn.smallerThan("xs")]: {
         fontSize: 18,
      },
   },

   control: {
      [theme.fn.smallerThan("xs")]: {
         flex: 1,
      },
   },

   image: {
      maxWidth: 450,
      flex: 1,

      [theme.fn.smallerThan("860")]: {
         display: "none",
      },
   },

   highlight: {
      position: "relative",
      backgroundColor:
         theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
            : theme.colors[theme.primaryColor][0],
      borderRadius: theme.radius.sm,
      padding: "4px 12px",
   },
}));
