import { card } from '@/utils';
import { FeatureIcon } from '@/utils/icon';

const FeatureCard = () => {
  return (
    <div className='container mx-auto mt-20 flex flex-col items-center justify-center gap-5 px-6 py-16'>
      <h2 className='flex items-center justify-center gap-1 text-4xl font-extrabold'>
        Key Features <FeatureIcon className='w-8 object-cover' />
      </h2>
      <div className='flex flex-wrap items-center justify-center gap-10'>
        {card.map((item) => (
          <div className='flex h-[200px] min-w-80 flex-1 flex-col items-center justify-center gap-5 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-md'>
            <h3 className='text-xl font-bold'>{item.title}</h3>
            <p className='text-center text-base font-normal tracking-wide'>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
