import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import TextField from "@mui/material/TextField";

const COLORS = {
  text: "#446B80",
  icon: "#7FC9F0",
  title: "#6BB8E8",
  border: "#EAEAEA",
  placeholder: "#8FA8B8",
  avatarBg: "#EEF3F6",
  avatarIcon: "#B7C6D0",
};

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontSize: "14px",
    color: COLORS.text,
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
};


function Row({ label, children }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-[4px] md:gap-0">
      <p className="text-[#446B80] text-[14px] w-full md:w-[140px] shrink-0">
        {label}
      </p>
      <div className="flex items-center gap-[10px]">
        {children}
      </div>
    </div>
  );
}

export default function Private() {
  const [name, setName] = useState("Анна");
  const [editingName, setEditingName] = useState(false);
  const [password, setPassword] = useState("");
  const [editingPassword, setEditingPassword] = useState(false);

  return (
    <section className="w-full max-w-[724px] px-[16px] md:px-0 py-[20px] md:py-[30px]">

<p className="custom text-[48px] font-medium pb-[30px]">Личные данные</p>

      <div className="flex flex-col gap-[24px] md:gap-[30px]">

      
        <div className="flex items-center gap-[16px] md:gap-[24px]">
          <div
            className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: COLORS.avatarBg }}
          >
            <PersonIcon sx={{ fontSize: { xs: 32, md: 36 }, color: COLORS.avatarIcon }} />
          </div>
          <p className="text-[#446B80] text-[18px] md:text-[22px] font-medium break-all">
            annaananananana@gmail.com
          </p>
        </div>

    
        <div className="flex flex-col gap-[16px]">
          <Row label="Имя">
            {editingName ? (
              <TextField
                size="small"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setEditingName(false)}
                sx={{ ...fieldSx, width: { xs: "100%", sm: "220px" } }}
              />
            ) : (
              <>
                <span className="text-[#446B80] text-[15px] font-medium">{name}</span>
                <EditIcon
                  onClick={() => setEditingName(true)}
                  sx={{ fontSize: 18, color: COLORS.icon, cursor: "pointer" }}
                />
              </>
            )}
          </Row>

          <Row label="Телефон">
            <span className="text-[#7FC9F0] text-[15px] cursor-pointer hover:underline">
              Добавить
            </span>
          </Row>
        </div>

        <div className="border-t border-[#EAEAEA]" />

        {/* Адреса доставки */}
        <div className="flex flex-col gap-[12px]">
          <p className="text-[#446B80] text-[14px]">Адреса доставки</p>
          <p className="text-[#446B80] text-[15px] font-medium">
            Москва, ул. Московская 25-45
          </p>
        </div>

        <div className="border-t border-[#EAEAEA]" />

       
        <div className="flex flex-col gap-[12px]">
          <p className="text-[#446B80] text-[14px]">Пароль</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-[12px]">
            <TextField
              size="small"
              type="password"
              placeholder="**************"
              value={password}
              
              onChange={(e) => setPassword(e.target.value)}
              sx={{ ...fieldSx, width: { xs: "100%", sm: "300px" } }}
            />
            <span
              onClick={() => setEditingPassword(true)}
              className="text-[#7FC9F0] text-[15px] cursor-pointer hover:underline shrink-0"
            >
              Изменить
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}