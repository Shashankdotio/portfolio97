// Portfolio data
export const skillsData = [
  {
    title: "Machine Learning",
    items: [
      "Supervised learning",
      "Unsupervised learning",
      "NLP",
      "Feature engineering",
      "Model evaluation",
    ],
  },
  {
    title: "Data Analysis",
    items: [
      "Exploratory data analysis",
      "Data preprocessing",
      "Statistical analysis",
      "Hypothesis testing",
      "Data visualization",
    ],
  },
  {
    title: "Programming",
    items: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
    ],
  },
  {
    title: "Systems",
    items: [
      "Git & GitHub",
      "Linux",
      "Docker (basic)",
      "Reproducible workflows",
    ],
  },
];

export const educationData = [
  {
    title: "Master's - Information Technology & Analytics",
    school: "Rutgers University, New Jersey",
    focus: "Concentration: Artificial Intelligence",
    period: "2025 – Present",
    link: "https://www.business.rutgers.edu/masters-information-technology-analytics",
    delay: 0.1,
    image: "/education/rutgers.jpg",
    memory: "Coming to Rutgers was a big shift for me. New country, new people, and a completely different environment. It felt overwhelming at first, but also exciting in a way I hadn’t experienced before. Being around people from so many different backgrounds and working on new kinds of problems pushed me out of my comfort zone. At the same time, I’ve been getting deeper into data and machine learning, building things, experimenting, and slowly figuring out how everything fits together.",
  },
  {
    title: "B.E. - Computer Science",
    school: "St. Francis Institute of Technology, Mumbai University",
    focus: "Honors in Cyber Security",
    period: "CGPA: 8.57 / 10 · 2021 – 2025",
    link: "https://www.sfit.ac.in/",
    delay: 0.25,
    image: "/education/sfit.jpg",
    memory: "These years were full of late nights, group projects, and a lot of trial and error. I started building real things, exploring data, and getting genuinely interested in how systems learn and make decisions. This is where my interest in machine learning and analytics really began to take shape.",
  },
  {
    title: "High School - Science",
    school: "Don Bosco High School, Mumbai",
    focus: null,
    period: "Percentage: 86.20% · 2014 - 2019",
    link: "https://donboscoborivli.org",
    delay: 0.4,
    image: "/education/donbosco.jpg",
    memory: "High school was where it all began. Uniforms, early mornings, and figuring out life one exam at a time. Somewhere between math classes and Football sessions, I realized I enjoyed solving problems more than memorizing answers.",
  },
];

export const experienceData = {
  featured: {
    title: "Data Science Intern",
    org: "Applied Research · Government of India (AIR)",
    period: "Summer 2024",
    items: [
      "Worked with real-world datasets to support applied research initiatives.",
      "Built and evaluated machine learning models for data-driven analysis.",
      "Performed feature engineering and exploratory analysis to improve model performance.",
      "Collaborated with researchers to translate problem statements into analytical workflows.",
    ],
  },
  secondary: [
    {
      title: "Machine Learning Intern",
      org: "CodSoft",
      period: "Project-based internship",
      items: [
        "Implemented ML models on curated datasets.",
        "Worked on data preprocessing and evaluation.",
      ],
    },
    {
      title: "Project-Based Experience",
      org: "Tata Group · Forage Virtual Internship",
      period: "GenAI-Powered Data Analytics Job Simulation",
      items: [
        "Worked on data analysis and problem framing using simulated business scenarios.",
        "Applied analytical thinking and GenAI tools to generate insights and recommendations.",
      ],
    },
  ],
};

export const projectsData = {
  featured: {
    title: "Wrist-Wise",
    desc: "A health analytics project built around Apple Watch and Apple Health data, looking at activity patterns to suggest when to rest or push harder.",
    link: "https://github.com/Shashankdotio/Wrist-Wise",
  },
  projects: [
    {
      title: "LLM Therapist Evaluation",
      desc: "Evaluation framework for analyzing behavioral responses and limitations of large language models.",
      link: "https://github.com/Shashankdotio/llm-therapist-evaluation-",
    },
    {
      title: "VeriNews",
      desc: "NLP-based system for detecting misinformation in Hindi news articles.",
      link: "https://github.com/Shashankdotio/VeriNews--Hindi-fake-news-detector",
    },
    {
      title: "Eye Disease Classification",
      desc: "Medical imaging project using deep learning embeddings to classify eye conditions.",
      link: "https://github.com/Shashankdotio/Eye-Disease-Classification-AML",
    },
  ],
};

export const contactData = {
  email: "shashankvsdb@gmail.com",
  links: [
    {
      label: "Email",
      value: "shashankvsdb@gmail.com",
      href: "mailto:shashankvsdb@gmail.com",
      isPrimary: true,
      delay: 0.25,
    },
    {
      label: "Resume (Technical)",
      value: "Download PDF",
      href: "/resume.pdf",
      delay: 0.35,
    },
    {
      label: "LinkedIn",
      value: "Professional background",
      href: "https://www.linkedin.com/in/shashankkamble97",
      delay: 0.45,
    },
    {
      label: "GitHub",
      value: "Projects & code",
      href: "https://github.com/Shashankdotio",
      delay: 0.55,
    },
  ],
};
