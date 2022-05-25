import { Button, createStyles, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import React from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";

const useStyles = createStyles((theme) => ({
   root: {
      position: "relative",
      width: "70%",
      marginTop: theme.spacing.xl,
   },

   input: {
      height: "auto",
      paddingTop: 18,
   },

   label: {
      position: "absolute",
      pointerEvents: "none",
      fontSize: theme.fontSizes.xs,
      paddingLeft: theme.spacing.sm,
      paddingTop: theme.spacing.sm / 2,
      zIndex: 1,
   },
}));

export default function UpdateProfile({ userInfo, refetch }) {
   // You can add these classes as classNames to any Mantine input, it will work the same
   const { phone, address, email } = userInfo;
   const { classes } = useStyles();

   const form = useForm({
      initialValues: {
         address: "",
         phone: Number,
         linkedIn: "",
      },
   });

   const handleOnSubmit = async (values) => {
      const { data } = await axiosPrivate.put(
         `${API_URL}users/${email}`,
         values
      );

      if (data.result.modifiedCount) {
         toast.success("Profile updated successfully");
         refetch();
      }
   };

   return (
      <form onSubmit={form.onSubmit(handleOnSubmit)}>
         <TextInput
            label="Address"
            placeholder={address}
            classNames={classes}
            {...form.getInputProps("address")}
         />
         <TextInput
            label="LinkedIn"
            placeholder={"saifur rahman"}
            classNames={classes}
            {...form.getInputProps("linkedIn")}
         />
         <NumberInput
            label="Phone Number"
            placeholder={phone}
            classNames={classes}
            hideControls
            {...form.getInputProps("phone")}
         />
         <Button type="submit" mt="md" variant="light">
            Update
         </Button>
      </form>
   );
}
