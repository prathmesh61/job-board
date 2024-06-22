"use client";

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type TFormType = {
  name: string;
  company: string;
  email: string;
  phone: number;
  job: string;

  companyLogoUrl: string;
};
const page = () => {
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
        method: "POST",
        headers: { "Content-Type": selectedImage!.type },
        body: selectedImage,
      });
      const { storageId } = await result.json();

      // Step 3: Save the newly allocated storage id to the database
      await createRecruiter({
        name: data.name,
        company: data.company,
        companyLogoUrl: storageId,
        email: data.email,
        jobId: data.job,
        phone: Number(data.phone),
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
        <h2 className="text-2xl font-medium mb-4">recruiter Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Recruiter name
            </label>
            <input
              type="text"
              placeholder="Recruiter name
."
              {...register("name", { required: true })}
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
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="number"
              {...register("phone", { required: true })}
              placeholder="Phone No."
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
            <label className="block text-gray-700 font-medium mb-2">Job</label>
            <select
              {...register("job", { required: true })}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            >
              <option value="">Select type</option>
              {jobs?.map((item) => (
                <option value={item._id} key={item._id}>
                  {item.title}
                </option>
              ))}
            </select>
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
