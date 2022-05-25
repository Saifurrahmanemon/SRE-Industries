import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../API/rootURL";

const useToken = (user) => {
   const [token, setToken] = useState("");
   useEffect(() => {
      const getToken = async () => {
         const info = user?.user;
         const email = info?.email;

         const userInfo = {
            email,
            img: info?.photoURL,
            name: info?.displayName,
            phone: info?.phoneNumber,
            creationTime: info?.metadata.creationTime,
         };

         if (email) {
            const { data } = await axios.put(
               `${API_URL}users/${email}`,
               userInfo
            );
            // set token to state to get access
            setToken(data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
         }
      };
      getToken();
   }, [user]);
   return [token];
};

export default useToken;
