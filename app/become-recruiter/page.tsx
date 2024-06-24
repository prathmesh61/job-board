'use client';

import { api } from '@/convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type TFormType = {
  name: string;
  company: string;
  email: string;
  phone: number;

  companyLogoUrl: string;
};
const BecomeRecruiter = () => {
  const generateUploadUrl = useMutation(api.database.generateUploadUrl);
  const createRecruiter = useMutation(api.database.createRecruiterProfile);
  const jobs = useQuery(api.database.getJobs);

  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const { handleSubmit, register } = useForm<TFormType>();

  const onSubmit: SubmitHandler<TFormType> = async (data) => {
    try {
      // Step 1: Get a short-lived upload URL
      const postUrl = await generateUploadUrl();
      // Step 2: POST the file to the URL
      const result = await fetch(postUrl, {
        method: 'POST',
        headers: { 'Content-Type': selectedImage!.type },
        body: selectedImage,
      });
      const { storageId } = await result.json();

      // Step 3: Save the newly allocated storage id to the database
      await createRecruiter({
        name: data.name,
        company: data.company,
        companyLogoUrl: storageId,
        email: data.email,
        phone: Number(data.phone),
      });
      toast.success('successfull');
      router.push('/');
    } catch (error) {
      toast.error('Faild');
      console.log(error);
    }
  };
  return (
    <section>
      <div className='mx-auto my-8 max-w-2xl rounded-lg border bg-white px-8 py-6'>
        <h2 className='mb-4 text-2xl font-medium'>recruiter Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='mb-2 block font-medium text-gray-700'>
              Recruiter name
            </label>
            <input
              type='text'
              placeholder='Recruiter name
.'
              {...register('name', { required: true })}
              className='w-full rounded-lg border border-gray-400 p-2 focus:border-blue-400 focus:outline-none'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block font-medium text-gray-700'>
              company name
            </label>
            <input
              type='text'
              placeholder='
Creative Studios ex.'
              {...register('company', { required: true })}
              className='w-full rounded-lg border border-gray-400 p-2 focus:border-blue-400 focus:outline-none'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              {...register('email', { required: true })}
              placeholder='Email'
              className='w-full rounded-lg border border-gray-400 p-2 focus:border-blue-400 focus:outline-none'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block font-medium text-gray-700'>
              Phone
            </label>
            <input
              type='number'
              {...register('phone', { required: true })}
              placeholder='Phone No.'
              className='w-full rounded-lg border border-gray-400 p-2 focus:border-blue-400 focus:outline-none'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block font-medium text-gray-700'>
              companyLogoUrl
            </label>
            <input
              type='file'
              accept='image/*'
              ref={imageInput}
              onChange={(event) => setSelectedImage(event.target.files![0])}
              disabled={selectedImage !== null}
              className='w-full rounded-lg border border-gray-400 p-2 focus:border-blue-400 focus:outline-none'
              required
            />
          </div>

          <div>
            <button
              type='submit'
              className='rounded-lg bg-primary-100 px-4 py-2 text-white hover:bg-primary-50'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BecomeRecruiter;
