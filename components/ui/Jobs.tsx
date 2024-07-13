'use client';
import React from 'react';
import Job from './Job';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { ArrowRight } from '@/utils/icon';

const Jobs = () => {
  const jobListings = useQuery(api.database.getJobs);
  return (
    <div className='container mx-auto mt-20 flex h-fit flex-col'>
      <h2 className='flex items-center justify-center gap-1 text-2xl font-extrabold sm:text-4xl'>
        Top Jobs <ArrowRight className='w-7 -rotate-45' />
      </h2>
      <div className='grid grid-cols-1 grid-rows-1 gap-3 px-4 py-12 lg:grid-cols-2 lg:grid-rows-2'>
        {jobListings?.map((item) => <Job key={item._id} job={item} />)}
      </div>
    </div>
  );
};

export default Jobs;
