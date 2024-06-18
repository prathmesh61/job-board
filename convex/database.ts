import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const emailSubscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const newEmail = await ctx.db.insert("users", { email: args.email });
    return newEmail;
  },
});
