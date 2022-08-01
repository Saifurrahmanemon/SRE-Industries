import {
   Anchor,
   Button,
   Group,
   List,
   Text,
   ThemeIcon,
   Title,
} from "@mantine/core";
import { Check } from "tabler-icons-react";
import car from "../../../Assets/svg/car.svg";
import { useStyles } from "./Banner.styles";

export default function Banner() {
   const { classes } = useStyles();

   return (
      <div>
         <div className={classes.inner}>
            <div className={classes.content}>
               <Title className={classes.title}>
                  World's <span className={classes.highlight}>Leading</span>{" "}
                  <br />
                  <span className={classes.tagline}>
                     Automotive components manufacturer
                  </span>
               </Title>
               <Text color="gray" mt="sm">
                  We are committed to supplying our customers with robust
                  automotive components and reliable services through our
                  international commercial and production network
               </Text>

               <List
                  mt={30}
                  spacing="sm"
                  size="sm"
                  icon={
                     <ThemeIcon size={20} radius="xl">
                        <Check size={12} />
                     </ThemeIcon>
                  }
               >
                  <List.Item>
                     <b>Insure Best Quality</b> – components are manufactured to
                     the strictest tolerances.
                  </List.Item>
                  <List.Item>
                     <b>Deliver Best</b> – We deliver top quality injection
                     molded parts produced by our IATF 16949 certified factory
                     in Poland.
                  </List.Item>
                  <List.Item>
                     <b>100% recyclable</b> – All of our products are 100%
                     recyclable
                  </List.Item>
               </List>

               <Group mt={30}>
                  <Button
                     variant="default"
                     radius="xl"
                     size="md"
                     className={classes.control}
                     component={Anchor}
                     href="https://github.com/Saifurrahmanemon/SRE-Industries"
                     target="_blank"
                  >
                     Source code
                  </Button>
               </Group>
            </div>
            <img className={classes.image} src={car} alt="" />
         </div>
      </div>
   );
}
