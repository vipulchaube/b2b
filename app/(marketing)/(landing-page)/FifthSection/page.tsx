import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ArrowRight } from "lucide-react";

const FifthSection = () => {
  return (
    <div className="  md:flex md:space-x-20 py-20 space-y-10 items-center justify-center bg-[#28282B] ">
      <div className=" space-y-6 flex flex-col text-gray-200 md:w-1/3 px-10 ">
        <div className=" text-xl ">
          Fandrum+ Journey: Unleashing Potential, Step by Step
        </div>
        <div className="text-4xl ">
          Navigate Your Path to Success – Discover, Engage, Enhance, Achieve
          with Fandrum+.
        </div>
        <div className="text-xl ">
          Embark on a transformative journey with Fandrum+. Our four-stage
          process is designed to guide content creators, broadcasters, and
          advertisers through a seamless pathway of discovery, engagement,
          enhancement, and achievement. Unlock the full potential of your
          creative and marketing endeavors with our tailored approach.
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-blue-400">
              Start Your Discovery
            </AccordionTrigger>
            <AccordionContent className="border-b border-blue-500">
              Begin by exploring the vast array of tools and features on
              Fandrum+. Understand how our platform can align with your goals
              and elevate your strategies.
              <div className="flex text-blue-400 pt-4">
                <div className="text-lg">Get Started</div>

                <ArrowRight className="h-6 w-6 ml-4 " />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-yellow-300">
              Engage Now
            </AccordionTrigger>
            <AccordionContent className="border-b border-yellow-300">
              Dive into active participation with our platform. Engage with the
              analytics, campaign manager, and associate program to connect more
              deeply with your audience.
              <div className="flex text-yellow-400 pt-4">
                <div className="text-lg">Get Started</div>

                <ArrowRight className="h-6 w-6 ml-4 " />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-green-400">
              Enhance Your Strategy
            </AccordionTrigger>
            <AccordionContent>
              Utilize our advanced LLM tools to refine your approach. Predict
              TRP, check program-brand association, and tailor your content to
              resonate more effectively with your target audience.
              <div className="flex text-green-400 pt-4">
                <div className="text-lg">Get Started</div>

                <ArrowRight className="h-6 w-6 ml-4 " />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-red-400">
              Achieve Your Goals
            </AccordionTrigger>
            <AccordionContent>
              Reap the rewards of your efforts. Track your success through our
              dashboard and continue to grow your reach, engagement, and impact
              in the digital world.
              <div className="flex text-red-400 pt-4">
                <div className="text-lg">Get Started</div>

                <ArrowRight className="h-6 w-6 ml-4 " />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Image
        src="/images/tab-6.webp"
        alt="Image"
        width={700}
        height={700}
        className="p-10 "
      />
    </div>
  );
};

export default FifthSection;
