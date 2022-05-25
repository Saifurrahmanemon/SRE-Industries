import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import axiosPrivate from "../../../API/axiosPrivate";
import { API_URL } from "../../../API/rootURL";
import auth from "../../../firebase.init";
import CustomDashboardTitle from "../../Components/CustomDashboardTitle";
import Loading from "../../Shared/Loading";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";

const MyProfile = () => {
   const [user] = useAuthState(auth);

   const { data, isLoading, refetch } = useQuery(
      "myProfile",
      async () => await axiosPrivate.get(`${API_URL}users/${user?.email}`)
   );
   if (isLoading) {
      return <Loading />;
   }

   return (
      <>
         <CustomDashboardTitle>My Profile</CustomDashboardTitle>
         <Profile fixedInfo={user} userInfo={data.data} />
         <UpdateProfile userInfo={data.data} refetch={refetch} />
      </>
   );
};

export default MyProfile;
