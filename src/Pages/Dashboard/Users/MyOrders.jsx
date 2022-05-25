import { ScrollArea, Table } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
import auth from "../../../firebase.init";
import MyOrder from "./MyOrder";
const MyOrders = () => {
   const [user] = useAuthState(auth);
   const [orders, setOrders] = useState([]);
   useEffect(() => {
      axiosPrivate
         .get(`${API_URL}orders/${user?.email}`)
         .then(({ data }) => setOrders(data));
   }, [user?.email, orders]);

   return (
      <>
         <h1>My orders</h1>
         <ScrollArea>
            <Table
               sx={{ minWidth: 800 }}
               verticalSpacing="xs"
               fontSize="xs"
               highlightOnHover
               striped
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
                  {orders.map((order, index) => (
                     <MyOrder
                        order={order}
                        index={index}
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
