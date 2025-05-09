import React from "react";
import Hero from "../Pages/Hero";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import Page4 from "../Pages/Page4";
import AboutInfoPage from "../Pages/AboutInfoPage";
import EnquiryForm from "../Pages/EnquiryForm";
import IndiaMart from "../Pages/IndiaMart";
import StarProductPage from "./UpcomingPolmide";

export default function Home(){
    return(
       <>
        <Hero/>
        <AboutInfoPage/>
        <EnquiryForm/>
        <Page2/>
        <StarProductPage/>
        <IndiaMart/>
        <Page3/>
        <Page4/>
       </>
    );
}