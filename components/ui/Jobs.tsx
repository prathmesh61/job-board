"use client";
import React from "react";
import Job from "./Job";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Jobs = () => {
  const jobListings = useQuery(api.database.getJobs);
  return (
    <section className="container mx-auto p-4 grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-1 gap-3">
      {jobListings?.map((item) => <Job key={item._id} job={item} />)}
    </section>
  );
};

export default Jobs;
