'use client';

import React, { useEffect, useState } from 'react'
import { Button } from './ui/MovingBorders'
import { urlFor, client } from '../client';
import Loading from "./Loading";
import { Experience } from './Types';

const Experiences = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const query = '*[_type == "experiences"]';

        client.fetch(query)
            .then((data: Experience[]) => {
                setExperiences(data);
                setLoading(false)
            });
    }, []);

    return (
        <div id='testimonials' className='py-20'>
            <h1 className='heading'>
                My
                <span className='text-purple'> Work Experience</span>
            </h1>

            {loading ? (
                <Loading type='work experiences' />
            ) : (
                <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                    {
                        experiences.map((experience) => (
                            experience.works.map((work) => (
                                <Button
                                    key={work._id}
                                    duration={Math.floor(Math.random() * 10000) + 10000}
                                    borderRadius="1.75rem"
                                    className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                                >
                                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                                        <img
                                            src={urlFor(work.thumbnail).toString()}
                                            alt={work.name}
                                            className='lg:w-32 md:w-20 w-16'
                                        />

                                        <div className='lg:ms-5'>
                                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                                {work.name}
                                            </h1>
                                            <h2 className='text-start text-white-200 text-sm md:text-xl font-semibold'>
                                                {work.company}
                                            </h2>
                                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                                {work.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Button>
                            ))
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default Experiences