import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// motations
export const create = mutation({
  args: {
    title: v.string(),
    company: v.string(),
    location: v.string(),
    type: v.string(),
    salary: v.string(),
    description: v.string(),
    requirements: v.string(),
    responsibilities: v.string(),
    companyLogoUrl: v.id("_storage"),
    recruiter: v.string(),
  },
  handler: async (ctx, args) => {
    const {
      company,
      companyLogoUrl,
      description,
      location,
      requirements,
      responsibilities,
      salary,
      title,
      type,
      recruiter,
    } = args;
    const job = await ctx.db.insert("jobs", {
      company,
      companyLogoUrl,
      description,
      location,
      requirements,
      responsibilities,
      salary,
      title,
      type,

      recruiter,
    });
    return job;
  },
});
export const createRecruiterProfile = mutation({
  args: {
    name: v.string(),
    company: v.string(),
    email: v.string(),
    phone: v.number(),

    companyLogoUrl: v.id("_storage"),
  },
  async handler(ctx, args) {
    const { company, companyLogoUrl, email, name, phone } = args;
    const recruiter = await ctx.db.insert("recruiters", {
      company,
      companyLogoUrl,
      email,
      name,
      phone,
    });
    return recruiter;
  },
});
export const emailSubscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const newEmail = await ctx.db.insert("users", { email: args.email });
    return newEmail;
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
export const getBlogImage = query({
  args: { jobId: v.string() },
  handler: async (ctx, args) => {
    const job = await ctx.db
      .query("jobs")
      .filter((q) => q.eq(q.field("_id"), args.jobId))
      .first();
    return await ctx.storage.getUrl(job?.companyLogoUrl!);
  },
});

// Query

export const getJobs = query(async (ctx) => {
  return await ctx.db.query("jobs").take(10);
});
export const getRecruiters = query(async (ctx) => {
  return await ctx.db.query("recruiters").take(10);
});
// Return the last 100 tasks in a given task list.
export const getjob = query({
  args: { jobId: v.id("jobs") },
  handler: async (ctx, args) => {
    const job = await ctx.db
      .query("jobs")
      .filter((q) => q.eq(q.field("_id"), args.jobId))
      .first();
    return job;
  },
});
