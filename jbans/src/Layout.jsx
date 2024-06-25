import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";


export default function Layout(){

    return(
              <>
              <ScrollRestoration/>
                <Navbar/>
                <Outlet/>
                <Footer/>
                </>

    );
}