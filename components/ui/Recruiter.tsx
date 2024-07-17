'use client';
import { api } from '@/convex/_generated/api';
import { EmailIcon, PhoneIcon } from '@/utils/icon';
import { useQuery } from 'convex/react';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  item: TRecruiter;
};

const Recruiter = ({ item }: Props) => {
  const companyLogo = useQuery(api.database.getRecruiterCompanyImage, {
    Id: item._id,
  });
  //   console.log(companyLogo);

  return (
    <motion.div
      initial={{ y: '-80px' }}
      animate={{ y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className='flex flex-wrap items-center justify-between gap-4 border border-gray-300 bg-white px-6 py-4 shadow-md'
    >
      <div className='flex items-center gap-5'>
        <img
          src={`${companyLogo}`}
          alt={item.company}
          className='h-20 w-20 object-cover'
        />
        <div className='flex flex-col gap-y-1'>
          <span className='text-sm font-medium'>{item.company}</span>
          <h2 className='text-xl font-extrabold sm:text-2xl'>{item.name}</h2>
        </div>
      </div>
      <div className='flex flex-wrap items-center gap-4'>
        <span className='flex items-center gap-1 text-center text-sm font-medium'>
          <EmailIcon className='h-4' /> {item.email}
        </span>
        <span className='flex items-center gap-1 text-center text-sm font-medium'>
          <PhoneIcon className='h-4' /> {item.phone}
        </span>
      </div>
    </motion.div>
  );
};

export default Recruiter;
