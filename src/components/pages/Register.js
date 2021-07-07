import React from 'react'
import './Register.css'
import discord from './imgs/discord.png'
const Register = () => {
    return (
        <>
        <h1 className="heading4">Register</h1>
            <div className="social">
                <div className="discord">
                    <img src={discord} alt="Discord png" />
                    <a href="https://discord.gg/ZRByU25r" target="_blanck">Join Our Discord Server</a>
                </div>
            </div>
        <div className="google_form">
            <iframe title="hehe" src="https://docs.google.com/forms/d/e/1FAIpQLSczLHdaDEGDdkcATe4E9cSb-NVW-DPiSKMLmC5tcthXtYXeTg/viewform?embedded=true" width="640" height="538" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
            </>
    )
}

export default Register
