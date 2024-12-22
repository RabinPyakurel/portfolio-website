import React from 'react'
import { DiJavascript1 } from 'react-icons/di'
import { FaJava, FaPhp } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Skills = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Skills</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-stone-800 p-4">
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </div>
                <div className="rounded-2xl border-4 border-stone-800 p-4">
                    <TbBrandNextjs className='text-7xl' />
                </div>
                <div className="rounded-2xl border-4 border-stone-800 p-4">
                    <DiJavascript1 className='text-7xl text-yellow-400' />
                </div>
                <div className="rounded-2xl border-4 border-stone-800 p-4">
                    <FaJava className='text-7xl' />
                </div>
                <div className="rounded-2xl border-4 border-stone-800 p-4">
                    <FaPhp className='text-7xl text-cyan-400' />
                </div>
                <div className="rounded-2xl border-4 border-stone-800 p-4">
                    <SiMysql className='text-7xl ' />
                </div>
            </div>
        </div>
    )
}

export default Skills