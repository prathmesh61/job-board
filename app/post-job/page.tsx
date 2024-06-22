"use client";

import { api } from "@/convex/_generated/api";
import { create } from "@/convex/database";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type TFormType = {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string;
  responsibilities: string;
  companyLogoUrl: string;
  recruiter: string;
};
const page = () => {
  const generateUploadUrl = useMutation(api.database.generateUploadUrl);
  const posteJob = useMutation(api.database.create);
  const recruiters = useQuery(api.database.getRecruiters);

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
        method: "POST",
        headers: { "Content-Type": selectedImage!.type },
        body: selectedImage,
      });
      const { storageId } = await result.json();

      // Step 3: Save the newly allocated storage id to the database
      await posteJob({
        title: data.title,
        company: data.company,
        companyLogoUrl: storageId,
        description: data.description,
        location: data.location,
        requirements: data.requirements,
        responsibilities: data.responsibilities,
        salary: data.salary,
        type: data.type,
        recruiter: data.recruiter,
      });
      toast.success("successfull");
      router.push("/");
    } catch (error) {
      toast.error("Faild");
      console.log(error);
    }
  };
  return (
    <section>
      <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
        <h2 className="text-2xl font-medium mb-4">Job Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Job title
            </label>
            <input
              type="text"
              placeholder="Software Engineer"
              {...register("title", { required: true })}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              company name
            </label>
            <input
              type="text"
              placeholder="
Creative Studios ex."
              {...register("company", { required: true })}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              location
            </label>
            <input
              type="text"
              {...register("location", { required: true })}
              placeholder="New York, NY"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              salary/yr
            </label>
            <input
              type="text"
              {...register("salary", { required: true })}
              placeholder=" ₹50,00,00"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              companyLogoUrl
            </label>
            <input
              type="file"
              accept="image/*"
              ref={imageInput}
              onChange={(event) => setSelectedImage(event.target.files![0])}
              disabled={selectedImage !== null}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Type</label>
            <select
              {...register("type", { required: true })}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            >
              <option value="">Select type</option>
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
              <option value="remote">remote</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Recruiter
            </label>
            <select
              {...register("recruiter", { required: true })}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            >
              <option value="">Select recruiter</option>
              {recruiters?.length! > 0 ? (
                recruiters?.map((item) => (
                  <option value={item._id} key={item._id}>
                    {item.name}
                  </option>
                ))
              ) : (
                <option value="no-recruiter">No recruiter</option>
              )}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              description
            </label>
            <textarea
              {...register("description", { required: true })}
              placeholder="description"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              rows={5}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              requirements
            </label>
            <textarea
              {...register("requirements", { required: true })}
              placeholder="requirements of job"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              rows={5}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              responsibilities
            </label>
            <textarea
              {...register("responsibilities", { required: true })}
              placeholder="responsibilities"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              rows={5}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary-100 text-white px-4 py-2 rounded-lg hover:bg-primary-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
