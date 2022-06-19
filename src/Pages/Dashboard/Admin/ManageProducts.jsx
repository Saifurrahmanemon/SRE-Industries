import { ScrollArea, Table } from "@mantine/core";
import useParts from "../../../Hooks/useParts";
import CustomDashboardTitle from "../../Components/CustomDashboardTitle";
import Loading from "../../Shared/Loading";
import ManageProduct from "./components/ManageProduct";

const ManageProducts = () => {
   const { products, isLoading, refetch } = useParts();

   if (isLoading) return <Loading />;

   return (
      <>
         <CustomDashboardTitle>manage product</CustomDashboardTitle>

         <ScrollArea>
            <Table
               sx={{ minWidth: 600 }}
               verticalSpacing="xs"
               highlightOnHover
               striped
               mb="lg"
            >
               <thead>
                  <tr>
                     <th>Product Name</th>
                     <th>Price</th>
                     <th>Available </th>
                     <th>Remove</th>
                  </tr>
               </thead>
               <tbody>
                  {products.map((product, index) => (
                     <ManageProduct
                        product={product}
                        key={product._id}
                        index={index}
                        refetch={refetch}
                     />
                  ))}
               </tbody>
            </Table>
         </ScrollArea>
      </>
   );
};

export default ManageProducts;
