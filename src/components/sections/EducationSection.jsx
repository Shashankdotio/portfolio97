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
      <div
        onClick={() => onSelect(edu)}
        style={{
          background: "transparent",
          color: "inherit",
          cursor: "pointer",
          textAlign: "left",
          width: "100%",
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect(edu);
          }
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
          <button
            style={{
              appearance: "none",
              background: "transparent",
              border: 0,
              color: "inherit",
              cursor: "pointer",
              fontSize: "0.8rem",
              opacity: 0.5,
              marginTop: "1rem",
              padding: 0,
              fontStyle: "italic",
            }}
            tabIndex={-1}
          >
            Click to explore my journey
          </button>
        </HoverCard>
      </div>
    </Reveal>
  );
}

export function EducationSection() {
  const [selectedEducation, setSelectedEducation] = useState(null);

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
