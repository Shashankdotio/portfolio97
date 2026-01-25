import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

/* ================= UTILS ================= */
const isMobile = window.innerWidth < 768;

/* ================= REVEAL ================= */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.9s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ================= HOVER CARD ================= */
function HoverCard({ children, style }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...style,
        transform: hovered
          ? "translateY(-4px) scale(1.01)"
          : "translateY(0px) scale(1)",
        background: hovered ? "rgba(255,255,255,0.12)" : style.background,
        transition:
          "transform 0.35s cubic-bezier(.2,.8,.2,1), background 0.35s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

/* ================= HERO OBJECT ================= */
function HeroObject({ scrollY, smoothScroll }) {
  const mesh = useRef(null);

  useFrame(() => {
    if (!mesh.current) return;
    // Apple-style smoothing
    const ease = isMobile ? 0.14 : 0.1;
    smoothScroll.current += (scrollY - smoothScroll.current) * ease;

    const speed = isMobile ? 0.00032 : 0.0005;
    const t = smoothScroll.current * speed;

    mesh.current.rotation.y +=
      (t * Math.PI * 1.1 - mesh.current.rotation.y) * 0.042;

    mesh.current.rotation.x +=
      (t * Math.PI * 0.28 - mesh.current.rotation.x) * 0.042;

    const idle = Math.sin(performance.now() * 0.00099) * 0.03;
    mesh.current.rotation.z = idle;

    const maxDrop = isMobile ? -0.85 : -1.35; // how far down it can go
    const targetY = Math.max(-t * 1.4, maxDrop);
    mesh.current.position.y += (targetY - mesh.current.position.y) * 0.042;
  });

  return (
    <TorusKnot ref={mesh} args={[1.4, 0.45, 120, 16]}>
      <meshStandardMaterial
      color={isMobile ? "#e5e7eb" : "#d1d1d6"}
      roughness={isMobile ? 0.22 : 0.3}
      metalness={isMobile ? 0.8 : 0.9}
      />
    </TorusKnot>
  );
}

function TiltPhoto({ src, alt }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    el.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
    el.style.boxShadow = "0 25px 60px rgba(0,0,0,0.45)";
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
    el.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={tiltWrapper}
    >
      <img src={src} alt={alt} style={tiltImage} />
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const smoothScroll = useRef(0);
  const [showMoreExperience, setShowMoreExperience] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* GLOBAL CANVAS */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 1,
        }}
      >
        <ambientLight intensity={isMobile ? 0.9 : 0.45} />

        <directionalLight
          position={[6, 4, 4]}
          intensity={isMobile ? 1.2 : 1.1}
        />

        <directionalLight
          position={[-4, -2, -6]}
          intensity={isMobile ? 0.6 : 0.5}
        />
        <HeroObject scrollY={scrollY} smoothScroll={smoothScroll} />
      </Canvas>

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1, color: "white" }}>
        {/* HERO */}
        <section style={heroSection}>
          <div style={heroContent}>
            <h1
              style={{
                ...heroTitle,
                fontSize: isMobile ? "2.6rem" : "4rem",
              }}
            >
              Shashank Kamble
            </h1>
            <p style={heroSubtitle}>
              Building intelligent systems with data and code.
            </p>
          </div>
        </section>

        <div style={blurWrapper}>
          {/* ABOUT */}
          <section style={aboutSection}>
            <div style={aboutContainer}>
              <Reveal>
                <div style={aboutLayout}>
                  <img src="me.png" alt="Portrait" style={aboutImage} />
                  <div>
                    <h2 style={sectionTitle}>About</h2>
                    <p style={bodyText}>
                      I work with data and machine learning, often on problems
                      where the answers aren’t obvious.
                    </p>
                    <p style={bodyText}>
                      I like understanding why something works, not just that it
                      works.
                    </p>
                    <p style={bodyText}>
                      Outside of tech, I also spend time on creative work —
                      graphic design, editing, and cinematography.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* FOCUS AREAS */}
          <section style={sectionTight}>
            <Reveal>
              <h2 style={sectionTitle}>Focus Areas</h2>
            </Reveal>

            <div style={skillsGrid}>
              {[
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
              ].map((group, i) => (
                <Reveal key={group.title} delay={i * 0.1}>
                  <HoverCard style={skillCard}>
                    <h3 style={skillTitle}>{group.title}</h3>
                    <ul style={skillList}>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </HoverCard>
                </Reveal>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section style={sectionTight}>
            <Reveal>
              <h2 style={sectionTitle}>Education</h2>
            </Reveal>

            <div style={timelineWrapper}>
              <div style={timelineLine} />

              {/* MASTERS */}
              <Reveal delay={0.1}>
                <div style={timelineItem}>
                  <a
                    href="https://www.business.rutgers.edu/masters-information-technology-analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <HoverCard style={timelineCard}>
                      <h3>Master’s in Information Technology & Analytics</h3>
                      <p style={{ opacity: 0.85 }}>
                        Rutgers University, New Jersey
                      </p>
                      <p style={{ fontSize: "0.95rem", opacity: 0.7 }}>
                        Concentration: Artificial Intelligence
                      </p>
                      <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
                        2025 – Present
                      </p>
                    </HoverCard>
                  </a>
                </div>
              </Reveal>

              {/* BACHELORS */}
              <Reveal delay={0.25}>
                <div style={timelineItem}>
                  <a
                    href="https://www.sfit.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <HoverCard style={timelineCard}>
                      <h3>B.E. in Computer Science</h3>
                      <p style={{ opacity: 0.85 }}>
                        St. Francis Institute of Technology, Mumbai University
                      </p>
                      <p style={{ fontSize: "0.95rem", opacity: 0.7 }}>
                        Honors in Cyber Security
                      </p>
                      <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
                        CGPA: 8.57 / 10 · 2021 – 2025
                      </p>
                    </HoverCard>
                  </a>
                </div>
              </Reveal>

              {/* HIGH SCHOOL */}
              <Reveal delay={0.4}>
                <div style={timelineItem}>
                  <a
                    href="https://donboscoborivli.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <HoverCard style={secondaryEducationCard}>
                      <h3>High School</h3>
                      <p style={{ opacity: 0.85 }}>
                        Don Bosco High School, Mumbai
                      </p>
                      <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
                        Percentage: 86.20% · 2014 - 2019
                      </p>
                    </HoverCard>
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section style={sectionTight}>
            <Reveal>
              <h2 style={sectionTitle}>Experience</h2>
            </Reveal>

            {/* FEATURED EXPERIENCE */}
            <Reveal delay={0.1}>
              <HoverCard style={featuredExperienceCard}>
                <h3>Data Science Intern</h3>
                <p style={{ opacity: 0.85 }}>
                  Applied Research · Government of India (AIR)
                </p>
                <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>Summer 2024</p>

                <ul style={experienceList}>
                  <li>
                    Worked with real-world datasets to support applied research
                    initiatives.
                  </li>
                  <li>
                    Built and evaluated machine learning models for data-driven
                    analysis.
                  </li>
                  <li>
                    Performed feature engineering and exploratory analysis to
                    improve model performance.
                  </li>
                  <li>
                    Collaborated with researchers to translate problem
                    statements into analytical workflows.
                  </li>
                </ul>
              </HoverCard>
            </Reveal>

            {/* VIEW MORE */}
            <Reveal delay={0.2}>
              <button
                onClick={() => setShowMoreExperience(!showMoreExperience)}
                style={viewMoreButton}
              >
                {showMoreExperience
                  ? "Hide other experiences"
                  : "View other experiences"}
              </button>
            </Reveal>

            {/* SECONDARY EXPERIENCES */}
            {showMoreExperience && (
              <div style={secondaryExperienceGrid}>
                <Reveal>
                  <HoverCard style={secondaryExperienceCard}>
                    <h4>Machine Learning Intern</h4>
                    <p style={{ opacity: 0.8 }}>CodSoft</p>
                    <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
                      Project-based internship
                    </p>
                    <ul
                      style={{
                        marginTop: "1rem",
                        lineHeight: 1.7,
                        opacity: 0.8,
                      }}
                    >
                      <li>Implemented ML models on curated datasets.</li>
                      <li>Worked on data preprocessing and evaluation.</li>
                    </ul>
                  </HoverCard>
                </Reveal>

                <Reveal delay={0.1}>
                  <HoverCard style={secondaryExperienceCard}>
                    <h4>Project-Based Experience</h4>
                    <p style={{ opacity: 0.85 }}>
                      Tata Group · Forage Virtual Internship
                    </p>
                    <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
                      GenAI-Powered Data Analytics Job Simulation
                    </p>

                    <ul
                      style={{
                        marginTop: "1rem",
                        lineHeight: 1.7,
                        opacity: 0.8,
                      }}
                    >
                      <li>
                        Worked on data analysis and problem framing using
                        simulated business scenarios.
                      </li>
                      <li>
                        Applied analytical thinking and GenAI tools to generate
                        insights and recommendations.
                      </li>
                    </ul>
                  </HoverCard>
                </Reveal>
              </div>
            )}
          </section>

          {/* PROJECTS */}
          <section style={projectsSection}>
            <Reveal>
              <h2 style={sectionTitle}>Featured Work</h2>
            </Reveal>

            {/* FEATURED PROJECT */}
            <Reveal delay={0.1}>
              <a
                href="https://github.com/Shashankdotio/Wrist-Wise"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <HoverCard style={featuredProjectCard}>
                  <h3 style={{ fontSize: "1.6rem", marginBottom: "0.6rem" }}>
                    Wrist-Wise
                  </h3>
                  <p style={featuredProjectDesc}>
                    A health analytics project built around Apple Watch and
                    Apple Health data, looking at activity patterns to suggest
                    when to rest or push harder.
                  </p>
                </HoverCard>
              </a>
            </Reveal>

            {/* OTHER PROJECTS */}
            <div style={projectsGridAlt}>
              {[
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
              ].map((proj, i) => (
                <Reveal key={proj.title} delay={0.2 + i * 0.1}>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <HoverCard style={projectCardAlt}>
                      <h4 style={{ marginBottom: "0.4rem" }}>{proj.title}</h4>
                      <p style={projectDescAlt}>{proj.desc}</p>
                    </HoverCard>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* VIEW MORE */}
            <Reveal delay={0.6}>
              <div style={{ textAlign: "center", marginTop: "4rem" }}>
                <a
                  href="https://github.com/Shashankdotio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    opacity: 0.8,
                    textDecoration: "none",
                  }}
                >
                  View more projects on GitHub →
                </a>
              </div>
            </Reveal>
          </section>

          {/* CONTACT */}
          <section style={contactSectionMinimal}>
            <div style={contactLayout}>
              {/* LEFT: TEXT + LINKS */}
              <div>
                <Reveal>
                  <h2 style={sectionTitle}>Contact</h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <p style={contactText}>
                    If you’d like to talk about data, machine learning, or
                    potential opportunities, feel free to reach out.
                  </p>
                </Reveal>

                <div style={contactList}>
                  {/* PRIMARY: EMAIL */}
                  <Reveal delay={0.25}>
                    <a
                      href="mailto:shashankvsdb@gmail.com"
                      style={contactItemPrimary}
                    >
                      <span>Email</span>
                      <span style={contactValue}>shashankvsdb@gmail.com</span>
                    </a>
                  </Reveal>

                  {/* RESUME */}
                  <Reveal delay={0.35}>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={contactItem}
                    >
                      <span>Resume (Technical)</span>
                      <span style={contactValue}>Download PDF</span>
                    </a>
                  </Reveal>

                  {/* LINKEDIN */}
                  <Reveal delay={0.45}>
                    <a
                      href="https://www.linkedin.com/in/shashankkamble97"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={contactItem}
                    >
                      <span>LinkedIn</span>
                      <span style={contactValue}>Professional background</span>
                    </a>
                  </Reveal>

                  {/* GITHUB */}
                  <Reveal delay={0.55}>
                    <a
                      href="https://github.com/Shashankdotio"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={contactItem}
                    >
                      <span>GitHub</span>
                      <span style={contactValue}>Projects & code</span>
                    </a>
                  </Reveal>
                </div>
              </div>

              {/* RIGHT: PHOTO */}
              <Reveal delay={0.25}>
                <div style={{ justifySelf: "middle", marginTop: "3rem" }}>
                  <TiltPhoto src="fin.png" alt="Portrait" />
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

/* ================= STYLES ================= */

const heroSection = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const heroContent = { textAlign: "center" };
const heroTitle = {
  fontSize: "4rem",
  marginBottom: "1rem",
  letterSpacing: "-0.03em",
};
const heroSubtitle = { fontSize: "1.3rem", opacity: 0.75 };

const aboutSection = {
  padding: "10vh 0",
  background: "transparent",
  //"rgba(0,0,0,0.08)",
  //backdropFilter: "blur(10px)"
};
const aboutContainer = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "2vh 4vw",
};
const sectionTitle = {
  fontSize: "2.8rem",
  marginBottom: "2rem",
  letterSpacing: "-0.02em",
};
const bodyText = {
  fontSize: "1.05rem",
  lineHeight: 1.8,
  opacity: 0.8,
  marginBottom: "1.4rem",
};
const aboutLayout = {
  display: "flex",
  gap: "4rem",
  alignItems: "center",
  flexDirection: window.innerWidth < 900 ? "column" : "row",
};
const aboutImage = {
  width: "300px",
  height: "400px",
  borderRadius: "16px",
  objectFit: "cover",
};

const sectionTight = {
  padding: isMobile ? "18vh 8vw" : "15vh 12vw",
  background: "transparent",
  //"rgba(0,0,0,0.08)",
  //backdropFilter: "blur(10px)"
};

const sectionLoose = {
  padding: isMobile ? "18vh 8vw" : "15vh 12vw",
  background: "transparent",
  //"rgba(0,0,0,0.08)",
  //backdropFilter: "blur(10px)"
};

const tiltWrapper = {
  width: "100%",
  maxWidth: "320px",
  borderRadius: "20px",
  overflow: "hidden",
  transition: "transform 0.2s cubic-bezier(.2,.8,.2,1), box-shadow 0.2s ease",
  transformStyle: "preserve-3d",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

const tiltImage = {
  width: "100%",
  borderRadius: "20px",
  display: "block",
};

/* SKILLS */
const skillsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "3rem",
};
const skillCard = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "2rem",
};
const skillTitle = { fontSize: "1.35rem", marginBottom: "1rem" };
const skillList = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontSize: "0.95rem",
  lineHeight: 1.7,
  opacity: 0.85,
};

/* EDUCATION */
const timelineWrapper = {
  position: "relative",
  maxWidth: "900px",
  margin: "6rem auto 0",
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
};
const timelineLine = {
  position: "absolute",
  left: "50%",
  top: 0,
  bottom: 0,
  width: "1px",
  background: "rgba(255,255,255,0.08)",
  transform: "translateX(-50%)",
};
const timelineItem = { display: "flex", justifyContent: "center" };
const timelineCard = {
  width: "380px",
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "0.8rem",
};
const courseworkList = {
  listStyle: "none",
  padding: 0,
  marginTop: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "0.5rem",
  fontSize: "0.9rem",
  opacity: 0.75,
};

const secondaryEducationCard = {
  width: "360px",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "20px",
  padding: "1.8rem",
};

/* EXPERIENCE */
const featuredExperienceCard = {
  maxWidth: "800px",
  margin: "4rem auto 2rem",
  background: "rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "2rem",
};
const experienceList = {
  marginTop: "2rem",
  lineHeight: 1.8,
  opacity: 0.85,
};
const viewMoreButton = {
  background: "none",
  border: "none",
  color: "rgba(255,255,255,0.75)",
  cursor: "pointer",
  margin: "1rem auto",
  display: "block",
};
const secondaryExperienceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "2rem",
};
const secondaryExperienceCard = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "20px",
  padding: "1.8rem",
};

/* PROJECTS */
const projectsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2.5rem",
};
const projectCard = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "2rem",
};
const projectDesc = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  opacity: 0.75,
};
const projectsSection = {
  padding: isMobile ? "18vh 8vw" : "15vh 12vw",
  background: "transparent",
  //"rgba(0,0,0,0.35)",
  //backdropFilter: "blur(12px)"
};
const featuredProjectCard = {
  maxWidth: "900px",
  margin: "4rem auto",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "28px",
  padding: "3rem",
};
const featuredProjectDesc = {
  fontSize: "1.05rem",
  lineHeight: 1.7,
  opacity: 0.85,
};
const projectsGridAlt = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2.5rem",
  marginTop: "4rem",
};
const projectCardAlt = {
  background: "rgba(255,255,255,0.06)",
  borderRadius: "20px",
  padding: "2rem",
};
const projectDescAlt = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  opacity: 0.75,
};
const contactLayout = {
  display: "grid",
  gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1fr 0.7fr",
  gap: "8rem",
  alignItems: "flex-start",
};

const contactSectionMinimal = {
  padding: "22vh 12vw",
  background: "transparent",
  //"rgba(0,0,0,0.4)",
  //backdropFilter: "blur(12px)"
};

const contactText = {
  maxWidth: "560px",
  fontSize: "1rem",
  lineHeight: 1.7,
  opacity: 0.75,
  marginBottom: "3rem",
};

const contactList = {
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
};

const contactItem = {
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
  padding: "0.6rem 0",
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
};

const contactValue = {
  fontSize: "0.95rem",
  opacity: 0.7,
};

const contactImage = {
  width: "100%",
  maxWidth: "360px",
  borderRadius: "18px",
  objectFit: "cover",
  opacity: 0.9,
  justifySelf: "end",
};

const closingLine = {
  fontSize: "1rem",
  opacity: 0.7,
  marginBottom: "3rem",
};

const contactItemPrimary = {
  ...contactItem,
  fontSize: "1.15rem",
  marginBottom: "0.6rem",
};

const photoCaption = {
  fontSize: "0.85rem",
  opacity: 0.6,
  marginTop: "0.6rem",
  textAlign: "right",
};

//blur wrapper
const blurWrapper = {
  backdropFilter: isMobile ? "blur(8px)" : "blur(12px)",
  background: isMobile
    ? "rgba(0,0,0,0.3)"
    : "rgba(0,0,0,0.35)",
};