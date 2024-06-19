"use client";

import { File } from "buffer";
import React, { useRef, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  return (
    <section>
      <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
        <h2 className="text-2xl font-medium mb-4">Job Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Job title
            </label>
            <input
              type="text"
              placeholder="Software Engineer"
              name="title"
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
              name="company"
              placeholder="
Creative Studios ex."
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
              name="location"
              placeholder="New York, NY"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              salary
            </label>
            <input
              type="text"
              name="salary"
              placeholder="$80,000"
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
              name="companyLogoUrl"
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Type</label>
            <select
              name="type"
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
              description
            </label>
            <textarea
              name="description"
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
              name="requirements"
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
              name="responsibilities"
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
