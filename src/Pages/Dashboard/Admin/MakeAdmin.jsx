import { ScrollArea, Table } from "@mantine/core";
import React from "react";
import { useQuery } from "react-query";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
import CustomDashboardTitle from "../../Components/CustomDashboardTitle";
import Loading from "../../Shared/Loading";
import ShowAdmin from "./components/ShowAdmin";

const MakeAdmin = () => {
   const { data, isLoading } = useQuery("getusers", async () =>
      axiosPrivate.get(`${API_URL}users`)
   );

   if (isLoading) return <Loading />;

   return (
      <>
         <CustomDashboardTitle>make admin</CustomDashboardTitle>
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
                     <th>Person</th>
                     <th>Email</th>
                     <th>Phone</th>
                     <th>Make Admin</th>
                  </tr>
               </thead>
               <tbody>
                  {data.data.map((user, index) => (
                     <ShowAdmin key={user._id} user={user} index={index} />
                  ))}
               </tbody>
            </Table>
         </ScrollArea>
      </>
   );
};

export default MakeAdmin;
