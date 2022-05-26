import { ScrollArea, Table } from "@mantine/core";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
import auth from "../../../firebase.init";
import CustomDashboardTitle from "../../Components/CustomDashboardTitle";
import Loading from "../../Shared/Loading";
import MyOrder from "./MyOrder";
const MyOrders = () => {
   const [user] = useAuthState(auth);
   const email = user?.email;

   const {
      data: orders,
      isLoading,
      refetch,
   } = useQuery(
      ["orders", email],
      async () => await axiosPrivate.get(`${API_URL}orders/${email}`)
   );

   if (isLoading) {
      return <Loading />;
   }

   return (
      <>
         <CustomDashboardTitle>My Orders : </CustomDashboardTitle>
         <ScrollArea>
            <Table
               sx={{ minWidth: 600 }}
               verticalSpacing="xs"
               fontSize="xs"
               highlightOnHover
               striped
               mb="lg"
            >
               <thead>
                  <tr>
                     <th />
                     <th>Product</th>
                     <th>Phone</th>
                     <th>Status</th>
                     <th>Quantity</th>
                     <th>Total</th>
                     <th />
                  </tr>
               </thead>
               <tbody>
                  {orders?.data.map((order, index) => (
                     <MyOrder
                        order={order}
                        index={index}
                        refetch={refetch}
                        key={order._id}
                     ></MyOrder>
                  ))}
               </tbody>
            </Table>
         </ScrollArea>
      </>
   );
};

export default MyOrders;
