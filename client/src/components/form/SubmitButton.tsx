import * as React from "react";
import "./Button.css";
import Button from "@mui/material/Button";

export default function SubmitButton(props: { label: string }) {
  return <Button variant="outlined">{props.label}</Button>;
}
