import { Heart } from "@/utils/icon";
import React from "react";

type Props = {
  job: TJobListing;
};

const Job = ({ job }: Props) => {
  return (
    <article className="bg-white px-6 py-4 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-4">
        <p className="w-12 h-12 rounded-full bg-base-75"></p>
        <div className="flex flex-col ">
          <h3 className="font-medium text-sm ">{job.company}</h3>
          <h2 className="font-bold text-xl ">{job.title}</h2>
          <div className="flex items-center gap-1">
            <span className="text-gray-500 text-sm">Type: {job.type}</span>,
            <span className="text-gray-500  text-sm">{job.location}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-end">
        <Heart className="w-5 h-5 active:fill-red-500 fill-gray-300 " />
        <h2 className="text-gray-500 text-sm">{job.postedDate}</h2>
      </div>
    </article>
  );
};

export default Job;
