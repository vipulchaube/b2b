"use client";

import {
  Building2,
  CalendarDays,
  CalendarMinus,
  Check,
  User,
} from "lucide-react";
import React, { useState } from "react";

const FirstSection = () => {
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

  const togglePlan = () => {
    setIsMonthlyPlan(!isMonthlyPlan);
  };

  return (
    <div className="flex flex-col space-y-10  pb-20 items-center justify-center">
      <div className="space-y-6 flex flex-col text-center pt-20 px-10 md:px-0">
        <div className="text-gray-800 text-xl">PRICING</div>
        <div className="text-5xl">Easily organize your work. Start free.</div>
        <div className="text-2xl text-gray-500">
          Access Fandrum features. Subscription required
        </div>
      </div>

      <div className="flex px-10 md:px-0">
        <button
          className={`${
            isMonthlyPlan
              ? "bg-blue-500 text-white "
              : "bg-gray-100 text-gray-600"
          } p-4 rounded-l-lg focus:outline-none w-40 md:w-80`}
          onClick={() => setIsMonthlyPlan(true)}
        >
          <div className="flex items-center justify-center space-x-4">
            <CalendarMinus size={24} />
            <div className="text-2xl">Monthly</div>
          </div>
        </button>
        <button
          className={`${
            !isMonthlyPlan
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          } p-4 rounded-r-lg focus:outline-none w-40 md:w-80`}
          onClick={() => setIsMonthlyPlan(false)}
        >
          <div className="flex items-center justify-center space-x-4">
            <CalendarDays size={24} />
            <div className="text-2xl">Yearly</div>
          </div>
        </button>
      </div>

      <div className="">
        <div
          className={`${
            isMonthlyPlan ? "block" : "hidden"
          } text-center  text-2xl`}
        ></div>
        <div className="md:flex p-10 md:space-x-10 space-y-10 md:space-y-0 items-center justify-center md:w-3/4 md:mx-auto">
          <div className="border-gray-500 p-10 rounded-lg border space-y-8 md:w-1/2 ">
            <div className="text-2xl">Basic</div>
            <div className="text-xl">
              For teams that need to deliver the best in class content.
            </div>

            <div className="text-5xl font-semibold">US $0</div>

            <div className="">
              Per user, per month billed annually US $144.00
            </div>

            <div className="text-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                Contact Sales
              </button>
            </div>

            <div className="text-2xl underline text-center">Purchase Now</div>

            <div>Analyse Content:</div>
            <div className="flex space-y-6 flex-col">
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">Timeline</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">Unlimited free viewers</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">5 Participants</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">5 Channels</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">Unlimited Campaigns</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">10 AI prompts</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">2 Factor Authentication</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">24/7 Customer Support</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
            </div>
          </div>

          <div className="border-purple-500 p-10 rounded-lg border space-y-8 md:w-1/2">
            <div className="text-2xl">Premium</div>
            <div className="text-xl">
              For teams that need to create content plans with confidence.
            </div>
            {isMonthlyPlan ? (
              <div>
                <div className="text-5xl font-semibold"></div>
              </div>
            ) : (
              <div className="text-5xl font-semibold"></div>
            )}

            <div className="">
              Per user, per month billed annually US $144.00
            </div>

            <div className="text-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                Contact Sales
              </button>
            </div>

            <div className="text-2xl underline text-center">Purchase Now</div>

            <div>Everything in Basic, plus :</div>
            <div className="flex space-y-6 flex-col">
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
            </div>
          </div>

          <div className="border-teal-500 p-10 rounded-lg border space-y-8 md:w-1/2">
            <div className="text-2xl">Business</div>
            <div className="text-xl">
              For teams that need to manage content with confidence.
            </div>
            {isMonthlyPlan ? (
              <div>
                <div className="text-5xl font-semibold"></div>
              </div>
            ) : (
              <div className="text-5xl font-semibold"></div>
            )}

            <div className="">
              Per user, per month billed annually US $144.00
            </div>

            <div className="text-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-xl w-full">
                Contact Sales
              </button>
            </div>

            <div className="text-2xl underline text-center">Purchase Now</div>

            <div>Everything in Premium, plus :</div>
            <div className="flex space-y-6 flex-col">
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">Portfolios</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">Content Roadmap</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">Calendar</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">Timeline</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">Charts</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500">Advanced Integrations</div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
              <div className="flex space-x-6">
                <div>
                  <Check size={24} />
                </div>
                <div className="text-gray-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
