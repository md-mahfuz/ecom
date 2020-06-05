import React from "react"
import "./Header.css"
import Image from "../asstes";


const Header = () =>{

    return(
        <header  >
            <img src={Image.Background} className={"BackgroundImage"} />

            <nav className={"nav_bar"} >
                <h1 className={"Logo"}>Gavacy</h1>
                {/*<div><a href={"/"} className={"Logo"}>Gavacy</a></div>*/}


                <div className={"toolbar_navigation-item"}>


                    <lu>


                        <li><a href={"/"}>Home</a></li>
                        <li><a href={"/"}>Our Pricing</a></li>
                        <li><a href={"/"}>About Us</a></li>
                        <li><a href={"/"}>Services</a></li>
                        <li><a href={"/"}>News</a></li>
                        <li><a href={"/"}>Page</a></li>
                        <button className={"TrialButton"}>Free Trial</button>

                    </lu>
                </div>

            </nav>

        </header>
    );
};
export default Header;