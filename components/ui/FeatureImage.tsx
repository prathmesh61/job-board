'use client';
import { SearchIcon } from '@/utils/icon';
import Image from 'next/image';
import React, { useRef } from 'react';
import imageSrc from '@/public/jobify-img.svg';
import { motion, useScroll, useTransform } from 'framer-motion';
const FeatureImage = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end end'],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <section className='container mx-auto mt-16 flex flex-col items-center px-6 py-16'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='flex items-center gap-1 text-center text-2xl font-extrabold sm:text-4xl'>
          Your job search starts here
          <SearchIcon className='w-8 object-cover' />
        </h2>
        <p className='max-w-2xl text-center text-sm font-normal tracking-wide sm:text-lg'>
          We’re connecting the best remote talent with the best remote
          companies.Opportunity is wherever you are
        </p>
      </div>
      <motion.div
        className='flex w-full items-center justify-center'
        style={{
          transformPerspective: '500px',
          rotateX: rotate,
          opacity,
        }}
        ref={imgRef}
      >
        <Image
          alt='Feature-desktop-image'
          className='w-fit object-cover'
          src={imageSrc}
          width='100'
          height='100'
        />
      </motion.div>
    </section>
  );
};

export default FeatureImage;
