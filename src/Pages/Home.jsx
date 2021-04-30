import React from 'react'
import Background from './../Background.mp4'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div style={{ 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height: "90vh",
        width: "100%"

        }} >
            <h1 className="text"> Learn About Us</h1>

            <video src={Background} id="video" muted loop autoPlay></video>
        </div>
    )
}

export default Home
