import { Grid, Avatar } from "@mui/material";
import React from "react";

const BodyTop = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Avatar
          alt="Richard Moliner"
          src="src\assets\i-L5wqGPL-X2.jpg"
          sx={{ width: 150, height: 150 }}
        />
      </Grid>
    </Grid>
  );
};

export default BodyTop;
