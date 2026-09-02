import React from 'react'
import AddedToCartToast from "../components/AddedToCartModal"
import Footer from './../components/Footer';
import { Outlet } from 'react-router';
import Navbar from './../components/Navbar';
import Box from '@mui/material/Box';



export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <AddedToCartToast />
    </>
  )
}
