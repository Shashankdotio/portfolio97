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
  recentProjectCard,
} from "../../styles/styles";

export function ProjectsSection() {
  return (
    <section style={projectsSection}>
      <Reveal>
        <h2 style={sectionTitle}>Things I’ve Built</h2>
      </Reveal>

      {/* FEATURED PROJECT */}
      <Reveal delay={0.1}>
        <a
          href={projectsData.featured.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
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
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                height: "100%",
              }}
            >
              <HoverCard style={projectCardAlt}>
                <h4 style={{ marginBottom: "0.4rem" }}>{proj.title}</h4>
                <p style={projectDescAlt}>{proj.desc}</p>
              </HoverCard>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.5}>
        <div style={recentProjectCard}>
          <div>
            <p style={{ fontSize: "0.8rem", opacity: 0.65, marginBottom: "0.35rem" }}>
              A little something I built recently
            </p>
            <h3 style={{ fontSize: "1.15rem", margin: 0 }}>
              {projectsData.recent.title}
            </h3>
            <p style={{ ...projectDescAlt, margin: "0.35rem 0 0" }}>
              {projectsData.recent.desc}
            </p>
          </div>
          <a
            href={projectsData.recent.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              fontSize: "0.95rem",
              opacity: 0.85,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Check it out →
          </a>
        </div>
      </Reveal>

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
