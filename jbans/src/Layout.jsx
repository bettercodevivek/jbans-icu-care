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
// import React from "react";
// import { FaReact } from "react-icons/fa";

// export default function App() {
//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
//       <FaReact className="w-24 h-24"></FaReact>
//       <h1 className="text-3xl font-bold text-red-600">Error 503</h1>
//       <p className="text-lg text-gray-700">Service Unavailable</p>
//       <p className="text-gray-500 mt-2">Please contact the administrator.</p>
//     </div>
//   );
// }
