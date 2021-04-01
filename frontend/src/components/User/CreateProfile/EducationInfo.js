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

const EducationInfo = () => {
  const classes = useStyles();

  const profileContext = useContext(ProfileContext);

  return (
    <Paper>
      <Container>
        <Typography variant="h6">Education</Typography>
        <Grid container spacing={2}>
          <Grid item lg={12} xl={12} sm={12} md={12}>
            <Typography className={classes.info} variant="subtitle2">
              <InputBase
                onChange={(e) =>
                  profileContext.dispatch({
                    type: "update-university",
                    payload: e.target.value,
                  })
                }
                fullWidth
                placeholder="University Name*"
              />
            </Typography>
          </Grid>
          <Grid item lg={12} xl={12}>
            <Typography className={classes.info} variant="subtitle2">
              <InputBase
                onChange={(e) =>
                  profileContext.dispatch({
                    type: "update-edescription",
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
  );
};

export default EducationInfo;
