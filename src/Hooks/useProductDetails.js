import { useQuery } from "react-query";
import axiosPrivate from "../API/axiosPrivate";
import { API_URL } from "../API/rootURL";

const useProductDetails = (id) => {
    const {
        data: product,
        isLoading,
        error,
    } = useQuery(
        "parts",
        async () => await axiosPrivate.get(`${API_URL}parts/${id}`)
    );

    return { product, isLoading, error };
};

export default useProductDetails;
