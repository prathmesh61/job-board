'use client';
import Recruiter from '@/components/ui/Recruiter';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import React from 'react';

type Props = {};

const FindRecruiter = (props: Props) => {
  const recruiter = useQuery(api.database.getRecruiters);

  return (
    <section className='container mx-auto my-8 rounded-lg border px-8 py-6'>
      <div className='grid grid-cols-1 grid-rows-1 gap-4 lg:grid-cols-2 lg:grid-rows-2'>
        {recruiter?.map((item) => <Recruiter key={item._id} item={item} />)}
      </div>
    </section>
  );
};

export default FindRecruiter;
