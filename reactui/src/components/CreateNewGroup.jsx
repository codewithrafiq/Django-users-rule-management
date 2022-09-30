import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import axios from "axios";

const CreateNewGroup = () => {
  const [groupName, setGroupName] = useState(null);
  const refreshPage = () => {
    window.location.reload();
  };
  const onClickCreateGroup = async () => {
    if (groupName === null) {
      alert("Please select a group name");
      return;
    }
    await axios({
      url: "http://127.0.0.1:8000/createAGroup/",
      //   url: `${process.env.REACT_APP_BASE_URL}/permissionUserDontHave/`,
      method: "POST",
      headers: {
        Authorization: `token ${process.env.REACT_APP_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        group_name: groupName,
      },
    })
      .then((response) => {
        console.log("response: ", response?.data);
        refreshPage();
        if (response.status === 200) {
          if (response.data.message) {
            alert(response.data.message);
          }
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
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Button fullWidth variant="contained" disableElevation>
          Create New Group
        </Button>
      </AccordionSummary>
      <AccordionDetails>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Group Nmae"
          variant="outlined"
          onChange={(e) => setGroupName(e.target.value)}
        />
        <Button
          onClick={onClickCreateGroup}
          style={{ marginTop: 5 }}
          fullWidth
          variant="contained"
        >
          Add
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default CreateNewGroup;
