'use client'

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { urlFor, client } from '../client';
import Loading from "./Loading";
import { Brand } from './Types';

const ClientsTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = '*[_type == "testimonials"]';
    const queryBrands = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      });

      client.fetch(queryBrands)
      .then((data: Brand[]) => {
        setBrands(data);
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
            {brands.map((brand) => (
              <div
                key={brand._id}
                className='flex md:max-w-60 max-w-32 gap-2'
              >
                <img
                  src={urlFor(brand.imgUrl).toString()}
                  alt={brand.name}
                  className='md:w-10 w-5'
                />

                <img
                  src={urlFor(brand.nameImgUrl).toString() || ''}
                  alt={brand.name}
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