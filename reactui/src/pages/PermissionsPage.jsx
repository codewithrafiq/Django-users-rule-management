import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowUsersPermissions from "../components/ShowUsersPermissions"
import { Typography } from "@mui/material";

const PermissionsPage = () => {
  const [permissions, setPermissions] = useState(null)
  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_BASE_URL}/allPermission/`,
      method: "GET",
      headers: {
        Authorization: `token ${process.env.REACT_APP_AUTH_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          // console.log("allPermission----->", response.data);
          setPermissions(response.data);
        }
        if (response.status === 401) {
          // console.log("You are not authorized to access this page !");
          // alert("You are not authorized to access this page !");
          // window.location.href = "/";
        }
      })
      .catch((error) => {
        // alert("You are not authorized to access this page !");
        // window.location.href = "/";
      });
  }, []);
  return (
    <div>
      <Typography margin={3} variant="h3" textAlign="center" alignItems="center">All Permissions</Typography>
      <ShowUsersPermissions items={permissions} />

    </div>
  );
};

export default PermissionsPage;
