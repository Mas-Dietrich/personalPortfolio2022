import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa';


const Socialmedia = () => (
    <div className="app__social">
        <div>
            <BsLinkedin url="https://www.linkedin.com/in/mason-dietrich-88a890240/" />
        </div>
        <div>
            <FaFacebookF url="https://www.facebook.com/mason.dietrich.18" />
        </div>
        <div>
            <BsInstagram url="https://www.instagram.com/mas_dietrich/" />
        </div>
    </div>
  );

export default Socialmedia
