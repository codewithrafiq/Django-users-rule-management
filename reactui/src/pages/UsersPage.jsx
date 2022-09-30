import React from "react";
import { useEffect } from "react";
import axios from "axios";
import SingleUserInfo from "../components/SingleUserInfo";
import { Box } from "@mui/system";

const UsersPage = () => {
  const [users, setUsers] = React.useState(null);
  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_BASE_URL}/allUsers/`,
      method: "GET",
      headers: {
        Authorization: `token ${process.env.REACT_APP_AUTH_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          // console.log("allUsers----->", response.data);
          setUsers(response.data);
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
      <Box textAlign='center'  margin={4} alignItems="center" justifyContent="center">
        <h1>Users and thir group and permissions</h1>
      </Box>
      {users?.map((user, i) => (
        <SingleUserInfo user={user} key={i} />
      ))}
    </div>
  );
};

export default UsersPage;
