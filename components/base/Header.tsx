import Link from 'next/link';
import React from 'react';
import { ArrowRight, LogoIcon } from '@/utils/icon';
const Header = () => {
  return (
    <header className='flex w-full flex-col items-center justify-center'>
      <div className='flex w-full items-center justify-center bg-base-100 py-2 text-white'>
        <span className='flex items-center gap-1 text-sm font-medium'>
          Get job that’s would right for you. <ArrowRight className='h-5 w-5' />
        </span>
      </div>
      <nav className='flex w-full items-center justify-around bg-white py-4'>
        <Link
          href={'/'}
          className='flex items-center gap-1 text-2xl font-extrabold'
        >
          <LogoIcon className='h-8 w-8' /> Jobify
        </Link>
        <div className='flex items-center gap-8'>
          <Link href={'/'} className='text-lg text-black'>
            Find Job
          </Link>
          <Link href={'/find-recruiter'} className='text-lg text-black'>
            Find Recruiter
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
