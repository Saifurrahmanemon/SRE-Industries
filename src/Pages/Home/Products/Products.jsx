import { Container, Grid, useMantineTheme } from "@mantine/core";
import useParts from "../../../Hooks/useParts";
import Loading from "../../Shared/Loading";
import SectionTitle from "../../Shared/SectionTitle";
import Product from "./Product";

const Products = () => {
   const theme = useMantineTheme();
   const { products, isLoading, error } = useParts();

   if (isLoading) return <Loading />;

   if (error) return "An error has occurred: " + error.message;

   return (
      <Container mb={theme.spacing.xl * 2}>
         <SectionTitle mb="xl">Parts</SectionTitle>
         <Grid>
            {" "}
            {products.map((product) => (
               <Grid.Col md={6} lg={6} key={product._id}>
                  <Product product={product}></Product>
               </Grid.Col>
            ))}
         </Grid>
      </Container>
   );
};

export default Products;
