import React from "react"
import "../App.css"
import { Link, useNavigate } from "react-router-dom"
import { Icon } from "@mui/material";


export default function LandingPage(){

    const router = useNavigate();

    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    
                    <h1 onClick={() => {
                        router("/ad23")
                    }} style={{cursor: "pointer"}}>ECHOvidROOM</h1>
                </div>
                <div className="navlist">
                    <p onClick={() => {
                        router("/ad23")
                    }}><span style={{border: "2px solid white", padding: "2px", "borderRadius": "6px" }}>Join as Guest</span></p>
                    <p onClick={() => {
                        router("/auth")
                    }} ><span style={{border: "2px solid white", padding: "2px", "borderRadius": "6px"  }}>Register</span></p>
                    <div onClick={() => {
                        router("/auth")
                    }} role='button'>
                        <p><span style={{border: "2px solid white", padding: "2px", "borderRadius": "6px"  }}>Login</span></p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div className="">
                    <h1><span style={{color: "#FF9839"}}>Connect</span> with your Loved Ones</h1>
                    <p>Feel the Connection with <b>EchoVidRoom</b></p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt=""/>
                </div>
            </div>
        </div>
    )
}