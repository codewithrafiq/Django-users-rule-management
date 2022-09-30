import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import { DialogContent, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { refreshPage } from "../../utils";

function SimpleDialog(props) {
  const { onClose, groups, user_id, open } = props;
  const [groupsIds, setGroupIds] = useState(null);

  const onClickAddGroups = async () => {
    console.log("====================================");
    console.log("user_id---->", user_id);
    console.log("====================================");
    console.log("====================================");
    console.log("groupsIds---->", groupsIds);
    console.log("====================================");
    await axios({
      url: "http://127.0.0.1:8000/addUserToGroup/",
      //   url: `${process.env.REACT_APP_BASE_URL}/permissionUserDontHave/`,
      method: "POST",
      headers: {
        Authorization: `token ${process.env.REACT_APP_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        user_id: user_id,
        group_ids: groupsIds,
      },
    })
      .then((response) => {
        // // console.log("response: ", response?.data?.data);
        if (response.status === 200) {
          if (response.data.message) {
            alert(response.data.message);
          }
          refreshPage()
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
    onClose();
  };

  // console.log("SimpleDialog--------------------------------", permissions);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
  ];

  return (
    <Dialog fullWidth onClose={() => onClose()} open={open}>
      <DialogTitle>
        <Typography variant="h5" textAlign="center">
          Groups
        </Typography>
      </DialogTitle>
      <DialogContent>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={groups}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              setGroupIds(ids);
              //   console.log(ids);
            }}
          />
        </div>
      </DialogContent>
      <Button onClick={onClickAddGroups} variant="contained">
        Add Permissions
      </Button>
    </Dialog>
  );
}

export default function AddGroupToUser({ user_id }) {
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState(null);
  const [loaded, setLoaded] = useState(true);

  const handleClose = (e) => {
    setOpen(false);
  };
  const handleClickOpen = async () => {
    setLoaded(false);
    await axios({
      url: "http://127.0.0.1:8000/groupsUserDontHave/",
      //   url: `${process.env.REACT_APP_BASE_URL}/permissionUserDontHave/`,
      method: "POST",
      headers: {
        Authorization: `token ${process.env.REACT_APP_AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        user_id: user_id,
      },
    })
      .then((response) => {
        console.log("response: ", response?.data?.data);
        if (response.status === 200) {
          setGroups(response?.data?.data);
          if (response.data.message) {
            alert(response.data.message);
            handleClose();
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
    setLoaded(true);
    if (loaded) {
      setOpen(true);
    }
  };
  return (
    <div>
      <Button
        style={{ marginTop: 4 }}
        fullWidth
        variant="contained"
        onClick={handleClickOpen}
      >
        Add Group
      </Button>
      <SimpleDialog
        open={open}
        groups={groups}
        onClose={handleClose}
        user_id={user_id}
      />
    </div>
  );
}
