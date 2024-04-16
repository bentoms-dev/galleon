import React from "react";

import hero from '../assets/video/hero.webm'
import logo from '../assets/images/GalleonLogo.png';


function VideoHero() {
    return (
        <>
            <img src={ logo } alt="GALLEON" class="logo" />
            <video autoPlay muted loop id='video'>
                <source src={ hero } type="video/webm"></source>
            </video>
        </>
    )
}

export default VideoHero;
