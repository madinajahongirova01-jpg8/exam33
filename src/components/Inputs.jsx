import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button2 from './Button';


const COLORS = {
  title: "#4F7C8F",
  label: "#8FA8B5",
  text: "#4A6B7C",
  border: "#D5E2E9",
  borderHover: "#B8CCD6",
  focus: "#7FC9F0",
  button: "#7FC9F0",
  buttonHover: "#6BB8E0",
};


const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    backgroundColor: "#fff",
    fontSize: 16,
    color: COLORS.text,

    "& fieldset": {
      borderColor: COLORS.border,
      borderWidth: 1.5,
    },

    "&:hover fieldset": {
      borderColor: COLORS.borderHover,
    },

    "&.Mui-focused fieldset": {
      borderColor: COLORS.focus,
    },
  },

  "& .MuiInputLabel-root": {
    color: COLORS.label,

    "&.Mui-focused": {
      color: COLORS.focus,
    },
  },

  "& .MuiInputBase-input": {
    padding: "14px 16px",
  },
};


export default function ContactForm() {

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        maxWidth: 720,
        mx: "auto",
        px: 2,
        py: 4,
      }}
    >

      <Typography
        variant="h5"
        sx={{
          color: COLORS.title,
          fontWeight: 500,
          mb: 3,
        }}
      >
        Напишите нам, и мы ответим на все Ваши вопросы
      </Typography>


      <Stack spacing={2.5}>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2.5}
        >

          <TextField
            label="Имя"
            fullWidth
            sx={fieldSx}
          />


          <TextField
            label="Телефон"
            type="tel"
            fullWidth
            sx={fieldSx}
          />

        </Stack>


        <TextField
          label="Сообщение"
          multiline
          minRows={4}
          fullWidth
          sx={fieldSx}
        />


    <FormControlLabel
  control={
    <Checkbox
      sx={{
        color: "#A8BFC9",
        "&.Mui-checked": {
          color: COLORS.focus,
        },
      }}
    />
  }
  label="Соглашение на обработку данных и пользовательское соглашение"
  sx={{
    ml: 0,
    alignItems: "center",
    "& .MuiFormControlLabel-label": {
      fontSize: 14,
      color: COLORS.title,
    },
  }}
/>


       <Button2>Отправить </Button2>

      </Stack>

    </Box>
  );
}