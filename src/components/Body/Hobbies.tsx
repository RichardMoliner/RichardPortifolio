import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const cardsData = [
  {
    title: "We, developers, can surf!",
    image: "/assets/surf-gopro.jpg",
    description:
      "Surf was always present in my family. My dad already surfed but began to have back pain, so he gave up the waves. My young brother, Pedro, and I surf together. We have so much fun! Aloha!",
  },
  {
    title: "We can also skate! It's awesome!",
    image: "/assets/skate-port.png",
    description:
      "I started skate with 7 years. Always skate after school with my neighbors until the sun goes down! When I became a responsible adult, the falls started to hurt so much, so I decided to stick with surfing.",
  },
  {
    title: "Martial arts? YES, WE CAN!",
    image: "/assets/jiu-jitsu.jpg",
    description:
      "I'm a blue belt in Brazilian jiu-jitsu. I started with JJ in 2018, practicing every day after college at 10:30 PM. This sport helped me to be more respectful and gave me the power of self-control. OSS!",
  },
  {
    title: "My Family!",
    image: "/assets/family.png",
    description:
      "Beside the greatest man, ALWAYS have the greatest woman. I found a wonderful one and I am so lucky to be married to Daiana. She's also a developer, an amazing one actually. We are a technological family! And this little one is Duque, our pet children!",
  },
];

export default function HobbiesCarousel() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {cardsData.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: "85%",
            maxWidth: "370px",
            margin: "1em",
            backgroundColor: "beige",
            boxShadow: "10"
          }}
        >
          <Box sx={{ padding: "1em" }}>
            <Typography
              variant="h6"
              color="text.primary"
              textAlign="center"
              fontWeight="bold"
              fontFamily="Kanit"
            >
              <strong>{card.title}</strong>
            </Typography>
          </Box>
          <Box sx={{ padding: ".5em"}}>
            <CardMedia
              component="img"
              image={card.image}
              alt={card.title}
              height={350}
            />
          </Box>
          <CardContent>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="justify"
            >
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
