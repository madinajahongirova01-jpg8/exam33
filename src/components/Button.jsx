import React from 'react';
import Button from '@mui/material/Button';

export default function Button2({ children ,onClick}) {
  return (
    <Button
      variant="contained"  disableElevation
      sx={{
        color: "white",
        backgroundColor: "#7FC9F0",
        borderRadius: "12px",
        paddingTop:"10px",
          paddingBottom:"10px",
        "&:hover": {
          backgroundColor: "#5FB5E5",
          
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}