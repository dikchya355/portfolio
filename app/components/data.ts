export type IconName =
  | "book"
  | "bolt"
  | "compass"
  | "layers"
  | "mail"
  | "pen"
  | "search"
  | "send"
  | "spark";

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export const focusCards = [
  {
    icon: "search" as const,
    title: "Discovery",
    description:
      "Careful observation, reading, and note-making to understand the question before shaping an answer.",
  },
  {
    icon: "pen" as const,
    title: "Creative Work",
    description:
      "Simple, polished visual ideas for student projects, presentations, and personal experiments.",
  },
  {
    icon: "bolt" as const,
    title: "Fast Learning",
    description:
      "Turning new topics into clear summaries, useful drafts, and thoughtful next steps.",
  },
];

export const projects = [
  {
    icon: "book" as const,
    title: "Academic Notes",
    tags: ["Learning", "Writing", "Study"],
    description:
      "A clean system for organizing class notes, research summaries, and reflections into a readable learning archive.",
  },
  {
    icon: "compass" as const,
    title: "Community Ideas",
    tags: ["Research", "People"],
    description:
      "Small research prompts and observation studies focused on student life, local stories, and everyday experiences.",
  },
  {
    icon: "layers" as const,
    title: "Creative Portfolio",
    tags: ["Design", "Web"],
    description:
      "A growing collection of layouts, written pieces, and digital sketches with a soft editorial direction.",
  },
];

export const process = [
  {
    icon: "search" as const,
    step: "01",
    title: "Explore",
    description: "Gather references, questions, and useful context.",
  },
  {
    icon: "compass" as const,
    step: "02",
    title: "Structure",
    description: "Turn scattered ideas into a clear outline and direction.",
  },
  {
    icon: "pen" as const,
    step: "03",
    title: "Create",
    description: "Draft, design, test, and refine the strongest version.",
  },
  {
    icon: "spark" as const,
    step: "04",
    title: "Polish",
    description: "Make the final work simple, readable, and memorable.",
  },
];
