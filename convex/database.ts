import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const postJob = mutation({
  args: {
    title: v.string(),
    company: v.string(),
    location: v.string(),
    type: v.string(),
    salary: v.string(),
    storageId: v.id("_storage"),
    description: v.string(),
    requirements: v.string(),
    responsibilities: v.string(),
    companyLogoUrl: v.string(),
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
      storageId,
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
      storageId,
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
