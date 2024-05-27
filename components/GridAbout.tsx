import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data';

const GridAbout = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default GridAbout