import {
   createStyles,
   Group,
   Image,
   Paper,
   Spoiler,
   Text,
} from "@mantine/core";
import CustomBadge from "../Components/CustomBadge";
const useStyles = createStyles((theme) => ({
   main: {
      display: "flex",
   },

   text: {
      fontSize: 15,

      [theme.fn.smallerThan("sm")]: {
         fontSize: 11,
      },
   },
   control: {
      color: theme.colors.gray[6],
      textDecoration: "none",
      [theme.fn.smallerThan("sm")]: {
         fontSize: 11,
      },
   },
}));
const ProductDetails = ({ product }) => {
   const {
      name: productName,
      description,
      price,
      minimumQuantity,
      availableQuantity,
      img,
   } = product;

   const { classes } = useStyles();
   return (
      <>
         <Paper className={classes.main} p="lg">
            <Group>
               <Image
                  src={img}
                  alt={productName}
                  width={150}
                  mr="xs"
                  style={{
                     borderRadius: "md",
                  }}
               />
            </Group>
            <Group direction="column">
               <Group>
                  <Text className={classes.text} size="lg" weight="bold">
                     {productName}
                  </Text>
               </Group>
               <Group>
                  <Text size="xs" className={classes.text} color="dimmed">
                     <Spoiler
                        maxHeight={50}
                        showLabel="Show more"
                        hideLabel="Hide"
                        styles={{
                           control: classes.control,
                        }}
                     >
                        {description}
                     </Spoiler>
                  </Text>
               </Group>
               <Group>
                  <Text className={classes.text} size="sm" color="dimmed">
                     Price: <CustomBadge>${price}</CustomBadge>
                  </Text>
               </Group>
               <Group>
                  <Text className={classes.text} size="sm" color="dimmed">
                     Minimum Quantity:{" "}
                     <CustomBadge>{minimumQuantity}</CustomBadge>
                  </Text>
               </Group>
               <Group>
                  <Text className={classes.text} size="sm" color="dimmed">
                     Available Quantity:{" "}
                     <CustomBadge color="red">{availableQuantity}</CustomBadge>
                  </Text>
               </Group>
            </Group>
         </Paper>
      </>
   );
};

export default ProductDetails;
