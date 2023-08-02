import { Grid, Avatar } from "@mui/material";
import React, { useId } from "react";
import "./BodyTop.css";
import StacksUsed from "./Stacks";
import MediaCard from "./Experiences";
import RecipeReviewCard from "./Hobbies";
import CenteredCarousel from "./Licences";

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
              src="/assets/richard-avatar.jpg"
              sx={{ width: 263, height: 263, border: 10, borderColor: "white", justifyContent: "center" }}
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
      <h3>My certificates:</h3>
      <CenteredCarousel />
    </>
  );
};

export default BodyTop;
