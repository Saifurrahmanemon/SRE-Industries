import { Box, ScrollArea } from "@mantine/core";
import { useQuery } from "react-query";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
import Loading from "../../Shared/Loading";
import SectionTitle from "../../Shared/SectionTitle";
import Review from "./Review";

const Reviews = () => {
   const { data: reviews, isLoading } = useQuery("reviews", () =>
      axiosPrivate.get(`${API_URL}reviews`)
   );

   if (isLoading) {
      return <Loading />;
   }

   return (
      <>
         <SectionTitle>Reviews</SectionTitle>
         <ScrollArea>
            <Box
               style={{
                  display: "flex",
               }}
               my="md"
            >
               {reviews?.data
                  .slice()
                  .reverse()
                  .map((review, index) => (
                     <Review review={review} key={index}></Review>
                  ))}
            </Box>
         </ScrollArea>
      </>
   );
};

export default Reviews;
