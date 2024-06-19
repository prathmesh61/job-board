import { mutation } from "./_generated/server";
import { v } from "convex/values";

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
    });
    return job;
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
