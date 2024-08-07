'use client';
import { faq } from '@/utils';
import { AccordianArrowIcon, FAQIcon } from '@/utils/icon';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className='flex w-full cursor-pointer flex-col gap-4 rounded-lg border border-gray-300 bg-white p-4 shadow-md sm:w-[700px]'>
      <div className='flex justify-between' onClick={handleOpen}>
        <h3 className='text-lg font-medium sm:text-xl'>{question}</h3>
        <AccordianArrowIcon className='w-5 object-cover' />
      </div>
      {open && (
        <motion.div
          className='text-sm font-normal tracking-wide sm:text-lg'
          initial={{
            opacity: 0,
            marginTop: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            marginTop: '16px',
            height: 'auto',
          }}
          exit={{
            opacity: 0,
            marginTop: 0,
            height: 0,
          }}
        >
          {answer}
        </motion.div>
      )}
      <AnimatePresence></AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className='container mx-auto mt-20 px-6 py-16'>
      <div className='flex flex-col items-center justify-center gap-16'>
        <h2 className='flex items-center gap-1 text-center text-2xl font-extrabold sm:text-4xl'>
          FAQ <FAQIcon className='w-8 object-cover' />
        </h2>
        <div className='flex flex-col gap-8'>
          {faq.map(({ answer, question }) => (
            <Accordian answer={answer} question={question} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
