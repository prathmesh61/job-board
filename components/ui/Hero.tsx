import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[50vh]  flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="font-bold text-4xl text-balance text-center ">
        Find & Hire Top 3% of expert on hi’Jobs.
      </h1>
      <p className="text-sm lg:text-lg font-medium max-w-2xl text-center">
        We help you find exciting opportunities around the world. Have the
        latest openings at your fingertips in your inbox.
      </p>
      <div className="w-full flex items-center justify-center gap-2 flex-wrap">
        <input
          type="email"
          required
          className="py-2 px-4  outline-gray-400  rounded-lg placeholder:text-gray-400  sm:max-w-lg w-full"
          placeholder="Your Email"
        />
        <button className="w-full sm:w-fit rounded-lg bg-primary-100 active:bg-primary-50 text-black py-2 px-4">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Hero;
