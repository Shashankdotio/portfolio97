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
    title: "Master's in Information Technology & Analytics",
    school: "Rutgers University, New Jersey",
    focus: "Concentration: Artificial Intelligence",
    period: "2025 – Present",
    link: "https://www.business.rutgers.edu/masters-information-technology-analytics",
    delay: 0.1,
    image: "/education/rutgers.jpg",
    memory: "My journey at Rutgers started with a fascination for AI and data. The coursework challenged me to think differently about machine learning. Working on projects with cutting-edge tools like PyTorch expanded my perspective on what's possible. The collaborative environment with fellow researchers pushed me to dig deeper into complex problems.",
  },
  {
    title: "B.E. in Computer Science",
    school: "St. Francis Institute of Technology, Mumbai University",
    focus: "Honors in Cyber Security",
    period: "CGPA: 8.57 / 10 · 2021 – 2025",
    link: "https://www.sfit.ac.in/",
    delay: 0.25,
    image: "/education/sfit.jpg",
    memory: "My four years at SFIT were transformative. I discovered my passion for cybersecurity and data science through hands-on projects. From coding marathons to hackathons, every challenge taught me something new. The 8.57 CGPA achievement came from consistent hard work and mentorship from amazing professors who believed in my potential.",
  },
  {
    title: "High School",
    school: "Don Bosco High School, Mumbai",
    focus: null,
    period: "Percentage: 86.20% · 2014 - 2019",
    link: "https://donboscoborivli.org",
    delay: 0.4,
    image: "/education/donbosco.jpg",
    memory: "High school was where it all began. While maintaining an 86.20% average, I developed a strong foundation in mathematics and computer science. The discipline and values instilled here shaped my approach to learning. These years taught me that consistency and curiosity are the foundation of success.",
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
