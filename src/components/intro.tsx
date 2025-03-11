import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-start justify-between gap-6 md:gap-12 pb-10">
      {/* Text Section */}
      <div className="flex-1 mt-4 md:mt-0 ">
        <h1 className="title">
          Hey, I&#39;m <span className="text-primary">Antara Debnath.</span>
        </h1>
        <p className="text-muted-foreground mt-4 sm:text-lg font-light leading-relaxed">
          I&#39;m a <span className="bg-green-300 px-1 rounded dark:bg-green-900">second-year BCom student</span> at{" "}
          <span className="font-semibold">
            Goenka College of Commerce and Business Administration
          </span>
          , passionate about learning and improving my skills.  
          <br />
          <span className="font-semibold text-primary">
            Let&#39;s connect and have a chat!
          </span>
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-[175px] h-[175px] md:w-[200px] md:h-[200px]">
        <Image
          className="rounded-xl grayscale transition-all hover:grayscale-0 hover:shadow-lg"
          src="/images/authors/antara.jpeg"
          alt="Antara Debnath"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
