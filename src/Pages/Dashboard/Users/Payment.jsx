import React from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../../../Hooks/useProductDetails";
import Loading from "../../Shared/Loading";

const Payment = () => {
   const { id } = useParams();

   const { product, isLoading } = useProductDetails(id);

   if (isLoading) {
      return <Loading />;
   }

   return (
      <div>
         <h1>hello world: {product.data.name}</h1>
      </div>
   );
};

export default Payment;
