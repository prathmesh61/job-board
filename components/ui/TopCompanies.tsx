'use client';
import { company } from '@/utils';
import { ArrowRight } from '@/utils/icon';
import { motion } from 'framer-motion';

const TopCompanies = () => {
  return (
    <div className='mx-auto mt-20 flex h-fit max-w-screen-2xl flex-col items-center gap-12 overflow-clip rounded-lg border border-gray-300 bg-white px-6 py-16 shadow-md'>
      <h2 className='flex items-center justify-center gap-1 text-center text-2xl font-extrabold sm:text-4xl'>
        Startups who used our platform <ArrowRight className='w-7 -rotate-45' />
      </h2>
      <motion.div
        className='mt-5 flex items-center gap-16 pr-16'
        initial={{ translateX: 0 }}
        animate={{ translateX: '-100%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 40,
        }}
      >
        {company.map((item) => (
          <img
            src={item.src}
            alt={item.alt}
            className='h-5 sm:h-8'
            key={item.alt}
          />
        ))}
        {company.map((item) => (
          <img src={item.src} alt={item.alt} className='h-8' key={item.alt} />
        ))}
      </motion.div>
    </div>
  );
};

export default TopCompanies;
