import { useState } from "react";
import { Reveal } from "../common/Reveal";
import { HoverCard } from "../common/HoverCard";
import { experienceData } from "../../constants/data";
import {
  sectionTight,
  sectionTitle,
  featuredExperienceCard,
  experienceList,
  viewMoreButton,
  secondaryExperienceGrid,
  secondaryExperienceCard,
} from "../../styles/styles";

function SecondaryExperienceItem({ exp, delay }) {
  return (
    <Reveal delay={delay}>
      <HoverCard style={secondaryExperienceCard}>
        <h4>{exp.title}</h4>
        <p style={{ opacity: 0.8 }}>{exp.org}</p>
        <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>{exp.period}</p>
        <ul style={{ marginTop: "1rem", lineHeight: 1.7, opacity: 0.8 }}>
          {exp.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </HoverCard>
    </Reveal>
  );
}

export function ExperienceSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section style={sectionTight}>
      <Reveal>
        <h2 style={sectionTitle}>Experience</h2>
      </Reveal>

      {/* FEATURED EXPERIENCE */}
      <Reveal delay={0.1}>
        <HoverCard style={featuredExperienceCard}>
          <h3>{experienceData.featured.title}</h3>
          <p style={{ opacity: 0.85 }}>{experienceData.featured.org}</p>
          <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
            {experienceData.featured.period}
          </p>
          <ul style={experienceList}>
            {experienceData.featured.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </HoverCard>
      </Reveal>

      {/* VIEW MORE BUTTON */}
      <Reveal delay={0.2}>
        <button
          onClick={() => setShowMore(!showMore)}
          style={viewMoreButton}
        >
          {showMore ? "Hide other experiences" : "View other experiences"}
        </button>
      </Reveal>

      {/* SECONDARY EXPERIENCES */}
      {showMore && (
        <div style={secondaryExperienceGrid}>
          {experienceData.secondary.map((exp, i) => (
            <SecondaryExperienceItem key={exp.title} exp={exp} delay={i * 0.1} />
          ))}
        </div>
      )}
    </section>
  );
}
