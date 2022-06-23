import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
   wrapper: {
      paddingTop: theme.spacing.xl,
   },
   textarea: {
      marginTop: theme.spacing.md,
      backgroundColor:
         theme.colorScheme === "dark" ? theme.colors.gray[7] : theme.white,
      borderRadius: "10px",
      padding: "20px",
      width: "80%",
      fontSize: "15px",
      fontWeight: "bold",
      border: "none",
      outline: "none",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      "&:focus": {
         border: "1px solid #e0e0e0",
         boxShadow: "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
      },
   },

   text: {
      fontSize: theme.spacing.md,
      fontWeight: 700,
      marginLeft: ".1rem",
      color:
         theme.colorScheme === "dark"
            ? theme.colors.gray[6]
            : theme.colors.gray[8],
      [theme.fn.smallerThan("xs")]: {
         fontSize: theme.spacing.sm,
      },
   },
   unlockFeature: {
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      alignItems: "center",
      gap: 10,
      fontFamily: "roboto, san-serif, Menlo, Monaco, Consolas, Courier New",

      [theme.fn.smallerThan("sm")]: {
         fontSize: theme.spacing.sm,
      },
   },
}));
