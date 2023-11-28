"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useState } from "react";

const tabs = [
  {
    name: "The Marketing Mavericks",
    title:
      "Where Data Drives Creativity – Revolutionize Your Marketing with Fandrum+.",
    feature1:
      "Audience Insights: Gain deep understanding of your audience demographics and preferences for targeted campaigns.",
    feature2:
      "Engagement Analytics: Track engagement metrics across platforms to optimize your marketing strategies.",
    feature3:
      "Campaign Integration: Seamlessly integrate and manage cross-platform marketing campaigns from a single dashboard.",
    image: "/images/dashboard.png",
  },
  {
    name: "The Programming Pros",
    title:
      "Scripting Success, One Show at a Time – Elevate Your Programs with Fandrum+.",
    feature1:
      "TRP Predictions: Utilize advanced analytics to forecast and improve television rating points for your programs.",
    feature2:
      "Content Synchronization: Align your programming with audience trends and preferences, enhancing viewer satisfaction.",
    feature3:
      "Brand Alignment: Assess and strengthen the association between programs and sponsoring brands for maximum impact.",
    image: "/images/campaign.png",
  },

  {
    name: "The Social Media Strategists",
    title: "Trendsetters Meet Technology – Master Social Media with Fandrum+.",
    feature1:
      "Trend Analysis: Stay ahead with real-time monitoring of social media trends and audience reactions.",
    feature2:
      "Interaction Optimization: Engage with your audience more effectively with data-driven interaction strategies.",
    feature3:
      "Content Performance Tracking: Monitor and analyze the performance of your social media content across different platforms.",
    image: "/images/dashboard.png",
  },
  {
    name: "The Content Champions",
    title: "Craft, Connect, Conquer – Transform Your Content with Fandrum+.",
    feature1:
      "Creative Analytics: Leverage data insights to refine content creation and distribution strategies.",
    feature2:
      "Collaboration Opportunities: Discover and connect with potential collaborators and sponsors to expand your content’s reach.",
    feature3:
      "Audience Engagement Tools: Utilize advanced tools to measure and enhance audience engagement with your content.",
    image: "/images/campaign.png",
  },
  {
    name: "The Influencer Innovators",
    title: "Influence with Insight – Amplify Your Impact with Fandrum+.",
    feature1:
      "Personal Branding Insights: Understand how your content affects your personal brand and audience perceptions.",
    feature2:
      "Monetization Metrics: Track the financial performance of your content and identify new monetization opportunities.",
    feature3:
      "Network Expansion: Connect with other creators, brands, and media teams to grow your influence and reach.",
    image: "/images/dashboard.png",
  },
];

const SecondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center md:py-20 p-10"
    >
      <div className="flex justify-center items-center">
        <div
          style={{
            transform: `translateY(${isInView ? 0 : 100}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="md:flex md:space-x-20 border-b md:py-10"
        >
          <div className="space-y-10">
            <div className="text-3xl">Early adopters of Fandrum+</div>
            <div className="flex items-center space-x-8 hover:text-blue-500 text-xl">
              See how creators use Fandrum+
              <ArrowRight className="h-6 w-6 ml-4" />
            </div>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid grid-cols-2  md:flex md:space-x-10  items-center   justify-center py-10 "
          >
            <Image
              src="/images/logo/logo-5.svg"
              width={150}
              height={150}
              alt="StarTV"
            />
            <Image
              src="/images/logo/logo-13.svg"
              width={150}
              height={150}
              alt="Shemaroo"
            />
            <Image
              src="/images/logo/logo-8.svg"
              width={150}
              height={150}
              alt="Sri Adhikari Brothers"
            />
            <Image
              src="/images/logo/logo-9.svg"
              width={150}
              height={150}
              alt="Luv Films"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl  md:text-6xl pt-10 py-20 hidden md:block"
      >
        See how Creators use Fandrum+
      </motion.div>
      <div></div>

      <div className="hidden md:flex  items-center justify-center ">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`
        flex 
        justify-center 
        items-center 
        space-x-10
        w-60
        ${
          activeTab === tab
            ? "border-b-4 pt-2 border-gray-500 text-gray-800"
            : "text-muted-foreground"
        }
        
        `}
            onClick={() => setActiveTab(tab)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex text-3xl text-center items-center h-20 w-20 justify-center">
              <div
                className="
                "
              >
                {tab.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display content based on the active tab */}
      <div className="pt-10 hidden md:block">
        {activeTab && (
          <div className="flex   justify-center">
            <div
              style={{ height: "525px", width: "700px" }}
              className="flex-col bg-gray-200 p-10 rounded-md"
            >
              <p className="text-4xl py-10 border-b underline ">
                {activeTab.title}
              </p>
              <div className="space-y-10 items-center justify-center">
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />

                  <li>{activeTab.feature1}</li>
                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />

                  <li>{activeTab.feature2}</li>
                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />

                  <li>{activeTab.feature3}</li>
                </ul>
              </div>
            </div>

            <div
              style={{ height: "525px", width: "700px" }}
              className="
          bg-gradient-to-r from-gray-400 to-gray-100
          items-center justify-center
          rounded-md
          flex

     
      
          
          
          "
            >
              <Image
                src={activeTab.image}
                width={530}
                height={500}
                alt="logo"
                className="
              rounded-md
              
          

          

              
              "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondSection;
