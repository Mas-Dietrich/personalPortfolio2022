import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa';
import { Link } from 'react-router';

const Socialmedia = () => (
    <div className="app__social">
        <div>
            <BsLinkedin>
                <Link to="https://www.facebook.com/mason.dietrich.18"></Link>
            </BsLinkedin>
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  );

export default Socialmedia
