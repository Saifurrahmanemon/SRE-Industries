import { useQuery } from "react-query";
import { API_URL } from "../API/rootURL";

const useParts = () => {
    const {
        data: products,
        isLoading,
        error,
    } = useQuery("products", async () =>
        fetch(`${API_URL}parts`).then((res) => res.json())
    );
    return { products, isLoading, error };
};

export default useParts;
