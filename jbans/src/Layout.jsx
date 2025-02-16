import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Components/Header";


export default function Layout(){

    return(
              <>
              <ScrollRestoration/>
              <Header/>
                <Navbar/>
                <Outlet/>
                <Footer/>
                </>

    );
}