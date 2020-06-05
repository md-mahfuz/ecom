import React from "react"
import Image from "./asstes"
import {Header} from "./components"
import "../About/components/main.css"



const About = () =>{
    return(
        <div>
            <Header/>

            <div className={"m"} >
                <div>
                    <h1>Our Goal</h1>
                    <p>
                        Among the entire methods <br/>
                        billboard advertising is the most<br/>
                        sort after method. Lorem ipsum <br/>
                        dolor sit amet, consectetur<br/>
                        adipisicing elit, sed do eiusmod <br/>
                        tempor incididunt ut labore et<br/>
                        dolore magna aliqua aliquip ex<br/>
                        ea commodo consequat
                    </p>
                    <div className={"title"}>
                        <h4 style={{color:"#00aeef"}}>N</h4>
                        <p className={"title1"}>
                            Ut iaculis massa sed turpis aliquet, at facilisis arcu maximus.

                        </p>
                    </div>
                    <div className={"textTitle"}>
                        <h4 style={{color:"#00aeef"}}>N</h4>
                        <p className={"text1"}>

                            Nulla a est dapibus turpis cursus auctor vitae eu ligula.

                        </p>
                    </div>
                    <div className={"textTitle1"}>
                        <h4 style={{color:"#00aeef"}}>N</h4>
                        <p  className={"text1"}>

                            Etiam lobortis mauris a libero dictum vulputate.

                        </p>
                    </div>

                </div>
                <img src={Image.image}/>
            </div>

            <div>
                <h1 className={"title-member"}>Our Member</h1>
                <div className={"our-member"}>
                    <div className={"our-member-item"}>
                        <img src={Image.IMG3}/>
                        <h4 className={"name-title"}>John Smith</h4>
                        <h4 className={"name-work"}> SEO EXPERT</h4>

                    </div>
                    <div className={"our-member-item1"}>
                        <img src={Image.IMG}/>
                        <h4 className={"name-title"}> Marry Jane</h4>
                        <h4 className={"name-work"}> SEO EXPERT</h4>

                    </div>
                    <div className={"our-member-item1"}>
                        <img src={Image.IMG2}/>
                        <h4 className={"name-title"}>Amber Ares</h4>
                        <h4 className={"name-work"}> SEO EXPERT</h4>

                    </div>
                    <div className={"our-member-item1"}>
                        <img src={Image.IMG1}/>
                        <h4 className={"name-title"}>King Sam</h4>
                        <h4 className={"name-work"}> SEO EXPERT</h4>

                    </div>
                </div>
            </div>

            <div className={"hiring-section"}>
                <img src={Image.people} className={"hiring-image"}/>
                <div className={"hiring-apply"}>
                    <h1 className={"hiring-text"}>We’re Hiring!</h1>
                    <h5 className={"hiring-text1"}>
                        Interested to working with our Team?
                    </h5>
                    <button className={"Apply-button"}>Apply Now</button>

                </div>
            </div>

            <div className={"subscribe-section"}>
                <div  >
                    <h2>Subscribe For Newsletter</h2>
                    <h5>Subscribe to our newsletter and we will bring<br/>
                        you the latest news.</h5>
                </div>

                <div className={"email-section"}>
                    <input
                        type={"email"}
                        placeholder={"Enter Your Email Address"}
                        className={"email-input"}
                    />
                    <button>Subscribe</button>

                </div>
            </div>







        </div>
    );
};
export default About;