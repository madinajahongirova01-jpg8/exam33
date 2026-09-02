import React from 'react'
import Navbar from './../components/Navbar';
import Button2 from './../components/Button';

import TextField from "@mui/material/TextField";
import { Link } from 'react-router';

const COLORS = {
  text: "#446B80",
  icon: "#7FC9F0",
  title: "#6BB8E8",
  button: "#7FC9F0",
  buttonHover: "#6BB8E8",
  border: "#C5D5E0",
  placeholder: "#8FA8B8",
};






export default function Password2() {



  return (
  <div>
    <Navbar/>
    <section >
<div className="flex flex-col items-start px-[16px] md:px-[60px] gap-[16px] md:gap-[20px] w-full">
    <p className="custom text-[28px] md:text-[48px] font-medium">Восстановление пароля</p>
   <TextField
              
              placeholder="Новый пароль"
              type="password"
             

              
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  "& fieldset": {
                    borderColor: COLORS.border,
                  },
                  "&:hover fieldset": {
                    borderColor: COLORS.icon,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: COLORS.icon,
                  },
                  
                },
                width:{ xs: "100%", sm: "470px" }
              }}
            />
             <TextField
              
              placeholder="Повторите новый пароль"
              type="password"
             

              
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  "& fieldset": {
                    borderColor: COLORS.border,
                  },
                  "&:hover fieldset": {
                    borderColor: COLORS.icon,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: COLORS.icon,
                  },
                   
                },
                width:{ xs: "100%", sm: "470px" }
              }}
            />
            <Link to="/passwordRecreated">
            <Button2 >Сохранить</Button2>
            </Link>

    </div>
    </section>
    
  </div>
  )
}