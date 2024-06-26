import { api } from '@/convex/_generated/api';
import { Heart } from '@/utils/icon';
import { useQuery } from 'convex/react';
import TimeAgo from 'timeago-react';

type Props = {
  job: TJobListing;
};

const Job = ({ job }: Props) => {
  const companyLogo = useQuery(api.database.getJobImage, { jobId: job._id });

  return (
    <article className='flex items-center justify-between rounded-lg bg-white px-6 py-4'>
      <div className='flex items-center gap-4'>
        <img
          src={`${companyLogo}`}
          alt={job.company}
          className='h-12 w-12 rounded-full bg-transparent object-cover'
        />
        <div className='flex flex-col'>
          <h3 className='text-sm font-medium'>{job.company}</h3>
          <h2 className='text-xl font-bold'>{job.title}</h2>
          <div className='flex items-center gap-1'>
            <span className='text-sm text-gray-500'>Type: {job.type}</span>,
            <span className='text-sm text-gray-500'>{job.location}</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-end gap-4'>
        <Heart className='h-5 w-5 fill-gray-300 active:fill-red-500' />
        <h2 className='text-sm text-gray-500'>
          <TimeAgo datetime={job._creationTime} locale='in' />
        </h2>
      </div>
    </article>
  );
};

export default Job;
