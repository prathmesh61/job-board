'use client';
import React from 'react';
import Job from './Job';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const Jobs = () => {
  const jobListings = useQuery(api.database.getJobs);
  return (
    <section className='lg:grid-rows- container mx-auto grid grid-cols-1 grid-rows-1 gap-3 px-4 py-12 lg:grid-cols-2'>
      {jobListings?.map((item) => <Job key={item._id} job={item} />)}
    </section>
  );
};

export default Jobs;
