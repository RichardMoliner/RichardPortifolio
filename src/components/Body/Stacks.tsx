import React from "react";
import { Stack } from "@mui/material";

const StacksVetor = [
  { href: "https://react.dev/", icon: "react" },
  { href: "https://www.python.org/", icon: "python" },
];

const StacksUsed = () => {
  return (
    <>
      <Stack
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <span style={{ fontFamily: "Kanit", fontWeight: "bold" }}>
          Most used
        </span>
        {StacksVetor.map((stack) => (
          <a href={stack.href} target="_blank">
            <img
              src={`src/assets/${stack.icon}-vetor.png`}
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
