import {
   createStyles,
   Paper,
   Text,
   ThemeIcon,
   useMantineTheme,
} from "@mantine/core";
import React from "react";
import { ColorSwatch } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
   card: {
      position: "relative",
      cursor: "pointer",
      overflow: "hidden",
      transition: "transform 300ms ease, box-shadow 100ms ease",
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,

      "&:hover": {
         boxShadow: theme.shadows.md,
         transform: "scale(1.02)",
      },

      "&::before": {
         content: '""',
         position: "absolute",
         top: 0,
         bottom: 0,
         left: 0,
         width: 6,
         backgroundImage: theme.fn.linearGradient(
            0,
            theme.colors[theme.primaryColor][8],
            theme.colors[theme.primaryColor][3]
         ),
      },
   },
}));

function BlogItem({ title, description }) {
   const { classes } = useStyles();
   const theme = useMantineTheme();
   return (
      <Paper my={40} mx="xl" withBorder radius="md" className={classes.card}>
         <ThemeIcon
            size="xl"
            radius="md"
            variant="gradient"
            gradient={{
               deg: 0,
               from: theme.colors[theme.primaryColor][8],
               to: theme.colors[theme.primaryColor][3],
            }}
         >
            <ColorSwatch size={28} />
         </ThemeIcon>
         <Text size="xl" weight={500} mt="md">
            {title}
         </Text>
         <Text size="sm" mt="sm" color="dimmed">
            {description}
         </Text>
      </Paper>
   );
}
export default BlogItem;
