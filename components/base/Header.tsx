import Link from "next/link";
import React from "react";
import { ArrowRight, LogoIcon } from "@/utils/icon";
const Header = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center bg-base-100 text-white py-2">
        <span className="font-medium text-sm flex items-center gap-1">
          Get job that’s would right for you. <ArrowRight className="w-5 h-5" />
        </span>
      </div>
      <nav className="w-full flex items-center justify-around bg-white py-4">
        <span className="font-extrabold text-2xl flex items-center gap-1">
          <LogoIcon className="w-8 h-8" /> Jobify
        </span>
        <div className="flex items-center gap-8">
          <Link href={"/find-job"} className="text-lg text-black">
            Find Job
          </Link>
          <Link href={"/find-recruiter"} className="text-lg text-black">
            Find Recruiter
          </Link>
          <Link
            href={"/post-job"}
            className="text-lg text-black bg-primary-100 inline-block px-3 py-1 rounded-md"
          >
            Post Job
          </Link>
          <Link
            href={"/become-recruiter"}
            className="text-lg text-black bg-primary-100 inline-block px-3 py-1 rounded-md"
          >
            Become Recruiter
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
