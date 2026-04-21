import { Reveal } from "../common/Reveal";
import { HoverCard } from "../common/HoverCard";
import { projectsData } from "../../constants/data";
import {
  projectsSection,
  sectionTitle,
  featuredProjectCard,
  featuredProjectDesc,
  projectsGridAlt,
  projectCardAlt,
  projectDescAlt,
} from "../../styles/styles";

export function ProjectsSection() {
  return (
    <section style={projectsSection}>
      <Reveal>
        <h2 style={sectionTitle}>Featured Work</h2>
      </Reveal>

      {/* FEATURED PROJECT */}
      <Reveal delay={0.1}>
        <a
          href={projectsData.featured.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <HoverCard style={featuredProjectCard}>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "0.6rem" }}>
              {projectsData.featured.title}
            </h3>
            <p style={featuredProjectDesc}>{projectsData.featured.desc}</p>
          </HoverCard>
        </a>
      </Reveal>

      {/* OTHER PROJECTS */}
      <div style={projectsGridAlt}>
        {projectsData.projects.map((proj, i) => (
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
  );
}
