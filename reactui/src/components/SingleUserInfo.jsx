import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import ShowUsersPermissions from "./ShowUsersPermissions";
import ShowUsersGroups from "./ShowUsersGroups";
import AddPermissionsToUser from "./dialogs/AddPermissionsToUser";
import AddGroupToUser from "./dialogs/AddGroupToUser";

const SingleUserInfo = ({ user }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h3" component="h3" align="justify">
          {user.username}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {user?.groups?.length > 0 ? (
            <>
              <Typography textAlign="center" variant="h5">
                User Rules{" "}
              </Typography>
              <ShowUsersGroups items={user?.groups} />
            </>
          ) : (
            " "
          )}
        </Box>
        <Box>
          {user?.user_permissions?.length > 0 ? (
            <Typography textAlign="center" variant="h5">
              User Permissions{" "}
            </Typography>
          ) : (
            " "
          )}
          <ShowUsersPermissions items={user?.user_permissions} />
        </Box>
        <Box>
        < AddPermissionsToUser user_id={user?.id} />
        < AddGroupToUser user_id={user?.id} />


        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default SingleUserInfo;
