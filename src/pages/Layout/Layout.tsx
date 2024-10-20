import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout:React.FC = () => {
    return (
     <div className="layout">
        <Navbar />
        
        <Footer />
     </div>   
    )
}

export default Layout