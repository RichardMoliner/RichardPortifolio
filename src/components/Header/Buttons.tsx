import { Button, Stack } from "@mui/material";
import React from "react";
import { useState } from "react";

const UsedLinks = [
  { href: "https://www.linkedin.com/in/richard-moliner/", icon: "linkedin" },
  { href: "https://github.com/RichardMoliner", icon: "github" },
];

const HeaderButtons = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <Stack
      spacing={1}
      direction="row"
      padding={0.8}
      justifyContent="right"
      marginRight={1.5}
    >
      {UsedLinks.map((link, index) => (
        <Button
          key={link.href}
          variant="text"
          href={link.href}
          target="_blank"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          sx={{
            "&:hover": {
              backgroundColor:
                hoveredIndex === index ? "#1E90FF" : "transparent",
              color: hoveredIndex === index ? "#fff" : "#1E90FF",
            },
          }}
        >
          <img
            src={`src/assets/${link.icon}.png`}
            alt={link.icon}
            height={30}
          />
        </Button>
      ))}
    </Stack>
  );
};

export default HeaderButtons;
