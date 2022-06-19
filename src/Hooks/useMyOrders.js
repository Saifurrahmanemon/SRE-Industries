import { useQuery } from "react-query";
import axiosPrivate from "../API/axiosPrivate";
import { API_URL } from "../API/rootURL";

const useMyOrders = (email) => {
   const {
      data: orders,
      isLoading,
      refetch,
   } = useQuery(
      ["orders", email],
      async () => await axiosPrivate.get(`${API_URL}orders/${email}`)
   );
   return { orders, isLoading, refetch };
};

export default useMyOrders;
