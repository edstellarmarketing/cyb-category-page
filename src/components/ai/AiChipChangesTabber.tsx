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
    name: "Generative AI & LLMs",
    count: 7,
    description:
      "Build production LLM systems with RAG, evaluation, agent workflows, PyTorch and Hugging Face, from demo to dependable product.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Generative AI and LLMs",
    href: "#catalog",
  },
  {
    name: "Machine Learning",
    count: 14,
    description:
      "Supervised and unsupervised learning, model selection and reinforcement learning with Python, Scikit-Learn and pandas.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Machine learning",
    href: "#catalog",
  },
  {
    name: "Deep Learning & Neural Networks",
    count: 11,
    description:
      "CNNs, RNNs, transformers and training pipelines built with TensorFlow, Keras and PyTorch on GPU sandboxes.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Deep learning and neural networks",
    href: "#catalog",
  },
  {
    name: "Natural Language Processing",
    count: 5,
    description:
      "Tokenization, embeddings, text classification and named-entity recognition with Python, spaCy and Hugging Face.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Natural language processing",
    href: "#catalog",
  },
  {
    name: "Computer Vision",
    count: 6,
    description:
      "Image classification, object detection and segmentation with OpenCV, TensorFlow and CNN architectures.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Computer vision",
    href: "#catalog",
  },
  {
    name: "Conversational AI & Chatbots",
    count: 6,
    description:
      "Design intent-driven assistants and voice skills with Rasa, Dialogflow, Amazon Alexa and dialogue-state management.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Conversational AI and chatbots",
    href: "#catalog",
  },
  {
    name: "Prompt Engineering & ChatGPT",
    count: 27,
    description:
      "Structured prompting, system messages, function calling and plugins across ChatGPT, GPT-4, Copilot and NotebookLM.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "Prompt engineering and ChatGPT",
    href: "#catalog",
  },
  {
    name: "AI Governance, Ethics & Security",
    count: 7,
    description:
      "Risk classification, audit evidence and responsible AI mapped to the EU AI Act, NIST AI RMF and ISO/IEC 42001.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "AI governance, ethics and security",
    href: "#catalog",
  },
  {
    name: "AI for Business Roles",
    count: 31,
    description:
      "Role-based enablement for managers, developers, data scientists and HR teams to apply AI safely in daily work.",
    image: "/images/cyber/hero-bfsi-pros.jpg",
    imageAlt: "AI for business roles",
    href: "#catalog",
  },
  {
    name: "AI for Industries",
    count: 6,
    description:
      "Sector-specific applications across manufacturing, clinical trials, retail and supply chain with domain datasets.",
    image: "/images/cyber/hero-industry-manufacturing.jpg",
    imageAlt: "AI for industries",
    href: "#catalog",
  },
  {
    name: "Quantum & Emerging AI",
    count: 4,
    description:
      "Quantum computing fundamentals, quantum machine learning and emerging tooling with Cirq and Watson Explorer.",
    image: "/images/cyber/hero-blockchain-it.jpg",
    imageAlt: "Quantum and emerging AI",
    href: "#catalog",
  },
];

const LEARNING_PATHS: LearningPath[] = [
  {
    label: "ML ENGINEER",
    cardTitle: "Machine Learning Engineer Path",
    cardDescription:
      "From Python and Scikit-Learn fundamentals to deep learning with TensorFlow and PyTorch, build the data-to-production ML engineering ladder.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Machine learning engineer",
    href: "#catalog",
  },
  {
    label: "GENAI ENGINEER",
    cardTitle: "Generative AI Engineer Path",
    cardDescription:
      "LLM application development, RAG pipelines, agent workflows and evaluation, ship generative AI systems that reach production.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Generative AI engineer",
    href: "#catalog",
  },
  {
    label: "MLOPS ENGINEER",
    cardTitle: "MLOps Engineer Path",
    cardDescription:
      "Model packaging, CI/CD for ML, monitoring and MLOps for LLMs, operationalize models with reproducible deployment pipelines.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "MLOps engineer",
    href: "#catalog",
  },
  {
    label: "DATA SCIENTIST",
    cardTitle: "Data Scientist Path",
    cardDescription:
      "Statistics, feature engineering, machine learning and model interpretation with Python, pandas and Scikit-Learn for analytics teams.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Data scientist",
    href: "#catalog",
  },
  {
    label: "AI GOVERNANCE LEAD",
    cardTitle: "AI Governance Lead Path",
    cardDescription:
      "EU AI Act, NIST AI RMF and ISO/IEC 42001, lead risk classification, model documentation and audit readiness across the enterprise.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "AI governance lead",
    href: "#catalog",
  },
  {
    label: "AI PRODUCT MANAGER",
    cardTitle: "AI Product Manager Path",
    cardDescription:
      "Scope AI use cases, define evaluation criteria and ship governed AI features, translate model capability into product outcomes.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "AI product manager",
    href: "#catalog",
  },
  {
    label: "AI FOR LEADERS",
    cardTitle: "AI for Leaders Track",
    cardDescription:
      "Executive AI strategy, governance, build-vs-buy decisions and workforce enablement for CTOs and Chief AI Officers.",
    image: "/images/cyber/hero-bfsi-pros.jpg",
    imageAlt: "AI for leaders",
    href: "#catalog",
  },
];

const TOTAL_TRAININGS = 124;

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
    role: "Generative AI & LLM trainer",
    location: "Bengaluru, India",
    rating: "4.9",
    reviews: 411,
    trainingSince: 2014,
    experience: 14,
    bio: "Applied AI practitioner building production LLM systems for enterprise teams. Trains engineers on RAG, agent workflows and evaluation using PyTorch, LangChain and Hugging Face.",
    certs: ["TensorFlow Developer", "AWS ML Specialty", "LangChain"],
    image: "/images/cyber/trainer-akash.jpg",
  },
  {
    name: "Priya Krishnan",
    role: "Machine learning & MLOps trainer",
    location: "Pune, India",
    rating: "4.9",
    reviews: 327,
    trainingSince: 2013,
    experience: 13,
    bio: "Former lead data scientist at a Tier-1 Indian bank. Builds ML and MLOps programs covering Python, Scikit-Learn, model deployment and monitoring across BFSI and SaaS clients.",
    certs: ["Azure Data Scientist", "MLOps", "Scikit-Learn"],
    image: "/images/cyber/trainer-devi.jpg",
  },
  {
    name: "Sarah Mitchell",
    role: "AI governance & responsible AI trainer",
    location: "London, United Kingdom",
    rating: "4.8",
    reviews: 264,
    trainingSince: 2012,
    experience: 16,
    bio: "AI governance specialist with delivery across UK, EU and Middle East enterprises. Specialises in the EU AI Act, NIST AI RMF and ISO/IEC 42001 audit readiness and model documentation.",
    certs: ["ISO 42001", "NIST AI RMF", "AI Governance"],
    image: "/images/cyber/trainer-deepak.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Computer vision & deep learning trainer",
    location: "Singapore",
    rating: "4.9",
    reviews: 298,
    trainingSince: 2013,
    experience: 14,
    bio: "Deep learning architect serving APAC manufacturers and SaaS leaders. Trains engineering teams on computer vision, CNNs and neural network training with TensorFlow, Keras and OpenCV.",
    certs: ["TensorFlow Developer", "Deep Learning", "OpenCV"],
    image: "/images/cyber/trainer-sudha.jpg",
  },
];

const TRAINER_STATS = [
  { stat: "1,500+", label: "Verified AI trainers" },
  { stat: "12+ yrs", label: "Average industry experience" },
  { stat: "11", label: "AI domains covered" },
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
  // Generative AI & LLMs
  {
    domain: "Generative AI & LLMs",
    category: "Generative AI",
    title: "Generative AI (GenAI) Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Build and ship generative AI systems using foundation models, prompting patterns, RAG and evaluation with Python and Hugging Face.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Generative AI training",
    href: "https://www.edstellar.com/course/generative-ai-training",
  },
  {
    domain: "Generative AI & LLMs",
    category: "Generative AI",
    title: "Generative AI with PyTorch Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Implement transformer and diffusion architectures from scratch with PyTorch, covering training loops, fine-tuning and inference.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Generative AI with PyTorch training",
    href: "#catalog",
  },
  {
    domain: "Generative AI & LLMs",
    category: "Generative AI",
    title: "Retrieval Augmented Generation (RAG) Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Build grounded LLM applications with embeddings, vector databases, retrieval pipelines and evaluation using LangChain.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Retrieval augmented generation training",
    href: "#catalog",
  },
  {
    domain: "Generative AI & LLMs",
    category: "Generative AI",
    title: "Agentic AI Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Design tool-using AI agents with planning, function calling and orchestration frameworks for multi-step enterprise workflows.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Agentic AI training",
    href: "#catalog",
  },
  {
    domain: "Generative AI & LLMs",
    category: "Generative AI",
    title: "MLOps for LLMs Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Operationalize large language models with deployment pipelines, prompt versioning, monitoring and cost control in production.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "MLOps for LLMs training",
    href: "#catalog",
  },

  // Machine Learning
  {
    domain: "Machine Learning",
    category: "Machine Learning",
    title: "Machine Learning with Python Training",
    duration: "32 - 40 hrs",
    delivery: DELIVERY,
    description:
      "Build supervised and unsupervised models end to end with Python, pandas, NumPy and Scikit-Learn on real datasets.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Machine learning with Python training",
    href: "https://www.edstellar.com/course/machine-learning-with-python-training",
  },
  {
    domain: "Machine Learning",
    category: "Machine Learning",
    title: "Introduction to Machine Learning Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Understand model types, training, validation and evaluation metrics with hands-on regression and classification exercises.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Introduction to machine learning training",
    href: "#catalog",
  },
  {
    domain: "Machine Learning",
    category: "Machine Learning",
    title: "Machine Learning with Scikit-Learn Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Build production-ready pipelines with Scikit-Learn covering feature engineering, model selection and cross-validation.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Machine learning with Scikit-Learn training",
    href: "#catalog",
  },
  {
    domain: "Machine Learning",
    category: "Machine Learning",
    title: "Reinforcement Learning Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Train agents with value-based and policy-gradient methods, Markov decision processes and reward design in Python.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Reinforcement learning training",
    href: "#catalog",
  },

  // Deep Learning & Neural Networks
  {
    domain: "Deep Learning & Neural Networks",
    category: "Deep Learning",
    title: "Deep Learning with TensorFlow Training",
    duration: "32 - 40 hrs",
    delivery: DELIVERY,
    description:
      "Build, train and tune neural networks with TensorFlow and Keras, covering CNNs, RNNs and transfer learning on GPU sandboxes.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Deep learning with TensorFlow training",
    href: "#catalog",
  },
  {
    domain: "Deep Learning & Neural Networks",
    category: "Deep Learning",
    title: "Introduction to Deep Learning Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Learn perceptrons, backpropagation, activation functions and optimization to build your first neural networks in Python.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Introduction to deep learning training",
    href: "#catalog",
  },
  {
    domain: "Deep Learning & Neural Networks",
    category: "Deep Learning",
    title: "Convolutional Neural Networks (CNN) Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Design CNN architectures for image tasks with convolution, pooling and regularization using TensorFlow and Keras.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Convolutional neural networks training",
    href: "#catalog",
  },
  {
    domain: "Deep Learning & Neural Networks",
    category: "Deep Learning",
    title: "Deep Learning with Keras Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Build and evaluate deep models rapidly with the Keras API, covering callbacks, custom layers and model deployment.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "Deep learning with Keras training",
    href: "#catalog",
  },

  // Natural Language Processing
  {
    domain: "Natural Language Processing",
    category: "NLP",
    title: "Natural Language Processing (NLP) with Python Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Process text with tokenization, embeddings and sequence models using Python, NLTK and Hugging Face transformers.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "NLP with Python training",
    href: "#catalog",
  },
  {
    domain: "Natural Language Processing",
    category: "NLP",
    title: "Introduction to NLP Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Cover text preprocessing, bag-of-words, TF-IDF and language modelling fundamentals with practical Python exercises.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Introduction to NLP training",
    href: "#catalog",
  },
  {
    domain: "Natural Language Processing",
    category: "NLP",
    title: "NLP with spaCy Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Build named-entity recognition, dependency parsing and custom pipelines for production text processing with spaCy.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "NLP with spaCy training",
    href: "#catalog",
  },
  {
    domain: "Natural Language Processing",
    category: "NLP",
    title: "Text Classification with Machine Learning Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Train and evaluate text classifiers for sentiment and topic tasks using feature extraction and Scikit-Learn models.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Text classification with machine learning training",
    href: "#catalog",
  },

  // Computer Vision
  {
    domain: "Computer Vision",
    category: "Computer Vision",
    title: "Computer Vision with OpenCV Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Process images and video with OpenCV, covering filtering, feature detection, object tracking and contour analysis.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Computer vision with OpenCV training",
    href: "#catalog",
  },
  {
    domain: "Computer Vision",
    category: "Computer Vision",
    title: "Introduction to Computer Vision Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Learn image representation, transforms and detection fundamentals with hands-on Python and OpenCV exercises.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Introduction to computer vision training",
    href: "#catalog",
  },
  {
    domain: "Computer Vision",
    category: "Computer Vision",
    title: "Computer Vision with TensorFlow Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Build image classification and object-detection models with TensorFlow, Keras and CNN architectures on GPU sandboxes.",
    image: "/images/cyber/hero-ai.jpg",
    imageAlt: "Computer vision with TensorFlow training",
    href: "#catalog",
  },
  {
    domain: "Computer Vision",
    category: "Computer Vision",
    title: "Computer Vision & Image Processing Training",
    duration: "24 - 32 hrs",
    delivery: DELIVERY,
    description:
      "Apply image-processing techniques including segmentation, morphology and edge detection for real-world vision pipelines.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Computer vision and image processing training",
    href: "#catalog",
  },

  // Conversational AI & Chatbots
  {
    domain: "Conversational AI & Chatbots",
    category: "Conversational AI",
    title: "Build AI Chatbot with Rasa Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Build intent-driven assistants with Rasa, covering NLU pipelines, dialogue management and custom action servers.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "Build AI chatbot with Rasa training",
    href: "#catalog",
  },
  {
    domain: "Conversational AI & Chatbots",
    category: "Conversational AI",
    title: "Chatbot Development with Dialogflow Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Design conversational flows, intents and fulfillment with Google Dialogflow and integrate them into web and messaging channels.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Chatbot development with Dialogflow training",
    href: "#catalog",
  },
  {
    domain: "Conversational AI & Chatbots",
    category: "Conversational AI",
    title: "Building Intelligent Chatbots Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Combine NLP, intent recognition and LLM backends to build context-aware chatbots with dialogue-state management.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "Building intelligent chatbots training",
    href: "#catalog",
  },
  {
    domain: "Conversational AI & Chatbots",
    category: "Conversational AI",
    title: "Amazon Alexa Skills Development Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Build voice experiences with the Alexa Skills Kit, covering intents, slots, dialogue models and AWS Lambda fulfillment.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Amazon Alexa skills development training",
    href: "#catalog",
  },

  // Prompt Engineering & ChatGPT
  {
    domain: "Prompt Engineering & ChatGPT",
    category: "Prompt Engineering",
    title: "ChatGPT Prompt Engineering Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Apply structured prompting, system messages, few-shot patterns and evaluation to get reliable output from ChatGPT and GPT-4.",
    image: "/images/cyber/hero-devops-it.jpg",
    imageAlt: "ChatGPT prompt engineering training",
    href: "https://www.edstellar.com/course/chatgpt-prompt-engineering-training",
  },
  {
    domain: "Prompt Engineering & ChatGPT",
    category: "Prompt Engineering",
    title: "ChatGPT (GPT-4) for Developers Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Integrate the OpenAI API into applications with function calling, structured output and token and cost management.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "ChatGPT for developers training",
    href: "#catalog",
  },
  {
    domain: "Prompt Engineering & ChatGPT",
    category: "Prompt Engineering",
    title: "ChatGPT Plugins Development Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Build and deploy ChatGPT plugins with API manifests, authentication and tool schemas to extend model capabilities.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "ChatGPT plugins development training",
    href: "#catalog",
  },
  {
    domain: "Prompt Engineering & ChatGPT",
    category: "Prompt Engineering",
    title: "NotebookLM for Teams Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Use NotebookLM to ground research, summarize source documents and build shared knowledge workflows for teams.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "NotebookLM for teams training",
    href: "#catalog",
  },

  // AI Governance, Ethics & Security
  {
    domain: "AI Governance, Ethics & Security",
    category: "Governance",
    title: "Artificial Intelligence (AI) Governance Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Implement AI governance with risk classification, model documentation and audit evidence aligned to the EU AI Act and NIST AI RMF.",
    image: "/images/cyber/hero-governance.jpg",
    imageAlt: "AI governance training",
    href: "https://www.edstellar.com/course/artificial-intelligence-ai-governance-training",
  },
  {
    domain: "AI Governance, Ethics & Security",
    category: "Governance",
    title: "AI Ethics & Responsible AI Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Address fairness, bias, transparency and accountability with practical responsible-AI controls across the model lifecycle.",
    image: "/images/cyber/cert-gdpr.jpg",
    imageAlt: "AI ethics and responsible AI training",
    href: "#catalog",
  },
  {
    domain: "AI Governance, Ethics & Security",
    category: "Governance",
    title: "AI Security and Risk Management Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Identify model threats including prompt injection and data poisoning, then apply mitigations mapped to ISO/IEC 23894.",
    image: "/images/cyber/cert-iso27001.jpg",
    imageAlt: "AI security and risk management training",
    href: "#catalog",
  },
  {
    domain: "AI Governance, Ethics & Security",
    category: "Governance",
    title: "AI Management System (ISO 42001) Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Establish and operate an AI management system with policies, controls and audit readiness per ISO/IEC 42001.",
    image: "/images/cyber/cert-cism.jpg",
    imageAlt: "AI management system ISO 42001 training",
    href: "#catalog",
  },

  // AI for Business Roles
  {
    domain: "AI for Business Roles",
    category: "AI for Roles",
    title: "AI for Managers Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Equip managers to scope AI use cases, evaluate tools and govern adoption using ChatGPT and Copilot in daily workflows.",
    image: "/images/cyber/hero-bfsi-pros.jpg",
    imageAlt: "AI for managers training",
    href: "#catalog",
  },
  {
    domain: "AI for Business Roles",
    category: "AI for Roles",
    title: "AI for Developers Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Integrate AI assistants and APIs into the development workflow with code generation, review and testing using Copilot.",
    image: "/images/cyber/hero-software-it.jpg",
    imageAlt: "AI for developers training",
    href: "#catalog",
  },
  {
    domain: "AI for Business Roles",
    category: "AI for Roles",
    title: "AI for Data Scientists Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Accelerate exploratory analysis, feature engineering and model prototyping with LLM-assisted tooling and Python notebooks.",
    image: "/images/cyber/hero-datasci-it.jpg",
    imageAlt: "AI for data scientists training",
    href: "#catalog",
  },
  {
    domain: "AI for Business Roles",
    category: "AI for Roles",
    title: "AI for HR Managers Training",
    duration: "8 - 16 hrs",
    delivery: DELIVERY,
    description:
      "Apply AI to talent workflows including screening, drafting and analytics while managing bias and compliance obligations.",
    image: "/images/cyber/hero-bfsi-finance.jpg",
    imageAlt: "AI for HR managers training",
    href: "#catalog",
  },

  // AI for Industries
  {
    domain: "AI for Industries",
    category: "AI for Industries",
    title: "AI in Manufacturing Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Apply computer vision and predictive maintenance models to quality control and production-line optimization use cases.",
    image: "/images/cyber/hero-industry-manufacturing.jpg",
    imageAlt: "AI in manufacturing training",
    href: "#catalog",
  },
  {
    domain: "AI for Industries",
    category: "AI for Industries",
    title: "AI in Clinical Trials Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Use validated machine learning for trial analytics and data management under GxP and FDA AI/ML guidance.",
    image: "/images/cyber/hero-industry-healthcare.jpg",
    imageAlt: "AI in clinical trials training",
    href: "#catalog",
  },
  {
    domain: "AI for Industries",
    category: "AI for Industries",
    title: "AI in Retail and E-commerce Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Build recommendation, demand-forecasting and personalization models for retail and e-commerce data pipelines.",
    image: "/images/cyber/hero-industry-retail.jpg",
    imageAlt: "AI in retail and e-commerce training",
    href: "#catalog",
  },
  {
    domain: "AI for Industries",
    category: "AI for Industries",
    title: "AI for Supply Chain Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Apply time-series forecasting and optimization models to inventory, logistics and demand-planning workflows.",
    image: "/images/cyber/hero-industry-automotive.jpg",
    imageAlt: "AI for supply chain training",
    href: "#catalog",
  },

  // Quantum & Emerging AI
  {
    domain: "Quantum & Emerging AI",
    category: "Quantum & Emerging",
    title: "Quantum Computing Essentials Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Understand qubits, superposition, entanglement and quantum gates with hands-on circuit building and simulation.",
    image: "/images/cyber/hero-blockchain-it.jpg",
    imageAlt: "Quantum computing essentials training",
    href: "#catalog",
  },
  {
    domain: "Quantum & Emerging AI",
    category: "Quantum & Emerging",
    title: "Quantum Computing with Cirq Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Build and run quantum circuits with Google Cirq, covering gate operations, measurement and simulator workflows.",
    image: "/images/cyber/hero-cloud-it.jpg",
    imageAlt: "Quantum computing with Cirq training",
    href: "#catalog",
  },
  {
    domain: "Quantum & Emerging AI",
    category: "Quantum & Emerging",
    title: "Quantum Machine Learning Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Explore variational quantum circuits and quantum-classical hybrid models for emerging machine learning use cases.",
    image: "/images/cyber/hero-bigdata-it.jpg",
    imageAlt: "Quantum machine learning training",
    href: "#catalog",
  },
  {
    domain: "Quantum & Emerging AI",
    category: "Quantum & Emerging",
    title: "Watson Explorer for Enterprise Search Training",
    duration: "16 - 24 hrs",
    delivery: DELIVERY,
    description:
      "Build enterprise search and content analytics with IBM Watson Explorer, covering ingestion, indexing and discovery.",
    image: "/images/cyber/hero-ai-it.jpg",
    imageAlt: "Watson Explorer for enterprise search training",
    href: "#catalog",
  },
];

const DOMAIN_CHIPS = DOMAINS.map((d) => d.name);

export function AiChipChangesTabber() {
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
          Every AI Discipline Your Enterprise Needs, in One Trusted Catalog.
        </h2>
        <p
          className="mt-3 text-[17px] sm:text-[18px] text-white"
          style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
        >
          Build workforce readiness with AI training programs organized by
          domains, guided learning paths, expert trainers, and enterprise
          delivery flexibility.
        </p>

        <div
          className="mt-10 flex items-center gap-5 pb-5 uppercase tracking-wider"
          style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
        >
          {([
            { id: "domains", label: "TRAINING DOMAINS" },
            { id: "programs", label: "124 AI TRAINING PROGRAMS" },
            { id: "paths", label: "LEARNING PATHS" },
            { id: "delivery", label: "DELIVERY" },
            { id: "trainers", label: "TRAINERS" },
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
                  Trainers to meet your AI needs
                </h3>
                <p
                  className="text-[15px] leading-[1.5] text-eds-gray-500 md:text-[17px]"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Every Edstellar AI trainer passes a multi-stage vetting
                  process: technical assessment, delivery evaluation by a
                  senior reviewer, reference checks from past corporate
                  cohorts, and a trial session before joining the active bench.
                  Our 1,500+ vetted trainers span India, Singapore, the UK and
                  beyond, covering generative AI, machine learning, computer
                  vision and AI governance.
                </p>
              </div>
              <a
                href="#contact"
                className="group/cta inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#6366F1] px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#4F46E5] md:self-center"
                style={{ fontFamily: "'Riona Sans Medium', Helvetica, Arial, sans-serif" }}
              >
                View all trainers
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
            {/* Live Curriculum banner — prominent freshness signal */}
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
                  Edstellar continuously updates courseware as new models, tools and techniques emerge in the AI space, so every cohort trains on what builders and regulators are working with right now.
                </p>
              </div>
            </div>

            <div className="max-w-3xl">
              <h3
                className="mb-4 text-[24px] leading-[1.1] sm:text-[30px] lg:text-[36px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                124 Enterprise-grade AI training programs, ready to deploy
              </h3>
              <p
                className="text-[15px] leading-[1.5] text-eds-gray-500 md:text-[17px]"
                style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
              >
                A live catalog of 120+ AI programs across 11 domains, delivered live, on-site or virtual, every program backed by certified trainers and measurable skill outcomes.
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
                Looking for a specific training program, model stack, or role-based solution? Our team can match you to any of the 124 programs in the live catalog, or build a custom program around your exact stack, roles, and governance obligations.
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
                same trainer quality and outcomes whether your team is
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
                alt="Training delivery"
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
                  AI trainings live now
                </p>
                <p
                  className="mt-1 text-[14px] text-white/55"
                  style={{ fontFamily: "'Riona Sans Light', Helvetica, Arial, sans-serif" }}
                >
                  Across {DOMAINS.length}{" "}domains within Edstellar&apos;s broader IT &amp;{" "}
                  Technical catalog of 2,000+ programs.
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
                    View Learning Path
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
