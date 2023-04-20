import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSqaure,
    FaGitHubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                 REACT    
            </h1>
            <p>Lo rem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis ipsa dolorum laudantium doloremque. Sed pariatur quia blanditiis exercitationem nesciunt!</p>
        </div>
    </div>
  );
}

export default Footer;