import React, { useEffect } from "react";
import './footer.scss';
import V1 from '../../assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

const Footer=()=>{


    return(
       <section className="footer">
        <div className="videoDiv">
            <video src={V1} loop autoPlay muted type="video/mp4"></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with Us</h2>
                </div>
                <div className="inputDiv flex">
                    <input type="text" placeholder="Enter Email Address" />
                </div>
                <button className="btn flex" type="submit">
                        SEND<FiSend className="icon"/>
                </button>
            </div>
            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                        <MdTravelExplore className="icon"/>Travel
                        </a>
                    </div>
                    <div className="footerPara">
                        Join with Us for More Travelling with affordable prices..
                        
                    </div>
                    <div className="footerSocials flex">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>

                </div>
                <div className="footerLinks grid">
                    <div className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                            <BsChevronRight className="icon"/> 
                            Services
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className="icon"/> 
                            Insurance
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className="icon"/> 
                            Agency
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className="icon"/> 
                            Tourism
                        </li>
                    </div>
                    <div className="linkGroup">
                        <span className="groupTitle">
                            Partners
                        </span>

                        <li className="footerList flex">
                            <BsChevronRight className="icon"/> 
                            Car Rentals
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className="icon"/> 
                            Hotels
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className="icon"/> 
                            Hostels
                        </li>
                        <li className="footerList flex">
                            <BsChevronRight className="icon"/> 
                            TripAdvisor
                        </li>
                    </div>
                    
                </div>
            </div>
        </div>
       </section>
    ) 
    
}
export default Footer