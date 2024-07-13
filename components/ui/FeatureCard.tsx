'use client';
import { card } from '@/utils';
import { FeatureIcon } from '@/utils/icon';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';
import { MouseEvent, useEffect, useRef } from 'react';

const FeatureCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const template = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px,black,transparent)`;
  useEffect(() => {
    const updateMouseChange = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rectPosition = cardRef.current?.getBoundingClientRect();
      offsetX.set(e.clientX - rectPosition.x);
      offsetY.set(e.clientY - rectPosition.y);
    };
    window.addEventListener('mousemove', updateMouseChange);
    return () => {
      window.removeEventListener('mousemove', updateMouseChange);
    };
  }, []);

  return (
    <div className='container mx-auto mt-20 flex flex-col items-center justify-center gap-20 px-6 py-16'>
      <h2 className='flex items-center justify-center gap-1 text-2xl font-extrabold sm:text-4xl'>
        Key Features <FeatureIcon className='w-8 object-cover' />
      </h2>

      <div className='relative flex flex-wrap items-center justify-center gap-5'>
        <motion.div
          className='absolute inset-0 border-2 border-base-75'
          ref={cardRef}
          style={{ WebkitMaskImage: template, maskImage: template }}
        ></motion.div>
        {card.map((item) => (
          <div
            className='flex h-[200px] min-w-80 flex-1 flex-col items-center justify-center gap-5 rounded-lg bg-white px-4 py-2 shadow-md'
            key={item.title}
          >
            <h3 className='text-xl font-bold'>{item.title}</h3>
            <p className='text-center text-base font-normal tracking-wide'>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
