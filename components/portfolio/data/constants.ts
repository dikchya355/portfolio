export const landingScrollDistance = 1500;
export const landingExitDistance = 650;
export const minPanelHeight = 8;
export const maxPanelHeight = 34;
export const projectsScrollResistance = 1.2;
export const projectsMotionStart = 0.22;

export const animatedWords = [
  { label: "DESIGN", enterX: "-70%", enterY: "120%" },
  { label: "BUILD", enterX: "-30%", enterY: "120%" },
  { label: "CREATE", enterX: "-58%", enterY: "145%" },
  { label: "PORTFOLIO", enterX: "-42%", enterY: "145%" },
] as const;

export const projectCards = [
  {
    title: "Synergy Workspace",
    category: "Web App",
    description: "A dynamic collaborative workspace with real-time editing, polished drag-drop flows, and responsive views.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Socket.io"],
    gradient: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
    glowColor: "rgba(6, 182, 212, 0.4)",
    mockType: "grid",
  },
  {
    title: "Aura Motion Studio",
    category: "Creative Site",
    description: "An interactive portfolio and asset library site built with custom shaders and fluid motion-led storytelling.",
    tags: ["React", "Three.js", "WebGL", "Framer Motion"],
    gradient: "from-fuchsia-500/20 to-purple-500/20 border-fuchsia-500/30",
    glowColor: "rgba(217, 70, 239, 0.4)",
    mockType: "sphere",
  },
  {
    title: "Chronos Dashboard",
    category: "SaaS Analytics",
    description: "A high-performance monitoring interface for scanning system metrics, databases, and user activity in real-time.",
    tags: ["Next.js", "Recharts", "PostgreSQL", "Tailwind"],
    gradient: "from-amber-500/20 to-rose-500/20 border-amber-500/30",
    glowColor: "rgba(245, 158, 11, 0.4)",
    mockType: "chart",
  },
  {
    title: "Nova Experience",
    category: "Landing Page",
    description: "A clean, high-conversion launch page featuring optimized load times, dark mode aesthetics, and crisp typography.",
    tags: ["HTML5", "CSS Modules", "Vite", "Vanilla JS"],
    gradient: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    glowColor: "rgba(16, 185, 129, 0.4)",
    mockType: "profile",
  },
  {
    title: "Vortex Canvas",
    category: "Interaction Experiment",
    description: "An experimental canvas build exploring physical simulations, magnetic hover grids, and scroll-linked viewport warping.",
    tags: ["Canvas API", "Physics.js", "TypeScript", "CSS Shaders"],
    gradient: "from-rose-500/20 to-violet-500/20 border-rose-500/30",
    glowColor: "rgba(244, 63, 94, 0.4)",
    mockType: "canvas",
  },
] as const;

export type ProjectCard = (typeof projectCards)[number];
