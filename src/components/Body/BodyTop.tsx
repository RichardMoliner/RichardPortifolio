import { Grid, Avatar } from "@mui/material";
import React from "react";
import './BodyTop.css'
import StacksUsed from "./Stacks";


const BodyTop = () => {
  return (
    <>
      <h1>RICHARD MOLINER JÚNIOR</h1>
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
      <h2>Fullstack developer</h2>
      <StacksUsed />
    </>
  );
};

export default BodyTop;
