import React from 'react';
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h2>
            <div className="flex flex-wrap">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
                    <div className="relative" style={{ paddingRight: '20px' }}>
                        <img className='rounded-2xl h-80' src={aboutImg} alt="about" />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
                    <p className='my-2 max-w-xl py-6' style={{ paddingLeft: '20px' }}>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
