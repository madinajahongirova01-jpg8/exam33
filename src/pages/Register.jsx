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

const fieldSx = {
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
  width: { xs: "100%", sm: "470px" },
};

export default function Register() {



  return (
  <div>
    <Navbar/>
    <section >
<div className="flex flex-col items-start px-[16px] md:px-[60px] gap-[16px] md:gap-[20px] w-full">
    <p className="custom text-[28px] md:text-[48px] font-medium">Регистрация</p>
   <TextField
              
              placeholder="Имя"
              type="text"
             

              
              sx={fieldSx}
            />
             <TextField
              
              placeholder="Электронный адрес"
              type="email"
             

              
              sx={fieldSx}
            />

  <TextField
              
              placeholder="Пароль"
              type="password"
             

              
              sx={fieldSx}
            />
  <TextField
              
              placeholder="Повторите пароль"
              type="password"
             

              
              sx={fieldSx}
            />
  <TextField
              
              placeholder="Вставить каптчу"
              type="file"
             

              
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
                width: { xs: "100%", sm: "192px" }
              }}
            />
            <div className="flex gap-[12px] md:gap-[20px]">
<input type="checkbox" className="w-[24px] h-[24px] shrink-0  border-[2px] border-[#446B80]"/>
<p className='text-[#446B80]'>Согласие с <span className="text-[#7FC9F0]">пользовательским соглашением</span>  и <span className="text-[#7FC9F0]">политикой конфиденциальности</span></p>
            </div>
           
            <Button2 >Зарегестрироваться</Button2>
           

    </div>
    </section>
    
  </div>
  )
}