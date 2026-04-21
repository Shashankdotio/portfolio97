import { useState } from "react";
import { Reveal } from "../common/Reveal";
import { HoverCard } from "../common/HoverCard";
import { ExpandedEducationModal } from "./ExpandedEducationModal";
import { educationData } from "../../constants/data";
import {
  sectionTight,
  sectionTitle,
  educationLayout,
  educationCardsColumn,
  educationDetailColumn,
  timelineWrapper,
  timelineLine,
  timelineCard,
  secondaryEducationCard,
  activeEducationCard,
} from "../../styles/styles";

function EducationCard({ edu, isActive, onSelect }) {
  const isSecondary = !edu.focus;
  const baseCardStyle = isSecondary ? secondaryEducationCard : timelineCard;
  const cardStyle = isActive
    ? { ...baseCardStyle, ...activeEducationCard }
    : baseCardStyle;

  return (
    <Reveal delay={edu.delay}>
      <button
        onClick={() => onSelect(edu)}
        style={{
          appearance: "none",
          background: "transparent",
          border: 0,
          color: "inherit",
          cursor: "pointer",
          padding: 0,
          textAlign: "left",
          width: "100%",
        }}
        aria-pressed={isActive}
      >
        <HoverCard style={cardStyle}>
          <h3>{edu.title}</h3>
          <p style={{ opacity: 0.85 }}>{edu.school}</p>
          {edu.focus && (
            <p style={{ fontSize: "0.95rem", opacity: 0.7 }}>{edu.focus}</p>
          )}
          <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>{edu.period}</p>
          <p
            style={{
              fontSize: "0.8rem",
              opacity: 0.5,
              marginTop: "1rem",
              fontStyle: "italic",
            }}
          >
            Click to explore my journey
          </p>
        </HoverCard>
      </button>
    </Reveal>
  );
}

export function EducationSection() {
  const [selectedEducation, setSelectedEducation] = useState(educationData[0]);

  return (
    <section style={sectionTight}>
      <Reveal>
        <h2 style={sectionTitle}>Education</h2>
      </Reveal>

      <div style={educationLayout}>
        <div style={educationCardsColumn}>
          <div style={timelineWrapper}>
            <div style={timelineLine} />
            {educationData.map((edu) => (
              <EducationCard
                key={edu.title}
                edu={edu}
                isActive={selectedEducation?.title === edu.title}
                onSelect={setSelectedEducation}
              />
            ))}
          </div>
        </div>

        <div style={educationDetailColumn}>
          {selectedEducation && (
            <ExpandedEducationModal
              education={selectedEducation}
              onClose={() => setSelectedEducation(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
