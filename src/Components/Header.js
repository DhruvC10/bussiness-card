import React from 'react';
import profile_img from "../images/img2.jpeg";

export default function(){
    return(
    <div className="img-container">
        <img id="profile_img"src={profile_img} width="390px" height="auto"/>
    </div>
    )
}