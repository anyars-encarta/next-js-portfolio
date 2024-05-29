import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from '../data/index';

const ClientsTestimonials = () => {
  return (
    <div id='testimonials' className='py-20'>
      <h1 className='heading'>
        Kind words from
        <span className='text-purple'> satisfied clients</span>
      </h1>
      <div className='flex flex-col items-center'>
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default ClientsTestimonials