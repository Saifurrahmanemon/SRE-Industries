import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    container: {
       margin: 40,
       [theme.fn.smallerThan("sm")]: {
          margin: 0,
       },
    },

    wrapper: {
       display: "flex",
       gap: 20,
       alignItems: "center",
       justifyContent: "space-between",
       [theme.fn.smallerThan("sm")]: {
          flexDirection: "column",
          alignItems: "flex-start",
       },
    },

    text: {
       margin: `${theme.spacing.xs}px 0px `,
       color:
          theme.colorScheme === "dark"
             ? theme.colors.white
             : theme.colors.gray[6],
       fontWeight: 500,
       fontSize: theme.fontSizes.md,
       [theme.fn.smallerThan("sm")]: {
          fontSize: theme.fontSizes.sm,
       },
    },
    span: {
       color: theme.colorScheme === "dark" ? theme.white : theme.colors.gray[9],
       fontSize: theme.fontSizes.sm,
       fontFamily: "Roboto",
       [theme.fn.smallerThan("sm")]: {
          fontSize: theme.fontSizes.xs,
       },
    },
 }));
