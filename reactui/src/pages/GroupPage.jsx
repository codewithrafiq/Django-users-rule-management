import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShowUsersPermissions from "../components/ShowUsersPermissions";
import CreateNewGroup from "../components/CreateNewGroup";
import AddPermissionsToGroup from "../components/dialogs/AddPermissionsToGroup";

const GroupPage = () => {
  const [groups, setGroups] = useState(null);
  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_BASE_URL}/allGroups/`,
      method: "GET",
      headers: {
        Authorization: `token ${process.env.REACT_APP_AUTH_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          // console.log("allPermission----->", response.data);
          setGroups(response.data);
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
      <Typography
        margin={3}
        variant="h3"
        textAlign="center"
        alignItems="center"
      >
        All Rouls
      </Typography>
      {groups?.map((group, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" component="h5" align="justify">
              {group.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddPermissionsToGroup group_id={group?.id} />
            <Typography margin={3} textAlign="center" variant="h5">
              Group Permissions
            </Typography>
            <ShowUsersPermissions items={group?.permissions} />
          </AccordionDetails>
        </Accordion>
      ))}
      <CreateNewGroup />
    </div>
  );
};

export default GroupPage;
