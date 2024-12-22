import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
    return (
        <nav className='mb-15 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10 font-bold text-2xl' src="" alt="Rabin" />
            </div>
            <div className='m-6 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/rabin-pyakurel-a38438260/"><FaLinkedin /></a>
                <a href="https://github.com/RabinPyakurel"><FaGithub /></a>
                <a href="https://www.instagram.com/the.rabin_"><FaInstagram /></a>
                <a href="https://x.com/Pyakurel2Rabin"><FaSquareXTwitter /></a>
            </div>
        </nav>
    )
}

export default Navbar