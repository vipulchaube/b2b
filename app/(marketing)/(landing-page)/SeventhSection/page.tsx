import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SeventhSection = () => {
  return (
    <div className="flex flex-col md:py-20 md:p-40 p-10 bg-[#E5E4E2]  ">
      <div className=" space-y-6 flex flex-col md:px-20 pb-10 ">
        <div className=" text-xl ">Get started easily</div>
        <div className="text-4xl ">Prioritize fan-first content</div>
        <div className="text-xl ">
          Understand what moves the fans. Why they associate with content and
          how to make the insights a part of the content strategy.
        </div>
      </div>
      <div className="md:flex md:px-20 md:space-x-10 space-y-10 md:space-y-0 ">
        <div className="rounded-sm   bg-white p-8">
          <Image
            src="/images/dashboard.png"
            alt="Picture of the author"
            width={400}
            height={400}
            className=" w-96"
          />

          <div className="text-3xl pt-8">Start with a template</div>

          <div className="pt-10 flex justify-between">
            <div className="text-xl">View Templates</div>

            <ArrowRight className="h-6 w-6 ml-4 " />
          </div>
        </div>

        <div className="rounded-sm   bg-white p-8">
          <Image
            src="/images/campaign.png"
            alt="Picture of the author"
            width={400}
            height={400}
            className=" w-96"
          />

          <div className="text-3xl pt-8">See Campaign Central in action</div>

          <div className="pt-10 flex justify-between">
            <div className="text-xl">View demo</div>

            <ArrowRight className="h-6 w-6 ml-4 " />
          </div>
        </div>

        <div className="rounded-sm   bg-white p-8">
          <Image
            src="/images/dashboard.png"
            alt="Picture of the author"
            width={400}
            height={400}
            className=" w-96"
          />

          <div className="text-3xl pt-8">Talk with our team</div>

          <div className="pt-10 flex justify-between">
            <div className="text-xl">Contact Us</div>

            <ArrowRight className="h-6 w-6 ml-4 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
