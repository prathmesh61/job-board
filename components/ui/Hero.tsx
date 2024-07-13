'use client';

import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

const Hero = () => {
  const [email, setEmail] = useState('');
  const submit = useMutation(api.database.emailSubscribe);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await submit({ email });
      toast('successfull!', {
        icon: '✅',
      });
    } catch (error: any) {
      toast('Fail!', {
        icon: '❌',
      });
      console.log(error.message);
    }
  };

  return (
    <section className='flex h-[50vh] w-full flex-col items-center justify-center gap-6 p-4'>
      <h1 className='text-balance text-center text-2xl font-extrabold sm:text-4xl'>
        Find & Hire Top 3% of expert on Jobify.
      </h1>
      <p className='max-w-2xl text-center text-sm font-medium tracking-wide lg:text-lg'>
        We help you find exciting opportunities around the world. Have the
        latest openings at your fingertips in your inbox.
      </p>
      <form
        className='flex w-full flex-wrap items-center justify-center gap-2'
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type='email'
          required
          value={email}
          className='w-full rounded-lg px-4 py-2 outline-gray-400 placeholder:text-gray-400 sm:max-w-lg'
          placeholder='Your Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type='submit'
          className='w-full rounded-lg bg-primary-100 px-4 py-2 text-black active:bg-primary-50 sm:w-fit'
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Hero;
