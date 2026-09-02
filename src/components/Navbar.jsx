import logo from "../assets/logo.png";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import AccountMenu from "../components/Modal1";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { NavLink, useNavigate } from "react-router";
import Catalog from "./DropDown";

const navLinks = [
  { to: "/", label: "Главная" },
  { to: "/blog", label: "Блог" },
  { to: "/wholesales", label: "Оптовым клиентам" },
  { to: "/sales", label: "Акции" },
  { to: "/delivery", label: "Оплата и доставка" },
  { to: "/contact", label: "Контакты" },
];

export default function Navbar() {
  const [cartCount] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.length;
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="max-w-[1500px] mx-auto">

      <div className="flex items-center justify-between gap-4 py-4 px-4 sm:py-6 sm:px-8 lg:py-[30px] lg:px-[60px] border-b border-[#2235403d]">

        <IconButton
          onClick={() => setMobileOpen(true)}
          className="lg:!hidden animate-[menuIn_.7s_ease]"
          sx={{ color: "#446B80" }}
        >
          <MenuIcon />
        </IconButton>

        <img
          src={logo}
          alt="logo"
          className="logo w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] lg:w-[80px] lg:h-[80px] shrink-0 animate-[logoIn_1s_ease]"
        />

        <div className="hidden lg:block animate-[fadeIn_.8s_ease]">
          <Catalog />
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-[455px] h-[44px] lg:h-[48px] rounded-[12px] bg-[#F4F8FA] overflow-hidden animate-[searchIn_1s_ease]">

          <div className="flex items-center gap-[15px] px-[15px] flex-1">
            <SearchIcon sx={{ color: "#446B80" }} />

            <input
              type="search"
              placeholder="Я хочу купить..."
              className="outline-none bg-transparent w-full text-[#223540]"
            />
          </div>

          <Button
            sx={{
              backgroundColor: "#7FC9F0",
              color: "white",
              height: "100%",
              minWidth: "80px",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "#6bb8df",
              },
            }}
          >
            Найти
          </Button>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 lg:gap-[30px] ml-auto md:ml-0 animate-[fadeIn_1.2s_ease]">


          <IconButton
            onClick={() => setSearchOpen((s) => !s)}
            className="md:!hidden"
            sx={{ color: "#7FC9F0" }}
          >
            <SearchIcon />
          </IconButton>

          <div className="hidden sm:block">
            <AccountMenu />
          </div>

          <button
            onClick={() => navigate("/cart")}
            className="text-[16px] lg:text-[18px] text-[#446B80] flex items-center gap-2 lg:gap-[15px] bg-transparent border-none cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="relative">

              <ShoppingCartOutlinedIcon
                sx={{
                  color: "#7FC9F0",
                  fontSize: { xs: 28, lg: 35 },
                }}
              />

              <div className="absolute -top-2 -right-2 w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] rounded-full bg-[#446B80] text-white flex items-center justify-center text-[11px] lg:text-[12px] animate-[cartPulse_2s_infinite]">
                {cartCount}
              </div>

            </div>

            <span className="hidden sm:inline">
              Корзина
            </span>
          </button>

        </div>
      </div>

      {searchOpen && (
        <div className="flex md:hidden items-center mx-4 my-3 h-[44px] rounded-[12px] bg-[#F4F8FA] overflow-hidden animate-[searchDown_.4s_ease]">

          <div className="flex items-center gap-[10px] px-[15px] flex-1">

            <SearchIcon sx={{ color: "#446B80" }} />

            <input
              type="search"
              placeholder="Я хочу купить..."
              className="outline-none bg-transparent w-full text-[#223540]"
              autoFocus
            />

          </div>

          <Button
            sx={{
              backgroundColor: "#7FC9F0",
              color: "white",
              height: "100%",
              minWidth: "70px",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "#6bb8df",
              },
            }}
          >
            Найти
          </Button>

        </div>
      )}

      <div className="hidden lg:flex items-center justify-between py-[30px] px-[60px]">

        <p className="text-[#446B80] custom animate-[fadeIn_1s_ease]">
          Онлайн гипермаркет <br />
          товаров для детей
        </p>

        <div className="flex gap-[30px] text-[18px] text-[#446B80] opacity-80">

          {navLinks.map(({ to, label }, index) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${isActive ? "text-[#7FC9F0]" : "text-[#446B80]"} transition-all duration-300 hover:text-[#7FC9F0] hover:-translate-y-1`
              }
              style={{
                animation: `navIn .5s ease ${index * 0.1}s both`,
              }}
            >
              {label}
            </NavLink>
          ))}

        </div>

        <div className="flex items-center gap-[10px] animate-[fadeIn_1.2s_ease]">

          <PlaceOutlinedIcon sx={{ color: "#7FC9F0" }} />

          <p className="text-[#446B80] text-[18px]">
            Город:
            <span className="text-[#7FC9F0] ml-[5px]">
              Москва
            </span>
          </p>

        </div>
      </div>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              p: 3,
            },
          },
        }}
      >

        <Box className="flex items-center justify-between mb-4">

          <img
            src={logo}
            alt="logo"
            className="w-[55px] h-[55px]"
          />

          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "#446B80" }}
          >
            <CloseIcon />
          </IconButton>

        </Box>

        <Box className="mb-4">
          <AccountMenu />
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box className="mb-2">
          <Catalog variant="inline" />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box className="flex flex-col gap-4 text-[16px] text-[#446B80]">

          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `${isActive ? "text-[#7FC9F0]" : "text-[#446B80]"} transition-all duration-300 hover:translate-x-2`
              }
            >
              {label}
            </NavLink>
          ))}

        </Box>

        <Divider sx={{ my: 2 }} />

        <Box className="flex items-center gap-[10px]">

          <PlaceOutlinedIcon sx={{ color: "#7FC9F0" }} />

          <p className="text-[#446B80] text-[16px]">
            Город:
            <span className="text-[#7FC9F0] ml-[5px]">
              Москва
            </span>
          </p>

        </Box>

      </Drawer>

      <style>
        {`
          @keyframes logoIn {
            from {
              opacity: 0;
              transform: scale(.7) rotate(-10deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes searchIn {
            from {
              opacity: 0;
              transform: scale(.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes searchDown {
            from {
              opacity: 0;
              transform: translateY(-15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes navIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes menuIn {
            from {
              opacity: 0;
              transform: translateX(-15px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes cartPulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.15);
            }
          }
        `}
      </style>

    </nav>
  );
}