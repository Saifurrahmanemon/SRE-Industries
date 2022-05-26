import { ScrollArea, Table } from "@mantine/core";
import React from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
import CustomDashboardTitle from "../../Components/CustomDashboardTitle";
import Loading from "../../Shared/Loading";
import AllOrder from "./components/AllOrder";

const ManageAllOrders = () => {
   const {
      data: orders,
      isLoading,
      refetch,
   } = useQuery(
      "orders",
      async () => await axiosPrivate.get(`${API_URL}orders`)
   );

   if (isLoading) {
      return <Loading />;
   }

   return (
      <>
         <CustomDashboardTitle>manage all orders</CustomDashboardTitle>

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
                     <th>User</th>
                     <th>Product Name</th>
                     <th>Status </th>
                     <th>Remove</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {orders?.data.map((order, index) => (
                     <AllOrder
                        order={order}
                        key={order._id}
                        index={index}
                        refetch={refetch}
                     ></AllOrder>
                  ))}
               </tbody>
            </Table>
         </ScrollArea>
      </>
   );
};

export default ManageAllOrders;
