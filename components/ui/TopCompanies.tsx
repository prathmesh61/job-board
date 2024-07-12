'use client';
import { company } from '@/utils';
import { ArrowRight } from '@/utils/icon';
import { motion } from 'framer-motion';

const TopCompanies = () => {
  return (
    <div className='container mx-auto mt-40 flex h-fit flex-col items-center gap-12 overflow-clip rounded-lg border border-gray-300 bg-white py-16 shadow-md'>
      <h2 className='flex items-center justify-center gap-1 text-4xl font-bold'>
        Startups who used our platform <ArrowRight className='w-7 -rotate-45' />
      </h2>
      <motion.div
        className='mt-5 flex items-center gap-16 pr-16'
        initial={{ translateX: 0 }}
        animate={{ translateX: '-100%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20,
        }}
      >
        {company.map((item) => (
          <img src={item.src} alt={item.alt} className='h-8' key={item.alt} />
        ))}
        {company.map((item) => (
          <img src={item.src} alt={item.alt} className='h-8' key={item.alt} />
        ))}
      </motion.div>
    </div>
  );
};

export default TopCompanies;
