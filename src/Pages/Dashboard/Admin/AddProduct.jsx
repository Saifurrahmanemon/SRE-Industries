import {
   Box,
   Button,
   NumberInput,
   TextInput,
   useMantineTheme,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import React, { useCallback } from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
import { toBase64 } from "../../../Utils/Base64Converter";
import CustomDashboardTitle from "../../Components/CustomDashboardTitle";
import { useStyles } from "./AddProduct.styles";
import { dropzoneChildren } from "./components/DropZoneConfig";

export default function AddInventory() {
   const { classes } = useStyles();
   const theme = useMantineTheme();

   const form = useForm({
      initialValues: {
         name: "",
         price: 1000,
         minimumQuantity: 0,
         availableQuantity: 0,
         description: "",
         img: "",
      },
   });

   const onDrop = useCallback(
      async (acceptedFiles) => {
         const [file] = acceptedFiles;

         const img = await toBase64(file);
         form.setFieldValue("img", img);
      },
      [form]
   );
   const onReject = (files) => {
      toast.error("File must be an image");
   };
   const handleOnSubmit = async (values) => {
      const { data } = await axiosPrivate.post(`${API_URL}parts`, values);

      if (data?.insertedId) {
         toast.success("Product added successfully");
         form.reset();
      }
   };

   return (
      <>
         <Box
            my={20}
            size="xs"
            px="xs"
            style={{
               marginRight: "20%",
            }}
         >
            {" "}
            <CustomDashboardTitle>Add Product:</CustomDashboardTitle>
            <form onSubmit={form.onSubmit(handleOnSubmit)}>
               <TextInput
                  label="Name"
                  placeholder="Name of your product"
                  classNames={classes}
                  required
                  {...form.getInputProps("name")}
               />

               <NumberInput
                  classNames={classes}
                  my={20}
                  label="Price"
                  defaultValue={1000}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  formatter={(value) =>
                     !Number.isNaN(parseFloat(value))
                        ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        : "$ "
                  }
                  required
                  {...form.getInputProps("price")}
               />
               <NumberInput
                  classNames={classes}
                  my={20}
                  max={100}
                  min={0}
                  label="minimum Quantity"
                  required
                  {...form.getInputProps("minimumQuantity")}
               />
               <NumberInput
                  classNames={classes}
                  my={20}
                  max={1000}
                  min={0}
                  label="Available Quantity"
                  required
                  {...form.getInputProps("availableQuantity")}
               />

               <TextInput
                  label="Description"
                  placeholder="About The product"
                  classNames={{
                     input: classes.descriptionInput,
                     label: classes.label,
                  }}
                  required
                  {...form.getInputProps("description")}
               />

               <Dropzone
                  onDrop={onDrop}
                  onReject={onReject}
                  maxSize={264 ** 2}
                  accept={IMAGE_MIME_TYPE}
                  my={20}
               >
                  {(status) => dropzoneChildren(status, theme)}
               </Dropzone>

               <Button type="submit" variant="light" mt="lg">
                  Add Product
               </Button>
            </form>
         </Box>
      </>
   );
}
