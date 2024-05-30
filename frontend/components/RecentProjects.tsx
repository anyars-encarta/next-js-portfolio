'use client'

import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { urlFor, client } from '../client';

const RecentProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]';
    
        client.fetch(query)
          .then((data) => {
            setProjects(data);
          });
      }, []);

      console.log(projects);
    return (
        <div id='projects' className='py-20'>
            <h1 className='heading'>
                A small selection of my {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ _id, title, description, imgUrl, tags, codeLink, projectLink }) => (
                    <div key={_id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex flex-col items-center justify-evenly sm:w-[570px] w-[80vw] group'>

                        <PinContainer title={projectLink} href={projectLink}>
                            <a href={projectLink} target='_blank'>
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sh:h-[40vh] h-[30vh] mb-10">
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                        <img src='/bg.png' alt='bg-img' />
                                    </div>
                                    <img
                                        src={urlFor(imgUrl)}
                                        alt={title}
                                        className='z-10 absolute bottom-0'
                                    />
                                </div>

                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                    {description}
                                </p>

                                <div className='flex items-center justify-between mt-7 mb-3'>
                                    <div className='flex items-center'>
                                        {tags.map((tag, i) => (
                                            <div
                                                key={i}
                                                className='relative group'
                                                style={{ transform: `translateX(-${5 * i * 2}px)` }}
                                            >
                                                <div className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center'>
                                                    <img
                                                        src={tag.img}
                                                        alt={tag.label}
                                                        className='p-2'
                                                    />
                                                </div>
                                                {/* <span className='absolute hidden group-hover:block bg-white text-black rounded p-1'>
                                                    {icon.label}
                                                </span> */}
                                            </div>
                                        ))}
                                    </div>

                                    <div className='flex items-center justify-center'>
                                        <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                        <FaLocationArrow className="ms-3 color-[#cbacf9]" />
                                    </div>
                                </div>
                            </a>
                        </PinContainer>
                        {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 p-2 text-sm font-medium text-white backdrop-blur-3xl">
                                <a href={source} target='_blank'>
                                    <FaGithub className='w-8 h-8' />
                                </a>
                            </span>
                        </button> */}

                        {/* Button code */}
                        <button className="inline-flex h-10 w-10 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 opacity-0 group-hover:opacity-100 transition-opacity group-hover:transition-colors duration-300">
                            <a href={codeLink} target='_blank'>
                                <FaGithub className='w-8 h-8' />
                            </a>
                        </button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects;