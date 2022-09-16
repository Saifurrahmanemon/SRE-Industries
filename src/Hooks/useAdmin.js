import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../API/rootURL';

const useAdmin = (user) => {
   const [admin, setAdmin] = useState(false);
   const [adminLoading, setAdminLoading] = useState(true);
   useEffect(() => {
      const email = user?.email;
      if (email) {
         axios.get(`${API_URL}admin/${email}`).then(({ data }) => {
            setAdmin(data.admin);
            setAdminLoading(false);
         });
      }
   }, [user]);

   return [admin, adminLoading];
};

export default useAdmin;
