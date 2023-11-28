"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";

const components: { title: string; description: string }[] = [
  {
    title: "Insightful Interactions",

    description:
      "Harness the power of data with our Analytics Dashboard, offering deep insights into fan engagement and content performance.",
  },
  {
    title: "Campaign Central",

    description:
      "Streamline your marketing efforts with our Campaign Manager, enabling effective planning, execution, and tracking of your promotional activities.",
  },
  {
    title: "Creator Connect",

    description:
      "Join the Associate Program of your favorite creators, broadcasters, and advertisers to form lucrative partnerships, expanding your network and unlocking new opportunities.",
  },
  {
    title: "TRP Predictor",

    description:
      "Leverage our cutting-edge LLM technology to accurately forecast Television Rating Points, ensuring your content reaches its ideal audience.",
  },
  {
    title: "Brand Harmony Scanner",

    description:
      "Utilize our advanced LLM tool to evaluate and enhance the synergy between your programs and brand associations, optimizing your advertising impact.",
  },
];

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />

                    <div className="mb-2 mt-4 text-lg font-medium">
                      Fandrum+
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Connecting Creators, Amplifying Voices: Unite with Fans on
                      Fandrum+!.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/product" title="Analytics">
                Learn about the content analytics and how to get started.
              </ListItem>
              <ListItem href="/" title="Campaigns">
                How to build a campaign in 60 seconds with Fandrum+.
              </ListItem>
              <ListItem href="/" title="Community">
                Amplify your message; extend your advocates.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Enterprise
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <div>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
