import { useState } from "react";
import PageNavbar from "../components/navbar";
import donate from "../assets/donate.jpg";
import secondDonate from "/src/assets/donate.webp";
import pepper from "/src/assets/pepper-7200198.jpg"
import photovoltaic from "/src/assets/photovoltaic-system-2742302_1280.jpg"
import Tanzania from "/src/assets/tanzania-278361.jpg"
import "../components/Donation.css"


const Donation = () => {
    return (
        <>
         <PageNavbar />
         <div className="donation-main-container">
            <div className="first-donation-container">
                <img src={donate} alt="donate"  className="donate-img"/>
            </div>
         </div>
        </>
    )
    
}

export default Donation