'use client';
import Recruiter from '@/components/ui/Recruiter';
import { api } from '@/convex/_generated/api';
import { ArrowRight } from '@/utils/icon';
import { useQuery } from 'convex/react';
import React from 'react';

const FindRecruiter = () => {
  const recruiter = useQuery(api.database.getRecruiters);

  return (
    <section className='container mx-auto my-8 flex flex-col items-center gap-10 rounded-lg border px-8 py-6'>
      <h2 className='flex items-center justify-center gap-1 text-2xl font-extrabold sm:text-4xl'>
        Top Recruiters <ArrowRight className='w-7 -rotate-45' />
      </h2>
      <div className='grid grid-cols-1 grid-rows-1 gap-4 lg:grid-cols-2 lg:grid-rows-2'>
        {recruiter?.map((item) => <Recruiter key={item._id} item={item} />)}
      </div>
    </section>
  );
};

export default FindRecruiter;
