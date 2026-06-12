import { SiGithub, SiLeetcode } from "react-icons/si";

import { personal } from "./personal";

export const codingProfiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: personal.leetcode,
    accent: "text-yellow-500",
    stats: [
      { label: "Rating", value: "1,572" },
      { label: "Problems", value: "505" },
      { label: "Contests", value: "5" },
    ],
  },
  {
    name: "GitHub",
    icon: SiGithub,
    url: personal.github,
    accent: "text-neutral-950 dark:text-white",
    stats: [
      { label: "Repositories", value: "7+" },
      { label: "Contributions", value: "250+" },
      { label: "Focus", value: "AI + Full Stack" },
    ],
  },
];
