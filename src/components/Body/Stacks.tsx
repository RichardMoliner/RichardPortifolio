import React from "react";
import { Stack } from "@mui/material";

const StacksVetor = [
  { href: "https://react.dev/", icon: "react" },
  { href: "https://www.python.org/", icon: "python" },
  { href: "https://www.djangoproject.com/", icon: "django" },
];

const StacksUsed = () => {
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <span style={{ fontFamily: "Kanit", fontWeight: "bold" }}>
          {/* Stacks used: */}
        </span>
        {StacksVetor.map((stack) => (
          <a href={stack.href} target="_blank">
            <img
              src={`/assets/${stack.icon}-vetor.png`}
              style={{ height: 30 }}
              alt={stack.icon}
            ></img>
          </a>
        ))}
      </Stack>
    </>
  );
};

export default StacksUsed;
