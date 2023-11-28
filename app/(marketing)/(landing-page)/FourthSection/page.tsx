"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const images = [
  {
    src: "/images/tab-1.webp",
  },
  {
    src: "/images/tab-2.webp",
  },
  {
    src: "/images/tab-3.webp",
  },
];

const FourthSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="  flex flex-col  space-y-10 items-center justify-center px-20 ">
      <div className=" flex py-20">
        <div className=" space-y-6 flex flex-col ">
          <div className="text-gray-800 text-xl px-10">
            DRIVE CONTENT AMONG FANS
          </div>
          <div className="text-4xl w-96 px-10">Manage fans easily</div>
          <div className="text-xl text-gray-600 px-10">
            Connect with the best of fans, make him your advocate, and reward
            him for his earned value.
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-1.webp"
                alt="Image"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Analytics</div>
              <div className="w-96 text-xl text-gray-600">
                See how content works out over time. Learn what worked, what did
                not and how to build on these insights.
              </div>
              <div className="flex ">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4 " />
              </div>
            </div>
          </div>
          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-2.webp"
                alt="Image"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Campaigns</div>
              <div className="w-96 text-xl text-gray-600">
                Make it easy for your team to create campaigns across all
                platforms. Define various stages of campaign and reward fans
                across Instagram, Twitter and other platforms.
              </div>
              <div className="flex ">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4 " />
              </div>
            </div>
          </div>
          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-1.webp"
                alt="Image"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Community</div>
              <div className="w-96 text-xl text-gray-600">
                Community is the well which creators drink from. Extend your
                community among fans and develop one on one relationships with
                them.
              </div>
              <div className="flex ">
                <div className="text-lg">Get Started</div>
                <ArrowRight className="h-6 w-6 ml-4 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
