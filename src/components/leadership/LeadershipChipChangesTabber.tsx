"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/icons";

type Domain = {
  name: string;
  count: number;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

type LearningPath = {
  label: string;
  cardTitle: string;
  cardDescription: string;
  image: string;
  imageAlt: string;
  href: string;
};

const DOMAINS: Domain[] = [
  {
    name: "Executive & Strategic Leadership",
    count: 12,
    description:
      "Strategic thinking, executive influence and board readiness for senior managers, directors and the C-suite leading the enterprise.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Executive and strategic leadership",
    href: "#catalog",
  },
  {
    name: "First-Time & Frontline Manager Development",
    count: 14,
    description:
      "Delegation, feedback and the critical first 90 days for newly promoted supervisors making the move from doing the work to leading the people who do it.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "First-time and frontline manager development",
    href: "#catalog",
  },
  {
    name: "Team Leadership & Coaching",
    count: 11,
    description:
      "High-performing teams, coaching, mentoring and conflict resolution for managers building engaged, accountable teams day to day.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Team leadership and coaching",
    href: "#catalog",
  },
  {
    name: "Change, Transformation & Innovation",
    count: 9,
    description:
      "Leading restructures, digital transformation and post-merger integration while keeping people engaged through the change.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Change, transformation and innovation",
    href: "#catalog",
  },
  {
    name: "Emotional Intelligence & Ethical Leadership",
    count: 8,
    description:
      "Self-awareness, empathy and values-led decision-making that turn capable managers into leaders their teams trust.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Emotional intelligence and ethical leadership",
    href: "#catalog",
  },
  {
    name: "Inclusive & Global Leadership",
    count: 7,
    description:
      "Inclusive, cross-cultural and global leadership for people-managers running diverse teams across regions and markets.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Inclusive and global leadership",
    href: "#catalog",
  },
  {
    name: "Leadership Communication & Influence",
    count: 10,
    description:
      "Strategic communication, persuasion, executive storytelling and diplomacy for leaders who need to carry the room.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "Leadership communication and influence",
    href: "#catalog",
  },
  {
    name: "Decision-Making & Critical Thinking",
    count: 8,
    description:
      "Structured decision-making, data-driven judgement and problem-solving for leaders accountable for high-stakes calls.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "Decision-making and critical thinking",
    href: "#catalog",
  },
  {
    name: "Resilience & Leading Through Uncertainty",
    count: 7,
    description:
      "Resilience, VUCA leadership and crisis response for leaders sustaining engagement through restructures and disruption.",
    image: "/images/cyber/hero-bfsi-pros.jpg",
    imageAlt: "Resilience and leading through uncertainty",
    href: "#catalog",
  },
  {
    name: "Industry & Functional Leadership",
    count: 9,
    description:
      "Sector and function-specific leadership across retail, supply chain, safety and project environments with domain context.",
    image: "/images/cyber/hero-industry-manufacturing.jpg",
    imageAlt: "Industry and functional leadership",
    href: "#catalog",
  },
  {
    name: "Core Leadership Foundations",
    count: 10,
    description:
      "Foundational leadership, accountability and ownership for managers at every tier building durable leadership habits.",
    image: "/images/cyber/hero-blockchain-it.jpg",
    imageAlt: "Core leadership foundations",
    href: "#catalog",
  },
];

const LEARNING_PATHS: LearningPath[] = [
  {
    label: "NEW MANAGER",
    cardTitle: "New Manager Development Path",
    cardDescription:
      "From first-time manager essentials to delegation, feedback and team leadership, build the IC-to-manager ladder newly promoted leaders need in their first year.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "New manager development",
    href: "#catalog",
  },
  {
    label: "SENIOR LEADER",
    cardTitle: "Senior Leader Development Path",
    cardDescription:
      "Executive influence, strategic thinking and enterprise decision-making, prepare directors and senior managers to step up to the next tier of leadership.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Senior leader development",
    href: "#catalog",
  },
  {
    label: "TEAM COACH",
    cardTitle: "Team Coaching & Mentoring Path",
    cardDescription:
      "Coaching, mentoring, conflict management and high-performing teams, equip people-managers to build a coaching culture across their teams.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "Team coaching and mentoring",
    href: "#catalog",
  },
  {
    label: "CHANGE LEADER",
    cardTitle: "Change & Transformation Leader Path",
    cardDescription:
      "Change leadership, digital transformation and agile leadership, lead restructures, mergers and pivots while keeping teams engaged and productive.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Change and transformation leader",
    href: "#catalog",
  },
  {
    label: "INCLUSIVE LEADER",
    cardTitle: "Inclusive & Global Leader Path",
    cardDescription:
      "Inclusive leadership, cross-cultural awareness and global team management, lead diverse teams across regions with fairness and impact.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "Inclusive and global leader",
    href: "#catalog",
  },
  {
    label: "RESILIENT LEADER",
    cardTitle: "Resilient Leader Path",
    cardDescription:
      "Resilience, VUCA leadership and crisis response, sustain your own and your team's performance through uncertainty and disruption.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Resilient leader",
    href: "#catalog",
  },
  {
    label: "EXECUTIVE TRACK",
    cardTitle: "Executive & Board Readiness Track",
    cardDescription:
      "Strategic leadership, board membership and succession readiness for senior leaders and the C-suite preparing for board-level roles.",
    image: "/images/cyber/hero-bfsi-pros.jpg",
    imageAlt: "Executive and board readiness",
    href: "#catalog",
  },
];

const TOTAL_TRAININGS = 115;

const DELIVERY_MODES = [
  "Virtual ILT",
  "On-site",
  "Off-site",
  "Blended",
  "Multi-language",
  "Global",
];

type Trainer = {
  name: string;
  role: string;
  location: string;
  rating: string;
  reviews: number;
  trainingSince: number;
  experience: number;
  bio: string;
  certs: string[];
  image: string;
};

const TRAINERS: Trainer[] = [
  {
    name: "Akash Iyer",
    role: "Executive & strategic leadership facilitator",
    location: "Bengaluru, India",
    rating: "4.9",
    reviews: 411,
    trainingSince: 2014,
    experience: 14,
    bio: "Former business-unit head turned executive coach, developing senior managers and directors on strategic thinking, executive influence and board readiness for enterprise leadership cohorts.",
    certs: ["ICF PCC", "Executive Coaching", "Strategic Leadership"],
    image: "/images/cyber/trainer-akash.jpg",
  },
  {
    name: "Priya Krishnan",
    role: "First-time & frontline manager facilitator",
    location: "Pune, India",
    rating: "4.9",
    reviews: 327,
    trainingSince: 2013,
    experience: 13,
    bio: "Former people-operations leader at a Tier-1 Indian bank. Runs new-manager and frontline-leadership programs covering delegation, feedback and the first 90 days across BFSI and SaaS clients.",
    certs: ["ICF ACC", "Manager Development", "DDI Facilitator"],
    image: "/images/cyber/trainer-devi.jpg",
  },
  {
    name: "Sarah Mitchell",
    role: "Change & transformation leadership facilitator",
    location: "London, United Kingdom",
    rating: "4.8",
    reviews: 264,
    trainingSince: 2012,
    experience: 16,
    bio: "Change-leadership specialist with delivery across UK, EU and Middle East enterprises. Specialises in leading restructures, post-merger integration and digital transformation while keeping teams engaged.",
    certs: ["Prosci Change", "Transformation", "Leadership Coaching"],
    image: "/images/cyber/trainer-deepak.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Team leadership & coaching facilitator",
    location: "Singapore",
    rating: "4.9",
    reviews: 298,
    trainingSince: 2013,
    experience: 14,
    bio: "Team-development architect serving APAC manufacturers and SaaS leaders. Trains people-managers on high-performing teams, coaching, mentoring and conflict resolution across closed-cohort programs.",
    certs: ["ICF PCC", "Team Coaching", "Conflict Management"],
    image: "/images/cyber/trainer-sudha.jpg",
  },
];

const TRAINER_STATS = [
  { stat: "1,500+", label: "Vetted leadership facilitators" },
  { stat: "12+ yrs", label: "Average industry experience" },
  { stat: "11", label: "Leadership domains covered" },
  { stat: "4.8 ★", label: "Average learner rating" },
];

type Program = {
  domain: string;
  category: string;
  title: string;
  duration: string;
  delivery: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

const DELIVERY = "Instructor-led (On-site/Virtual)";

const PROGRAMS: Program[] = [
  // Executive & Strategic Leadership
  {
    domain: "Executive & Strategic Leadership",
    category: "Executive",
    title: "Executive Leadership Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Strategic thinking, executive influence and enterprise decision-making for senior leaders and the C-suite running the business.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Executive leadership training",
    href: "https://www.edstellar.com/course/executive-leadership-training",
  },
  {
    domain: "Executive & Strategic Leadership",
    category: "Executive",
    title: "Leadership at the Peak Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Top-team leadership, enterprise strategy and stakeholder influence for executives operating at the most senior tier.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Leadership at the peak training",
    href: "https://www.edstellar.com/course/leadership-at-the-peak-training",
  },
  {
    domain: "Executive & Strategic Leadership",
    category: "Executive",
    title: "Visionary Leadership and Strategic Thinking Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Set direction, think strategically and turn long-range vision into executable plans your senior team can rally behind.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Visionary leadership and strategic thinking training",
    href: "https://www.edstellar.com/course/visionary-leadership-and-strategic-thinking-training",
  },
  {
    domain: "Executive & Strategic Leadership",
    category: "Executive",
    title: "Strategies for Effective Board Membership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Board readiness, governance and contribution for senior leaders preparing for board and committee responsibilities.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Strategies for effective board membership training",
    href: "https://www.edstellar.com/course/strategies-for-effective-board-membership-training",
  },

  // First-Time & Frontline Manager Development
  {
    domain: "First-Time & Frontline Manager Development",
    category: "New Managers",
    title: "First Time Managers Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "The delegation, feedback and team-leadership foundations newly promoted managers need in their first 90 days.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "First time managers training",
    href: "https://www.edstellar.com/course/first-time-managers-training",
  },
  {
    domain: "First-Time & Frontline Manager Development",
    category: "New Managers",
    title: "Frontline Leaders Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Practical people-leadership skills for supervisors and team leads managing day-to-day frontline operations.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Frontline leaders training",
    href: "https://www.edstellar.com/course/frontline-leaders-training",
  },
  {
    domain: "First-Time & Frontline Manager Development",
    category: "New Managers",
    title: "Step Up to Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Help high-potential individual contributors make the transition from doing the work to leading the people who do it.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Step up to leadership training",
    href: "https://www.edstellar.com/course/step-up-to-leadership-training",
  },
  {
    domain: "First-Time & Frontline Manager Development",
    category: "New Managers",
    title: "Leadership Essentials Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Core management essentials covering motivation, accountability and communication for managers early in the role.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Leadership essentials training",
    href: "https://www.edstellar.com/course/leadership-essentials-training",
  },

  // Team Leadership & Coaching
  {
    domain: "Team Leadership & Coaching",
    category: "Team Leadership",
    title: "Leading High Performing Teams Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Build trust, alignment and accountability to turn capable groups into consistently high-performing teams.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Leading high performing teams training",
    href: "https://www.edstellar.com/course/leading-high-performing-teams-training",
  },
  {
    domain: "Team Leadership & Coaching",
    category: "Team Leadership",
    title: "Coaching and Mentoring Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Equip managers with coaching and mentoring skills that develop people and build a lasting coaching culture.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Coaching and mentoring training",
    href: "https://www.edstellar.com/course/coaching-and-mentoring-training",
  },
  {
    domain: "Team Leadership & Coaching",
    category: "Team Leadership",
    title: "Delegation Skills Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Delegate with clarity and confidence, freeing leaders to focus on higher-value work while growing their teams.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Delegation skills training",
    href: "https://www.edstellar.com/course/delegation-skills-training",
  },
  {
    domain: "Team Leadership & Coaching",
    category: "Team Leadership",
    title: "Conflict Management Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Navigate and resolve team conflict constructively, protecting engagement and keeping collaboration on track.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Conflict management training",
    href: "https://www.edstellar.com/course/conflict-management-training",
  },

  // Change, Transformation & Innovation
  {
    domain: "Change, Transformation & Innovation",
    category: "Transformation",
    title: "Transformational Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead change, inspire teams and drive organisational transformation through periods of disruption.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Transformational leadership training",
    href: "https://www.edstellar.com/course/transformational-leadership-training",
  },
  {
    domain: "Change, Transformation & Innovation",
    category: "Transformation",
    title: "Digital Transformation Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead digital change programs, align teams to new operating models and turn technology shifts into adoption.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Digital transformation leadership training",
    href: "https://www.edstellar.com/course/digital-transformation-leadership-training",
  },
  {
    domain: "Change, Transformation & Innovation",
    category: "Transformation",
    title: "Leading Innovation Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Foster a culture of innovation, unlock new ideas and lead teams to experiment, learn and ship improvements.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Leading innovation training",
    href: "https://www.edstellar.com/course/leading-innovation-training",
  },
  {
    domain: "Change, Transformation & Innovation",
    category: "Transformation",
    title: "Agile Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead with agility, empower teams and adapt quickly to changing priorities across fast-moving environments.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "Agile leadership training",
    href: "https://www.edstellar.com/course/agile-leadership-training",
  },

  // Emotional Intelligence & Ethical Leadership
  {
    domain: "Emotional Intelligence & Ethical Leadership",
    category: "EQ & Ethics",
    title: "Emotional Intelligence in Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Self-awareness, empathy and relationship management that turn capable managers into leaders people trust.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Emotional intelligence in leadership training",
    href: "https://www.edstellar.com/course/emotional-intelligence-in-leadership-training",
  },
  {
    domain: "Emotional Intelligence & Ethical Leadership",
    category: "EQ & Ethics",
    title: "Servant Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead by serving your team first, building trust, engagement and accountability through a people-first approach.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Servant leadership training",
    href: "https://www.edstellar.com/course/servant-leadership-training",
  },
  {
    domain: "Emotional Intelligence & Ethical Leadership",
    category: "EQ & Ethics",
    title: "Ethical Leadership Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Make values-led decisions, model integrity and build an ethical culture across your teams and organisation.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "Ethical leadership training",
    href: "https://www.edstellar.com/course/ethical-leadership-training",
  },
  {
    domain: "Emotional Intelligence & Ethical Leadership",
    category: "EQ & Ethics",
    title: "Authentic Leader Development Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead from genuine self-awareness and values, building credibility and connection with the teams you lead.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Authentic leader development training",
    href: "https://www.edstellar.com/course/authentic-leader-development-training",
  },

  // Inclusive & Global Leadership
  {
    domain: "Inclusive & Global Leadership",
    category: "Inclusive & Global",
    title: "Inclusive Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead diverse teams equitably, mitigate bias and build a culture of belonging that lifts engagement and performance.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Inclusive leadership training",
    href: "https://www.edstellar.com/course/inclusive-leadership-training",
  },
  {
    domain: "Inclusive & Global Leadership",
    category: "Inclusive & Global",
    title: "Cross-Cultural Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead across cultures and geographies with the awareness and adaptability global teams require.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Cross-cultural leadership training",
    href: "https://www.edstellar.com/course/cross-cultural-leadership-training",
  },
  {
    domain: "Inclusive & Global Leadership",
    category: "Inclusive & Global",
    title: "Women in Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Develop high-potential women leaders with the confidence, influence and networks to advance into senior roles.",
    image: "/images/cyber/hero-bfsi-pros.jpg",
    imageAlt: "Women in leadership training",
    href: "https://www.edstellar.com/course/women-in-leadership-training",
  },
  {
    domain: "Inclusive & Global Leadership",
    category: "Inclusive & Global",
    title: "Global Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead distributed, multinational teams with the strategic and cultural skills global operating models demand.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Global leadership training",
    href: "https://www.edstellar.com/course/global-leadership-training",
  },

  // Leadership Communication & Influence
  {
    domain: "Leadership Communication & Influence",
    category: "Communication",
    title: "Strategic Communication for Leaders Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Communicate strategy clearly, align stakeholders and carry the room across every level of the organisation.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "Strategic communication for leaders training",
    href: "https://www.edstellar.com/course/strategic-communication-for-leaders-training",
  },
  {
    domain: "Leadership Communication & Influence",
    category: "Communication",
    title: "Persuasive Communication for Leaders Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Influence and persuade with credibility, building the buy-in leaders need to move teams and decisions forward.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Persuasive communication for leaders training",
    href: "https://www.edstellar.com/course/persuasive-communication-for-leaders-training",
  },
  {
    domain: "Leadership Communication & Influence",
    category: "Communication",
    title: "Executive Storytelling for Strategic Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Use narrative and storytelling to make strategy memorable and inspire action across senior audiences.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Executive storytelling for strategic leadership training",
    href: "https://www.edstellar.com/course/executive-storytelling-for-strategic-leadership-training",
  },
  {
    domain: "Leadership Communication & Influence",
    category: "Communication",
    title: "Communicating with Tact and Diplomacy Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Handle sensitive conversations with tact, diplomacy and composure while preserving relationships and trust.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Communicating with tact and diplomacy training",
    href: "https://www.edstellar.com/course/communicating-with-tact-and-diplomacy-training",
  },

  // Decision-Making & Critical Thinking
  {
    domain: "Decision-Making & Critical Thinking",
    category: "Decision-Making",
    title: "Leadership Decision Making Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Apply structured frameworks to make sound, timely decisions under pressure and accountability.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "Leadership decision making training",
    href: "https://www.edstellar.com/course/leadership-decision-making-training",
  },
  {
    domain: "Decision-Making & Critical Thinking",
    category: "Decision-Making",
    title: "Strategic Decision-Making for Leaders Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Weigh trade-offs, manage risk and make high-stakes strategic decisions that move the business forward.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Strategic decision-making for leaders training",
    href: "https://www.edstellar.com/course/strategic-decision-making-for-leaders-training",
  },
  {
    domain: "Decision-Making & Critical Thinking",
    category: "Decision-Making",
    title: "Data-Driven Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead with evidence, interpreting data and metrics to guide decisions and hold teams accountable to outcomes.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Data-driven leadership training",
    href: "https://www.edstellar.com/course/data-driven-leadership-training",
  },
  {
    domain: "Decision-Making & Critical Thinking",
    category: "Decision-Making",
    title: "Problem Solving Skills Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Diagnose problems, generate options and drive structured resolution as a leader and across your team.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Problem solving skills training",
    href: "https://www.edstellar.com/course/problem-solving-skills-training",
  },

  // Resilience & Leading Through Uncertainty
  {
    domain: "Resilience & Leading Through Uncertainty",
    category: "Resilience",
    title: "Leadership Resilience Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Build personal and team resilience to sustain performance and wellbeing through sustained pressure.",
    image: "/images/cyber/hero-bfsi-pros.jpg",
    imageAlt: "Leadership resilience training",
    href: "https://www.edstellar.com/course/leadership-resilience-training",
  },
  {
    domain: "Resilience & Leading Through Uncertainty",
    category: "Resilience",
    title: "VUCA Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead effectively in volatile, uncertain, complex and ambiguous conditions with clarity and adaptability.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "VUCA leadership training",
    href: "https://www.edstellar.com/course/vuca-leadership-training",
  },
  {
    domain: "Resilience & Leading Through Uncertainty",
    category: "Resilience",
    title: "Crisis Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead teams through crises with decisive communication, calm judgement and structured response.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "Crisis leadership training",
    href: "https://www.edstellar.com/course/crisis-leadership-training",
  },
  {
    domain: "Resilience & Leading Through Uncertainty",
    category: "Resilience",
    title: "Leading Through Uncertainty Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Sustain engagement and direction through restructures and change when the path ahead is unclear.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Leading through uncertainty training",
    href: "https://www.edstellar.com/course/leading-through-uncertainty-training",
  },

  // Industry & Functional Leadership
  {
    domain: "Industry & Functional Leadership",
    category: "Industry & Functional",
    title: "Retail Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Develop store, regional and frontline retail leaders to drive performance, service and engagement at scale.",
    image: "/images/cyber/hero-industry-retail.jpg",
    imageAlt: "Retail leadership training",
    href: "https://www.edstellar.com/course/retail-leadership-training",
  },
  {
    domain: "Industry & Functional Leadership",
    category: "Industry & Functional",
    title: "Supply Chain Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead supply chain and operations teams through complexity, disruption and continuous-improvement demands.",
    image: "/images/cyber/hero-industry-automotive.jpg",
    imageAlt: "Supply chain leadership training",
    href: "https://www.edstellar.com/course/supply-chain-leadership-training",
  },
  {
    domain: "Industry & Functional Leadership",
    category: "Industry & Functional",
    title: "Safety Leadership Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Build a proactive safety culture by leading teams with accountability, visibility and behaviour-based safety.",
    image: "/images/cyber/hero-industry-manufacturing.jpg",
    imageAlt: "Safety leadership training",
    href: "https://www.edstellar.com/course/safety-leadership-training",
  },
  {
    domain: "Industry & Functional Leadership",
    category: "Industry & Functional",
    title: "Leadership in Project Management Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead project teams and stakeholders to deliver outcomes on time, blending leadership with delivery discipline.",
    image: "/images/cyber/hero-industry-healthcare.jpg",
    imageAlt: "Leadership in project management training",
    href: "https://www.edstellar.com/course/leadership-in-project-management-training",
  },

  // Core Leadership Foundations
  {
    domain: "Core Leadership Foundations",
    category: "Foundations",
    title: "Inspirational Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Inspire and motivate teams, building the presence and influence that energises people around shared goals.",
    image: "/images/cyber/hero-blockchain-it.jpg",
    imageAlt: "Inspirational leadership training",
    href: "https://www.edstellar.com/course/inspirational-leadership-training",
  },
  {
    domain: "Core Leadership Foundations",
    category: "Foundations",
    title: "Creative Leadership Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Lead with creativity and curiosity, unlocking fresh thinking and problem-solving across your teams.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Creative leadership training",
    href: "https://www.edstellar.com/course/creative-leadership-training",
  },
  {
    domain: "Core Leadership Foundations",
    category: "Foundations",
    title: "Ownership and Accountability Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Instil a culture of ownership and accountability so leaders and teams reliably follow through on commitments.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Ownership and accountability training",
    href: "https://www.edstellar.com/course/ownership-and-accountability-training",
  },
  {
    domain: "Core Leadership Foundations",
    category: "Foundations",
    title: "Total Leader Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "A comprehensive foundation across the core leadership competencies every manager needs at every tier.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Total leader training",
    href: "https://www.edstellar.com/course/total-leader-training",
  },
];

const DOMAIN_CHIPS = DOMAINS.map((d) => d.name);

export function LeadershipChipChangesTabber() {
  const [activeTab, setActiveTab] = useState<
    "domains" | "programs" | "paths" | "delivery" | "trainers"
  >("domains");
  const [activePath, setActivePath] = useState(0);
  const path = LEARNING_PATHS[activePath];

  const [activeChip, setActiveChip] = useState(DOMAIN_CHIPS[0]);

  const chipPrograms = PROGRAMS.filter((p) => p.domain === activeChip);

  return (
    <section id="catalog" className="bg-[#0c0c0c] text-white py-16 md:py-20">
      <div className="eds-page-center">
        <h2
          className="text-[36px] leading-[1.05] sm:text-[42px] lg:text-[48px]"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Every Leadership Discipline Your Enterprise Needs, in One Trusted Catalog.
        </h2>
        <p
          className="mt-3 text-[17px] sm:text-[18px] text-white"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Build workforce readiness with leadership training programs organized by
          domains, guided development paths, expert facilitators, and enterprise
          delivery flexibility.
        </p>

        <div
          className="mt-10 flex items-center gap-5 pb-5 uppercase tracking-wider"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          {([
            { id: "domains", label: "LEADERSHIP DOMAINS" },
            { id: "programs", label: "115 LEADERSHIP TRAINING PROGRAMS" },
            { id: "paths", label: "DEVELOPMENT PATHS" },
            { id: "delivery", label: "DELIVERY" },
            { id: "trainers", label: "FACILITATORS" },
          ] as const).map((t, i, arr) => (
            <button
              key={t.id}
              type="button"
              className={`relative pr-5 text-[14px] transition-colors sm:text-[16px] ${
                activeTab === t.id ? "text-white" : "text-[#B3B3B3] hover:text-white"
              } ${i < arr.length - 1 ? "after:absolute after:right-0 after:top-0 after:h-full after:w-[2px] after:bg-[#6366F1]" : ""}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "trainers" ? (
          <div className="mt-2 rounded-2xl bg-white p-6 text-black sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h3
                  className="mb-4 text-[24px] leading-[1.1] sm:text-[30px] lg:text-[36px]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Facilitators to meet your leadership needs
                </h3>
                <p
                  className="text-[15px] leading-[1.5] text-eds-gray-500 md:text-[17px]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Every Edstellar leadership facilitator passes a multi-stage vetting
                  process: capability assessment, delivery evaluation by a
                  senior reviewer, reference checks from past corporate
                  cohorts, and a trial session before joining the active bench.
                  Our 1,500+ vetted facilitators span India, Singapore, the UK and
                  beyond, covering executive, manager, team and change
                  leadership.
                </p>
              </div>
              <a
                href="#contact"
                className="group/cta inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5] md:self-center"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                View all facilitators
                <ArrowRightIcon
                  width={16}
                  height={16}
                  className="transition-transform group-hover/cta:translate-x-0.5"
                />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 rounded-xl border border-eds-gray-200 bg-[#F5F3FF] p-4 lg:grid-cols-4 lg:p-6">
              {TRAINER_STATS.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-[26px] leading-none text-[#6366F1] sm:text-[30px]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {s.stat}
                  </p>
                  <p
                    className="mt-2 text-[11px] uppercase tracking-[0.14em] text-eds-gray-500 sm:text-[12px]"
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TRAINERS.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col rounded-xl border border-eds-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 shrink-0">
                      <Image
                        src={t.image}
                        alt={`${t.name}, ${t.role}`}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <span
                        className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#6366F1]"
                        aria-label="Verified"
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4
                        className="text-[16px] text-black"
                        style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                      >
                        {t.name}
                      </h4>
                      <p
                        className="text-[14px] text-eds-gray-500"
                        style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <p
                    className="mt-4 text-[13px] text-eds-gray-500"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {t.location} &middot;{" "}
                    <span style={{ color: "#F59E0B" }}>★</span> {t.rating}{" "}
                    <span className="text-eds-gray-400">({t.reviews})</span>
                  </p>
                  <p
                    className="mt-1 text-[13px] text-eds-gray-400"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    Training since {t.trainingSince} &middot; {t.experience} yrs in industry
                  </p>

                  <p
                    className="mt-4 text-[14px] leading-[1.5] text-black"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {t.bio}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {t.certs.map((cert) => (
                      <span
                        key={cert}
                        className="rounded-full border border-eds-gray-300 px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-eds-gray-500"
                        style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : activeTab === "programs" ? (
          <div className="mt-2 rounded-2xl bg-white p-6 text-black sm:p-8 md:p-10">
            {/* Live Curriculum banner: prominent freshness signal */}
            <div
              className="mb-8 flex items-start gap-4 overflow-hidden rounded-xl border-l-[4px] border-[#C5E826] bg-gradient-to-r from-[#1B1D52] via-[#312E81] to-[#4338CA] px-5 py-4 sm:px-6 sm:py-5"
            >
              <div className="relative mt-[6px] flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5E826] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#C5E826]" />
              </div>
              <div className="flex-1">
                <p
                  className="text-[15px] leading-[1.55] text-white sm:text-[16px] md:text-[17px]"
                  style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                >
                  Edstellar continuously updates courseware as leadership practices, workforce expectations and operating models evolve, so every cohort trains on the real challenges leaders are facing right now, not last decade&apos;s management playbook.
                </p>
              </div>
            </div>

            <div className="max-w-3xl">
              <h3
                className="mb-4 text-[24px] leading-[1.1] sm:text-[30px] lg:text-[36px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                115 Enterprise-grade leadership training programs, ready to deploy
              </h3>
              <p
                className="text-[15px] leading-[1.5] text-eds-gray-500 md:text-[17px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                A live catalog of 110+ leadership programs across 11 domains, delivered live, on-site or virtual, every program backed by certified facilitators and measurable behaviour-change outcomes for your teams.
              </p>
            </div>

            {/* Domain chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {DOMAIN_CHIPS.map((chip) => {
                const active = chip === activeChip;
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setActiveChip(chip)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.1em] transition-colors sm:text-[13px] ${
                      active
                        ? "border-[#6366F1] bg-[#6366F1] text-white"
                        : "border-eds-gray-300 text-eds-gray-500 hover:border-[#6366F1] hover:text-[#6366F1]"
                    }`}
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {chipPrograms.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noopener" : undefined}
                  className="eds-arrow-link group flex h-full flex-col overflow-hidden rounded-xl border border-eds-gray-200 bg-white transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/40 hover:shadow-md"
                >
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#0c0c0c]">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span
                      className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-sm border border-white/30 bg-black/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-sm"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 px-5 py-5">
                    <h4
                      className="text-[17px] leading-[1.25] text-black"
                      style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                    >
                      {p.title}
                    </h4>
                    <div
                      className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-eds-gray-500"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-[#6366F1]" /> {p.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-[#6366F1]" /> {p.delivery}
                      </span>
                    </div>
                    <p
                      className="text-[13px] leading-[1.45] text-eds-gray-500"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      {p.description}
                    </p>
                    <span
                      className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[12px] uppercase tracking-[0.14em] text-[#6366F1]"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      View program
                      <ArrowRightIcon className="eds-arrow" width={14} height={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div
              className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-eds-gray-200 bg-[#F5F3FF] px-5 py-4 text-center md:flex-row md:text-left"
            >
              <p
                className="text-[14px] text-eds-gray-500 md:text-[15px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                Looking for a specific leadership program, manager tier, or competency-based solution? Our team can match you to any of the 115 programs in the live catalog, or build a custom program around your exact competency model, leader tiers and business goals.
              </p>
              <a
                href="#catalog"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[#6366F1] px-5 py-2 text-[12px] uppercase tracking-[0.12em] text-[#6366F1] transition-colors hover:bg-[#6366F1] hover:text-white"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                Browse the Full Program Catalog
                <ArrowRightIcon width={14} height={14} />
              </a>
            </div>
          </div>
        ) : activeTab === "delivery" ? (
          <div className="mt-2 grid min-h-[420px] overflow-hidden rounded-2xl bg-white text-black md:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-12 sm:px-12 md:p-16">
              <h3
                className="mb-6 text-[24px] leading-[1.1] tracking-tight sm:text-[30px] lg:text-[36px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                Onsite, off-site, virtual.
              </h3>
              <p
                className="mb-8 max-w-md text-[16px] leading-[1.5] text-eds-gray-500 md:text-[18px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                Global delivery in any language, on any schedule, with the
                same facilitator quality and outcomes whether your team is
                co-located, hybrid or fully remote.
              </p>
              <div
                className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em] text-eds-gray-500"
                style={{ fontFamily: "'Riona Sans Bold', Helvetica, Arial, sans-serif", fontWeight: 600 }}
              >
                {DELIVERY_MODES.map((mode) => (
                  <span
                    key={mode}
                    className="rounded-full border border-eds-gray-300 px-3 py-1 transition-colors hover:border-[#6366F1] hover:text-[#6366F1]"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] bg-[#f0f0f0] md:min-h-full">
              <Image
                src="/images/cyber/hero-team-training.jpg"
                alt="Leadership training delivery"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : activeTab === "domains" ? (
          <>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-8 gap-y-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm">
              <span
                className="text-[44px] leading-none text-[#6366F1]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                {TOTAL_TRAININGS}+
              </span>
              <div>
                <p
                  className="text-[15px] uppercase tracking-[0.18em] text-white/70"
                  style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                >
                  Leadership trainings live now
                </p>
                <p
                  className="mt-1 text-[14px] text-white/55"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Across {DOMAINS.length}{" "}domains within Edstellar&apos;s broader Leadership &amp;{" "}
                  Management catalog of 2,000+ programs.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {DOMAINS.map((d) => (
                <a
                  key={d.name}
                  href={d.href}
                  className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-0.5 hover:border-[#6366F1]/60 hover:bg-white/[0.06]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1d1d1b]">
                    <Image
                      src={d.image}
                      alt={d.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/80 via-[#0c0c0c]/20 to-transparent" />
                    <span
                      className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-sm border border-[#6366F1]/60 bg-[#6366F1]/15 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-[#C7D2FE] backdrop-blur-sm"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                      {d.count} trainings
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                    <h3
                      className="text-[18px] leading-[1.25] text-white sm:text-[19px]"
                      style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                    >
                      {d.name}
                    </h3>
                    <p
                      className="text-[14px] leading-[1.4] text-white/70 sm:text-[15px]"
                      style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                    >
                      {d.description}
                    </p>
                    <span
                      className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[12px] uppercase tracking-[0.16em] text-[#6366F1]"
                      style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                    >
                      Explore domain
                      <ArrowRightIcon
                        className="transition-transform group-hover:translate-x-0.5"
                        width={14}
                        height={14}
                      />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mt-2 grid overflow-hidden rounded-2xl bg-white text-black md:grid-cols-2">
              <div className="flex items-center px-8 py-12 sm:px-12 lg:px-16">
                <div className="border-l-[3px] border-[#6366F1] pl-6">
                  <h3
                    className="text-[24px] leading-[1.1] sm:text-[30px]"
                    style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {path.cardTitle}
                  </h3>
                  <p
                    className="mt-5 max-w-md text-[17px] leading-[1.4] sm:text-[19px]"
                    style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                  >
                    {path.cardDescription}
                  </p>
                  <a
                    href={path.href}
                    className="group/cta mt-7 inline-flex items-center gap-2 rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5]"
                    style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
                  >
                    View Development Path
                    <ArrowRightIcon
                      width={16}
                      height={16}
                      className="transition-transform group-hover/cta:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
              <div className="relative h-[280px] bg-[#0c0c0c] md:h-auto">
                <Image
                  src={path.image}
                  alt={path.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {LEARNING_PATHS.map((p, i) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setActivePath(i)}
                  className={`relative cursor-pointer pt-4 pb-2 text-left transition-colors ${
                    i === activePath
                      ? "border-t-[3px] border-[#6366F1] text-white"
                      : "border-t border-white/30 text-white/80 hover:text-white"
                  }`}
                >
                  <span
                    className="block text-[12px] uppercase leading-[1.3] tracking-wider sm:text-[13px]"
                    style={{ fontFamily: "'Riona Sans Regular', Helvetica, Arial, sans-serif" }}
                  >
                    {p.label}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
