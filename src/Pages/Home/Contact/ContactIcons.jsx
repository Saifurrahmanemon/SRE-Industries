import { Box, createStyles, Group, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import { At, MapPin, Phone, Sun } from "tabler-icons-react";

const useStyles = createStyles((theme, { variant }) => ({
   wrapper: {
      display: "flex",
      alignItems: "center",
      color: theme.white,
   },

   icon: {
      marginRight: theme.spacing.md,
      backgroundImage:
         variant === "gradient"
            ? `linear-gradient(135deg, ${
                 theme.colors[theme.primaryColor][4]
              } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`
            : "none",
      backgroundColor: "transparent",
   },

   title: {
      color:
         theme.colorScheme === "dark"
            ? theme.colors.dark[2]
            : theme.colors.gray[6],
   },

   description: {
      color:
         theme.colorScheme === "dark"
            ? theme.colors.dark[3]
            : theme.colors.gray[8],
   },
}));

function ContactIcon({
   icon: Icon,
   title,
   description,
   variant = "gradient",
   className,
   ...others
}) {
   const { classes, cx } = useStyles({ variant });
   return (
      <div className={cx(classes.wrapper, className)} {...others}>
         {variant === "gradient" ? (
            <ThemeIcon size={40} radius="md" className={classes.icon}>
               <Icon size={24} />
            </ThemeIcon>
         ) : (
            <Box mr="md">
               <Icon size={24} />
            </Box>
         )}

         <div>
            <Text size="xs" className={classes.title}>
               {title}
            </Text>
            <Text className={classes.description}>{description}</Text>
         </div>
      </div>
   );
}

const MOCKDATA = [
   { title: "Email", description: "customer@SREIndustries.dev", icon: At },
   { title: "Phone", description: "+32 (200) 420 20 35", icon: Phone },
   { title: "Address", description: "844 hello world python", icon: MapPin },
   { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: Sun },
];

export function ContactIconsList({ data = MOCKDATA, variant }) {
   const items = data.map((item, index) => (
      <ContactIcon key={index} variant={variant} {...item} />
   ));
   return <Group direction="column">{items}</Group>;
}
