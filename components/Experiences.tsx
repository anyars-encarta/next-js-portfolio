import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experiences = () => {
    return (
        <div id='testimonials' className='py-20'>
            <h1 className='heading'>
                My
                <span className='text-purple'> Work Experience</span>
            </h1>
            <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                {workExperience.map((experience) => (
                    <Button
                        key={experience.id}
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                    >
                        <img
                            src={experience.thumbnail}
                            alt={experience.title}
                            className='lg:w-32 md:w-20 w-16'
                        />
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experiences