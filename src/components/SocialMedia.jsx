import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa';


const Socialmedia = () => (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/mason-dietrich-88a890240/"><BsLinkedin /></a>
        </div>
        <div>
            <a href="https://www.facebook.com/mason.dietrich.18"><FaFacebookF /></a>
        </div>
        <div>
            <a href="https://www.instagram.com/mas_dietrich/"><BsInstagram /></a>
        </div>
    </div>
  );

export default Socialmedia
