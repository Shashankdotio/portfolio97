import { useState } from "react";
import { Reveal } from "../common/Reveal";
import { HoverCard } from "../common/HoverCard";
import { experienceData } from "../../constants/data";
import {
  sectionTight,
  sectionTitle,
  currentExperienceGrid,
  currentExperienceCard,
  experienceLogo,
  experienceList,
  viewMoreButton,
  secondaryExperienceGrid,
  secondaryExperienceCard,
} from "../../styles/styles";

function CurrentExperienceItem({ exp, delay }) {
  return (
    <Reveal delay={delay}>
      <HoverCard style={currentExperienceCard}>
        <img src={exp.logo} alt={`${exp.org} logo`} style={experienceLogo} />
        <h3>{exp.title}</h3>
        <p style={{ opacity: 0.85 }}>{exp.org}</p>
        <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>{exp.period}</p>
        <ul style={experienceList}>
          {exp.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </HoverCard>
    </Reveal>
  );
}

function SecondaryExperienceItem({ exp, delay }) {
  return (
    <Reveal delay={delay}>
      <HoverCard style={secondaryExperienceCard}>
        <h4>{exp.title}</h4>
        <p style={{ opacity: 0.8 }}>{exp.org}</p>
        <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>{exp.period}</p>
        <ul
          style={{
            marginTop: "1rem",
            lineHeight: 1.7,
            opacity: 0.8,
            paddingLeft: "1.1rem",
            flex: 1,
          }}
        >
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
        <h2 style={sectionTitle}>Work Journey</h2>
      </Reveal>

      <div style={currentExperienceGrid}>
        <CurrentExperienceItem exp={experienceData.current} delay={0.1} />
        <CurrentExperienceItem exp={experienceData.featured} delay={0.2} />
      </div>

      {/* VIEW MORE BUTTON */}
      <Reveal delay={0.3}>
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
