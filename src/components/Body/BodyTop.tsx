import { Grid, Avatar } from "@mui/material";
import React from "react";
import "./BodyTop.css";
import StacksUsed from "./Stacks";
import MediaCard from "./Experiences";
import RecipeReviewCard from "./Hobbies"

const BodyTop = () => {
  return (
    <>
      <h1>RICHARD MOLINER JÚNIOR</h1>
      <div className="waves-bg">
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
            src="src\assets\richard-avatar.jpg"
            sx={{ width: 278, height: 278}}
            
          />
        </Grid>
      </Grid>
      </div>
      <h2>Fullstack developer</h2>
      <StacksUsed />
      <br />
      <h3>My professional IT experiences:</h3>
      <MediaCard />
      <br />
      <h3>Some of my hobbies:</h3>
      <div className="hobbies">
        <RecipeReviewCard />
      </div>
    </>
  );
};

export default BodyTop;
