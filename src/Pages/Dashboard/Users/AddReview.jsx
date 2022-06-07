import { Button, createStyles, Group, Text } from "@mantine/core";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import { Star, StarHalf } from "tabler-icons-react";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
import auth from "../../../firebase.init";
import CustomDashboardTitle from "../../Components/CustomDashboardTitle";

export const useStyles = createStyles((theme) => ({
   wrapper: {
      paddingTop: theme.spacing.xl,
   },
   textarea: {
      marginTop: theme.spacing.md,
      backgroundColor:
         theme.colorScheme === "dark" ? theme.colors.gray[7] : theme.white,
      borderRadius: "10px",
      padding: "20px",
      width: "80%",
      fontSize: "15px",
      fontWeight: "bold",
      border: "none",
      outline: "none",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      "&:focus": {
         border: "1px solid #e0e0e0",
         boxShadow: "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
      },
   },

   text: {
      fontSize: theme.spacing.md,
      fontWeight: 700,
      marginLeft: ".1rem",
      color:
         theme.colorScheme === "dark"
            ? theme.colors.gray[6]
            : theme.colors.gray[8],
      [theme.fn.smallerThan("sm")]: {
         fontSize: theme.spacing.sm,
      },
   },
}));

const AddReview = () => {
   const { register, handleSubmit, reset } = useForm();
   const [user] = useAuthState(auth);

   const [ratings, setRatings] = useState(0);

   const { classes } = useStyles();
   const onSubmit = async ({ description }) => {
      const review = {
         description,
         rating: ratings,
         img: user?.photoURL,
         name: user?.displayName,
         email: user?.email,
      };
      const { data } = await axiosPrivate.post(`${API_URL}reviews`, review);
      if (data.insertedId) {
         toast.success("Review added successfully");
         reset();
      }
   };
   return (
      <>
         <CustomDashboardTitle ml={6}>add review: </CustomDashboardTitle>

         <form
            className={classes.wrapper}
            action=""
            onSubmit={handleSubmit(onSubmit)}
         >
            <Group noWrap spacing="xs">
               <Text className={classes.text}>Give a Rating: </Text>
               <ReactStars
                  count={5}
                  onChange={setRatings}
                  size={20}
                  isHalf={true}
                  emptyIcon={<Star />}
                  halfIcon={<StarHalf />}
                  fullIcon={<Star />}
                  activeColor="#ffd700"
               />
            </Group>
            <textarea
               className={classes.textarea}
               name="description"
               placeholder="Write a review"
               id=""
               cols="40"
               rows="10"
               {...register("description", { required: true })}
            ></textarea>

            <Group>
               <Button variant="light" mt="md" type="submit">
                  Submit
               </Button>
            </Group>
         </form>
      </>
   );
};

export default AddReview;
