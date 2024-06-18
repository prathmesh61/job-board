import { jobListings } from "@/utils";
import React from "react";
import Job from "./Job";

const Jobs = () => {
  return (
    <section className="container mx-auto p-4 grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-1 gap-3">
      {jobListings.map((item) => (
        <Job key={item.id} job={item} />
      ))}
    </section>
  );
};

export default Jobs;
