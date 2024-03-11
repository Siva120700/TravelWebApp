import React,{useState} from "react";
import './navbar.scss';
// import './navbar.css'

import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar=()=>{
    const [active, setActive]=useState('navBar')
    // Functions to taggle Navbar
    const showNav=() =>{
        setActive('navBar activeNavbar')
    }
// function to remove navbar
    const removeNav=() =>{
        setActive('navBar')
    }
    return(
        <section className='navBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon"/>
                        Travel</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem"> 
                            <a href="/home" className="navLink">Home</a>
                        </li>
                        <li className="navItem"> 
                            <a href="#" className="navLink">Package</a>
                        </li>
                        <li className="navItem"> 
                            <a href="#" className="navLink">Shops</a>
                        </li>
                        <li className="navItem"> 
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItem"> 
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItem"> 
                            <a href="#" className="navLink">contact us</a>
                        </li>
                        <li className="navItem"> 
                            <button className="btn">
                                <a href="#"> Book Now </a>
                            </button>
                        </li>
                        
                        
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>

        </section>
    ) 
    
}
export default Navbar