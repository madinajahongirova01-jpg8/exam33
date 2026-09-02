import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router";

const ACCOUNT_MENU_COLORS = {
  text: "#5B7C8D",
  textDark: "#4A6B7C",
  email: "#7A9AAA",
  icon: "#7FC9F0",
  avatarBg: "#D6EEF9",
  divider: "#E4EEF3",
  hover: "rgba(127, 201, 240, 0.08)",
};

const USER = {
  name: "Анна",
  email: "annaaannnnanana@gmail.com",
};

const menuItems = [
  { id: "orders", label: "Мои заказы", icon: Inventory2OutlinedIcon },
  { id: "favorites", label: "Мое избранное", icon: FavoriteBorderIcon },
];

const secondaryItems = [
  { id: "settings", label: "Настройки личных данных", icon: SettingsOutlinedIcon },
  { id: "logout", label: "Выйти", icon: LogoutOutlinedIcon },
];

const COLORS = {
  text: "#446B80",
  icon: "#7FC9F0",
  title: "#6BB8E8",
  button: "#7FC9F0",
  buttonHover: "#6BB8E8",
  border: "#C5D5E0",
  placeholder: "#8FA8B8",
};

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true); 
    handleClose();
  };

  const handleAction = (id) => {
    if (id === "logout") {
      setIsLoggedIn(false);
    }
    if (id === "settings") {
      navigate("/private");
    }
    handleClose();
  };

  if (!isLoggedIn) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <Box
          component="button"
          type="button"
          onClick={handleOpen}
          aria-controls={open ? "account-login-popover" : undefined}
          aria-haspopup="dialog"
          aria-expanded={open}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            fontSize: 18,
            color: COLORS.text,
            bgcolor: "transparent",
            border: "none",
            cursor: "pointer",
            p: 0,
            fontFamily: "inherit",
            "&:hover": { opacity: 0.85 },
          }}
        >
          <PersonOutlinedIcon sx={{ color: COLORS.icon, fontSize: 28 }} />
          Войти в личный кабинет
        </Box>

        <Popover
          id="account-login-popover"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                mt: 1.5,
                width: 320,
                borderRadius: "16px",
                p: "20px 24px 24px",
                boxShadow: "0px 8px 32px rgba(68,107,128,.18)",
                overflow: "visible",
              },
            },
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: COLORS.title,
                  fontSize: 18,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/register")}
              >
                Регистрация
              </Typography>

              <IconButton
                onClick={handleClose}
                size="small"
                sx={{ color: COLORS.placeholder, p: 0.25 }}
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>

            <Box sx={{ borderBottom: `1px solid ${COLORS.border}`, mb: 2.5 }} />

            <Stack spacing={2}>
              <TextField
                fullWidth
                placeholder="Электронный адрес"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    "& fieldset": { borderColor: COLORS.border },
                    "&:hover fieldset": { borderColor: COLORS.icon },
                    "&.Mui-focused fieldset": { borderColor: COLORS.icon },
                  },
                }}
              />

              <TextField
                fullWidth
                placeholder="Пароль"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    "& fieldset": { borderColor: COLORS.border },
                    "&:hover fieldset": { borderColor: COLORS.icon },
                    "&.Mui-focused fieldset": { borderColor: COLORS.icon },
                  },
                }}
              />
            </Stack>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: COLORS.button,
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: "12px",
                  px: 3,
                  "&:hover": { bgcolor: COLORS.buttonHover },
                }}
              >
                Войти
              </Button>

              <Link
                underline="none"
                onClick={() => navigate("/forgotPassword")}
                sx={{
                  color: COLORS.title,
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                }}
              >
                Забыли пароль?
              </Link>
            </Box>
          </Box>
        </Popover>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
      <Box
        component="button"
        type="button"
        onClick={handleOpen}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="menu"
        aria-expanded={open}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.25,
          fontSize: 16,
          fontWeight: 400,
          color: ACCOUNT_MENU_COLORS.text,
          bgcolor: "transparent",
          border: "none",
          cursor: "pointer",
          p: 0,
          fontFamily: "inherit",
          "&:hover": { opacity: 0.85 },
        }}
      >
        <PersonOutlinedIcon sx={{ color: ACCOUNT_MENU_COLORS.icon, fontSize: 26 }} />
        Личный кабинет
      </Box>

      <Popover
        id="account-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              mt: 1.5,
              width: 300,
              borderRadius: "16px",
              boxShadow: "0px 10px 40px rgba(68, 107, 128, 0.16)",
              overflow: "hidden",
              py: 1.25,
            },
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, px: 2.5, pt: 1.5, pb: 2 }}>
          <Avatar
            sx={{
              width: 44,
              height: 44,
              bgcolor: ACCOUNT_MENU_COLORS.avatarBg,
              color: ACCOUNT_MENU_COLORS.icon,
            }}
          >
            <PersonOutlinedIcon sx={{ fontSize: 26 }} />
          </Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                color: ACCOUNT_MENU_COLORS.textDark,
                lineHeight: 1.3,
              }}
            >
              {USER.name}
            </Typography>
            <Typography
              noWrap
              sx={{
                fontSize: 13,
                color: ACCOUNT_MENU_COLORS.email,
                lineHeight: 1.4,
                mt: 0.25,
              }}
            >
              {USER.email}
            </Typography>
          </Box>
        </Box>

        <MenuList dense disablePadding sx={{ px: 1 }}>
          {menuItems.map(({ id, label, icon: Icon }) => (
            <MenuItem
              key={id}
              onClick={() => handleAction(id)}
              sx={{
                borderRadius: "10px",
                py: 1.15,
                px: 1.5,
                gap: 0.5,
                color: ACCOUNT_MENU_COLORS.text,
                "&:hover": { bgcolor: ACCOUNT_MENU_COLORS.hover },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: ACCOUNT_MENU_COLORS.icon }}>
                <Icon sx={{ fontSize: 22 }} />
              </ListItemIcon>
              <ListItemText
                primary={label}
                slotProps={{
                  primary: { sx: { fontSize: 15, fontWeight: 400, color: ACCOUNT_MENU_COLORS.text } },
                }}
              />
            </MenuItem>
          ))}
        </MenuList>

        <Divider sx={{ my: 1, mx: 2.5, borderColor: ACCOUNT_MENU_COLORS.divider }} />

        <MenuList dense disablePadding sx={{ px: 1, pb: 0.5 }}>
          {secondaryItems.map(({ id, label, icon: Icon }) => (
            <MenuItem
              key={id}
              onClick={() => handleAction(id)}
              sx={{
                borderRadius: "10px",
                py: 1.15,
                px: 1.5,
                gap: 0.5,
                color: ACCOUNT_MENU_COLORS.text,
                "&:hover": { bgcolor: ACCOUNT_MENU_COLORS.hover },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: ACCOUNT_MENU_COLORS.icon }}>
                <Icon sx={{ fontSize: 22 }} />
              </ListItemIcon>
              <ListItemText
                primary={label}
                slotProps={{
                  primary: { sx: { fontSize: 15, fontWeight: 400, color: ACCOUNT_MENU_COLORS.text } },
                }}
              />
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </Box>
  );
}