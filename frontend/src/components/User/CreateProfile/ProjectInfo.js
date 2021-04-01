import {
  Container,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "../../../styles/CreateProfile";
import { ProfileContext } from "./CreateProfile";

const ProjectInfo = () => {
  const classes = useStyles();

  const profileContext = useContext(ProfileContext);

  return (
    <div>
      <Paper>
        <Container>
          <Typography variant="h6">Projects</Typography>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <Typography className={classes.info} variant="subtitle2">
                <InputBase
                  onChange={(e) =>
                    profileContext.dispatch({
                      type: "update-projectname",
                      payload: e.target.value,
                    })
                  }
                  fullWidth
                  placeholder="Project Name*"
                />
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography className={classes.info} variant="subtitle2">
                <InputBase
                  onChange={(e) =>
                    profileContext.dispatch({
                      type: "update-pdescription",
                      payload: e.target.value,
                    })
                  }
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Description*"
                />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default ProjectInfo;
