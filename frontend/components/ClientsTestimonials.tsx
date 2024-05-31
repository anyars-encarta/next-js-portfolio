'use client'

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies } from '../data/index';
import { urlFor, client } from '../client';
import Loading from "./Loading";

const ClientsTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = '*[_type == "testimonials"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
        setLoading(false);
      });
  }, []);

  return (
    <div id='testimonials' className='py-20'>
      <h1 className='heading'>
        Kind words from
        <span className='text-purple'> satisfied clients</span>
      </h1>

      {loading ? (
        <Loading type='testimonials' />
      ) : (
        <div className='flex flex-col items-center mt-10'>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />

          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 mt-8'>
            {companies.map((company) => (
              <div
                key={company.id}
                className='flex md:max-w-60 max-w-32 gap-2'
              >
                <img
                  src={company.img}
                  alt={company.name}
                  className='md:w-10 w-5'
                />

                <img
                  src={company.nameImg}
                  alt={company.name}
                  className='md:w-24 w-20'
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ClientsTestimonials