import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
    return (
        <div id='projects' className='py-20'>
            <h1 className='heading'>
                A small selection of my {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, source, live }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex flex-col items-center justify-evenly sm:w-[570px] w-[80vw] group'>

                        <PinContainer title={live} href={live}>
                            <a href={live} target='_blank'>
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sh:h-[40vh] h-[30vh] mb-10">
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                        <img src='/bg.png' alt='bg-img' />
                                    </div>
                                    <img
                                        src={img}
                                        alt={title}
                                        className='z-10 absolute bottom-0'
                                    />
                                </div>

                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                    {des}
                                </p>

                                <div className='flex items-center justify-between mt-7 mb-3'>
                                    <div className='flex items-center'>
                                        {iconLists.map((icon, i) => (
                                            <div
                                                key={i}
                                                className='relative group'
                                                style={{ transform: `translateX(-${5 * i * 2}px)` }}
                                            >
                                                <div className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center'>
                                                    <img
                                                        src={icon.img}
                                                        alt={icon.label}
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

                        <a href={source} target='_blank'>
                            <FaGithub className='w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects;