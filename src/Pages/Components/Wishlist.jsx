import { ActionIcon, useMantineTheme } from "@mantine/core";
import React from "react";
import { Heart } from "tabler-icons-react";

const Wishlist = (props) => {
   const theme = useMantineTheme();
   return (
      <ActionIcon variant="hover" {...props}>
         <Heart size={22} color={theme.colors.red[6]} />
      </ActionIcon>
   );
};

export default Wishlist;
