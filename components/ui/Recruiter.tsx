'use client';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import React from 'react';

type Props = {
  item: TRecruiter;
};

const Recruiter = ({ item }: Props) => {
  const companyLogo = useQuery(api.database.getRecruiterCompanyImage, {
    Id: item._id,
  });
  //   console.log(companyLogo);

  return (
    <article className='flex flex-wrap items-center justify-between gap-4 bg-white px-6 py-4'>
      <div className='flex items-center gap-5'>
        <img
          src={`${companyLogo}`}
          alt={item.company}
          className='h-20 w-20 object-cover'
        />
        <div className='flex flex-col gap-y-1'>
          <span className='text-sm font-medium'>{item.company}</span>
          <h2 className='text-2xl font-extrabold'>{item.name}</h2>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <span className='text-sm font-medium'>Email - {item.email}</span>
        <span className='text-sm font-medium'>Phone - {item.phone}</span>
      </div>
    </article>
  );
};

export default Recruiter;
