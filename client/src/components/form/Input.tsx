import "./Input.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextInput(props: {
  label: string;
  width: string;
  action: (value: string) => void;
}) {
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.action(e.target.value);
        }}
      />
    </Box>
  );
}
