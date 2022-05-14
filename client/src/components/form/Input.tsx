import * as React from "react";
import "./Input.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput(props: { label: string; width: string }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: props.width },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        className="text-input"
        label={props.label}
        variant="outlined"
      />
    </Box>
  );
}
