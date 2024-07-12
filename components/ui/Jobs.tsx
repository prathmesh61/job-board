'use client';
import React from 'react';
import Job from './Job';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const Jobs = () => {
  const jobListings = useQuery(api.database.getJobs);
  return (
    <div className='container mx-auto mt-20 grid grid-cols-1 grid-rows-1 gap-3 px-4 py-12 lg:grid-cols-2 lg:grid-rows-2'>
      {jobListings?.map((item) => <Job key={item._id} job={item} />)}
    </div>
  );
};

export default Jobs;
