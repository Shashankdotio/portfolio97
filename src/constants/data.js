// Portfolio data
export const skillsData = [
  {
    title: "Programming",
    items: [
      "Python",
      "SQL",
      "R",
      "C",
    ],
  },
  {
    title: "Machine Learning",
    items: [
      "Regression",
      "Classification",
      "Clustering",
      "Model Evaluation",
      "Feature Engineering",
      "LLM Fine-Tuning",
    ],
  },
  {
    title: "NLP",
    items: [
      "Text Preprocessing",
      "Sentiment Analysis",
      "Multilingual NLP",
      "Transformer Fine-Tuning",
      "Feature Extraction",
    ],
  },
  {
    title: "Data Analysis",
    items: [
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning",
      "Statistical Analysis",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "HuggingFace Transformers",
      "OpenCV",
      "MediaPipe",
    ],
  },
  {
    title: "Deployment & Tools",
    items: [
      "Docker",
      "Vercel",
      "Git/GitHub",
      "Tableau",
      "Power BI",
      "Excel",
      "Cursor",
      "Claude Code",
      "GitHub Copilot",
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
    title: "High School",
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
    title: "Research & Programming Intern",
    org: "R&D · Government of India (AIR)",
    period: "Summer 2024",
    items: [
      "Analyzed broadcast and audience datasets to identify listener engagement and programming trends using Python and Excel.",
      "Performed data cleaning, preprocessing, and exploratory analysis on structured operational datasets.",
      "Built reporting workflows and dashboards to summarize audience insights and programming metrics.",
      "Processed broadcast metadata and operational records to support scheduling and content analysis.",
    ],
  },
  secondary: [
    {
      title: "Data Analysis Intern",
      org: "CodSoft",
      period: "Project-based internship",
      items: [
        "Built dashboards and visual reports to analyze trends across structured datasets using Python and BI tools.",
        "Performed data cleaning, preprocessing, and exploratory analysis to improve reporting accuracy.",
        "Worked with KPI-based reports and data visualizations to support decision-making and trend analysis.",
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

export const certificationsData = [
  {
    title: "Google Data Analytics",
    provider: "Google Career Certificates",
    description: "Comprehensive data analytics professional certificate covering data collection, processing, and visualization.",
    skills: ["Data Analysis", "Spreadsheets", "SQL", "Tableau", "Data Visualization", "Statistics"],
    image: "/certifications/Google Data Analytics.png",
    delay: 0.1,
    featured: true,
  },
  {
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    description: "Foundational certification demonstrating cloud literacy and understanding of AWS services.",
    skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Pricing Models", "Architecture"],
    image: "/certifications/AWS Cloud Practitioner.png",
    delay: 0.2,
    featured: true,
  },
  {
    title: "Microsoft Learn Student Ambassador",
    provider: "Microsoft",
    description: "Recognition for advocacy and expertise in Microsoft technologies and cloud services.",
    skills: ["Azure", "ML Basics", "Computer Vision", "AI Concepts", "Cloud Fundamentals"],
    image: "/certifications/Microsoft Learn Student Ambassador.png",
    delay: 0.3,
  },
  {
    title: "Machine Learning",
    provider: "University of London",
    description: "Advanced machine learning specialization covering supervised and unsupervised learning methods.",
    skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Model Evaluation", "Python"],
    image: "/certifications/Machine Learning (Univ of London).png",
    delay: 0.4,
  },
  {
    title: "Python Data Science",
    provider: "University of Michigan",
    description: "Applied data science with Python, covering analysis, visualization, and real-world applications.",
    skills: ["Python", "Pandas", "NumPy", "Data Analysis", "Visualization", "Statistics"],
    image: "/certifications/Python DS (Univ of Michigan).png",
    delay: 0.5,
  },
  {
    title: "Oracle Cloud AI Foundations",
    provider: "Oracle University",
    description: "Foundation-level certification in AI and Oracle Cloud Infrastructure services.",
    skills: ["AI Concepts", "Cloud Infrastructure", "Oracle OCI", "Machine Learning", "Data Processing"],
    image: "/certifications/Oracle Cloud (AI Foundations Associate).png",
    delay: 0.6,
  },
  {
    title: "Intro to Tableau",
    provider: "Simplilearn",
    description: "Foundational course in data visualization and business intelligence using Tableau.",
    skills: ["Tableau", "Data Visualization", "Dashboards", "Business Intelligence", "Analytics"],
    image: "/certifications/Intro to Tableau (Simplilearn).png",
    delay: 0.7,
  },
  {
    title: "Power BI",
    provider: "Simplilearn",
    description: "Business intelligence and data visualization using Microsoft Power BI platform.",
    skills: ["Power BI", "DAX", "Data Modeling", "Dashboards", "Reporting"],
    image: "/certifications/Power BI (Simplilearn).png",
    delay: 0.8,
  },
  {
    title: "GenAI Data Analytics",
    provider: "Tata Group · Forage",
    description: "Job simulation involving AI-powered analytics and data-driven decision making.",
    skills: ["GenAI", "Data Analytics", "Problem Solving", "Business Insights", "AI Tools"],
    image: "/certifications/GenAI Data Analytics (Tata-Forage).png",
    delay: 0.9,
  },
  {
    title: "Business Analysis",
    provider: "LinkedIn Learning",
    description: "Professional certification in business analysis, requirements gathering, and stakeholder management.",
    skills: ["Business Analysis", "Requirements", "Stakeholder Management", "Process Improvement"],
    image: "/certifications/Business Analysis (Linkedin Learning).png",
    delay: 1.0,
  },
  {
    title: "Google UX Foundations",
    provider: "Google Career Certificates",
    description: "Introduction to user experience design principles and best practices.",
    skills: ["UX Design", "User Research", "Wireframing", "Prototyping", "Design Thinking"],
    image: "/certifications/Google UX foundations.png",
    delay: 1.1,
  },
];

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
      label: "Resume",
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
