import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "Instagram",
    label: "Instagram",
  },
  {
    value: "Twitter",
    label: "Twitter",
  },
  {
    value: "YouTube",
    label: "YouTube",
  },
];

export const statuses = [
  {
    value: "Report generated",
    label: "Report generated",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "Completed",
    label: "Completed",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: "Fans",
    value: "Fans",
    icon: ArrowDownIcon,
  },
  {
    label: "Fans+",
    value: "Fans+",
    icon: ArrowRightIcon,
  },
  {
    label: "Universe",
    value: "Universe",
    icon: ArrowUpIcon,
  },
];
