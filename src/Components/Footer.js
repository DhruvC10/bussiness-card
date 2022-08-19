import React from 'react';
import insta from '../images/InstagramIcon.png';
import git from '../images/GitHubIcon.png';

export default function(){
    return (
        <footer className="footer">
        <a href='https://github.com/DhruvC10' className='links'>
            <img src={git} alt="git"/>    
        </a>

        <a href='https://www.instagram.com/dhruv.2533/' className='links'>
            <img src={insta} alt="insta"/>    
        </a>
        </footer>
    )
}