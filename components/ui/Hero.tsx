"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { FormEvent, useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const submit = useMutation(api.database.emailSubscribe);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await submit({ email });
      alert("successfull Submit.");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <section className="w-full h-[50vh]  flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="font-bold text-4xl text-balance text-center ">
        Find & Hire Top 3% of expert on Jobify.
      </h1>
      <p className="text-sm lg:text-lg font-medium max-w-2xl text-center">
        We help you find exciting opportunities around the world. Have the
        latest openings at your fingertips in your inbox.
      </p>
      <form
        className="w-full flex items-center justify-center gap-2 flex-wrap"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="email"
          required
          value={email}
          className="py-2 px-4  outline-gray-400  rounded-lg placeholder:text-gray-400  sm:max-w-lg w-full"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full sm:w-fit rounded-lg bg-primary-100 active:bg-primary-50 text-black py-2 px-4"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Hero;
