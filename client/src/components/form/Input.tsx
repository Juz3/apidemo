import * as React from "react";
import "./Input.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        className="text-input"
        label="Give Integer"
        variant="outlined"
      />
    </Box>
  );
}
