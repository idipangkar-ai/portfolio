import chatbotImg from "../assets/images/chatbot.jpeg";
import dashImg from "../assets/images/dash.jpeg";
import saasImg from "../assets/images/saas.jpeg";

export const featuredProjects = [
  {
    id: "kuthako",
    eyebrow: "Flagship Product",
    title: "KuthaKo",
    summary:
      "The flagship response to a larger belief: communication should begin with trust, context, and consent.",
    story:
      "The insight came before the product: existing communication tools often protect the sender's ability to reach people more than the receiver's ability to choose. This case study explores the system designed in response.",
    image: chatbotImg,
    href: "https://www.kuthako.io",
    status: "Live MVP",
    year: "2026",
    stack: ["Consent graph", "QR access", "Privacy-first UX"],
    metrics: ["Mutual consent", "User control", "No cold access"],
  },
  {
    id: "insight-dashboard",
    eyebrow: "Product System",
    title: "Consent-Based Access Model",
    summary:
      "The underlying product logic for deciding who can initiate contact, when access is granted, and how users stay in control.",
    story:
      "Most communication products treat reachability as a default. This model treats it as a permission layer: scan, request, approve, revoke, and communicate only when both sides agree.",
    image: dashImg,
    href: "/projects",
    status: "System Design",
    year: "2026",
    stack: ["Access rules", "Trust model", "User agency"],
    metrics: ["Request first", "Approve access", "Revoke anytime"],
  },
  {
    id: "cloud-ops",
    eyebrow: "Founder Vision",
    title: "Human-Centric Communication",
    summary:
      "A long-term product direction for communication that respects boundaries without making people harder to reach.",
    story:
      "The goal is not to make another inbox. It is to design a new social contract for digital communication, where trust, context, and consent shape the first message.",
    image: saasImg,
    href: "/projects",
    status: "Product Thesis",
    year: "Long term",
    stack: ["Privacy philosophy", "Product strategy", "Behavior design"],
    metrics: ["Less intrusion", "More intent", "Better trust"],
  },
];

export const capabilities = [
  {
    title: "Product Thinking",
    description:
      "Starts with the human problem before the feature set: what behavior should change, what trust model matters, and why the product deserves to exist.",
  },
  {
    title: "Systems Thinking",
    description:
      "Turns beliefs into rules, flows, and constraints so privacy and consent become part of the architecture, not just the copy.",
  },
  {
    title: "Founder-Led Execution",
    description:
      "Moves from thesis to product: shaping the experience, building the system, testing assumptions, and owning the outcome.",
  },
  {
    title: "Human-Centric Design",
    description:
      "Builds technology around dignity, context, and boundaries instead of optimizing only for reach, speed, or engagement.",
  },
];

export const productQuestions = [
  {
    question: "Why are QR codes single-use?",
    problem: "Forwarded or shared QR codes could create unintended access paths.",
    decision: "Each QR can only be successfully used once.",
    principle: "Access should be intentional, not transferable.",
  },
  {
    question: "Why do connection requests expire?",
    problem: "Consent becomes stale when time, context, or intent changes.",
    decision: "Requests automatically expire after a limited period.",
    principle: "Permission is contextual and time-sensitive.",
  },
  {
    question: "Why allow only one pending request?",
    problem: "Multiple simultaneous requests can create pressure and make access feel harder to refuse.",
    decision: "Only one active pending request is allowed at a time.",
    principle: "Protect user attention and reduce social pressure.",
  },
  {
    question: "Why separate visibility from communication?",
    problem: "Discovery often becomes unwanted access when seeing someone also means being able to message them.",
    decision: "Viewing a profile does not grant messaging rights.",
    principle: "Visibility is not permission.",
  },
  {
    question: "Why must reconnection require a new QR?",
    problem: "Consent loses meaning if removed connections can be restored without a fresh signal.",
    decision: "Removed connections cannot be automatically restored.",
    principle: "Trust should be renewable, not permanent.",
  },
];

export const timeline = [
  {
    period: "Now",
    title: "Founder journey",
    organization: "Building from first principles",
    detail:
      "Building at the intersection of product, systems, and privacy with a focus on communication that respects the person receiving contact.",
  },
  {
    period: "Belief",
    title: "Visibility is not permission",
    organization: "Communication should require context",
    detail:
      "Seeing someone's profile, number, or identity should not automatically grant the right to interrupt them.",
  },
  {
    period: "System",
    title: "Consent as infrastructure",
    organization: "Access, approval, revocation",
    detail:
      "The platform treats consent as a system layer: request access, approve intentionally, communicate with context, and revoke control when needed.",
  },
  {
    period: "Vision",
    title: "Build from first principles",
    organization: "Product ownership over feature accumulation",
    detail:
      "The work is guided by a long-term question: what would communication look like if it were designed around trust before growth?",
  },
];

export const technologies = [
  "Consent-first UX",
  "QR connection flows",
  "Privacy architecture",
  "Product strategy",
  "Trust systems",
  "Access control",
  "Behavior design",
  "Founder-led execution",
  "Communication design",
  "Systems thinking",
  "MVP validation",
  "Long-term product vision",
];

export const principles = [
  "Visibility is not permission",
  "Trust should be part of the architecture",
  "Access should be intentional and reversible",
  "Privacy should be the default, not a setting",
];
