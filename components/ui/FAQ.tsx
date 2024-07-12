'use client';
import { faq } from '@/utils';
import { AccordianArrowIcon, FAQIcon } from '@/utils/icon';
import { useState } from 'react';

const Accordian = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className='flex w-[700px] cursor-pointer flex-col gap-4 rounded-lg border border-gray-300 bg-white p-4 shadow-md'>
      <div className='flex justify-between' onClick={handleOpen}>
        <h3 className='text-xl font-medium'>{question}</h3>
        <AccordianArrowIcon className='w-5 object-cover' />
      </div>
      {open && <p className='text-lg font-normal tracking-wide'>{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className='container mx-auto mt-20 px-10 py-16'>
      <div className='flex flex-col items-center justify-center gap-16'>
        <h2 className='flex items-center gap-1 text-center text-4xl font-extrabold'>
          FAQ <FAQIcon className='w-8 object-cover' />
        </h2>
        <div className='flex flex-col gap-8'>
          {faq.map(({ answer, question }) => (
            <Accordian answer={answer} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;