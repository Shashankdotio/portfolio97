import { useEffect, useRef, useState } from "react";
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
  educationHint,
  educationHintHand,
  educationHintArrow,
  educationHintSection,
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
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <div
          onClick={() => onSelect(edu)}
          style={{
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
                color: "white",
                cursor: "pointer",
                fontSize: "0.85rem",
                fontWeight: 600,
                opacity: 0.95,
                marginTop: "1rem",
                padding: "0.45rem 0.7rem",
                borderRadius: "999px",
                fontStyle: "normal",
              }}
              tabIndex={-1}
            >
              Explore story →
            </button>
          </HoverCard>
        </div>

      </div>
    </Reveal>
  );
}

export function EducationSection() {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [showHint, setShowHint] = useState(true);
  const educationDetailRef = useRef(null);

  useEffect(() => {
    if (!selectedEducation || window.innerWidth >= 900) return;

    educationDetailRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }, [selectedEducation]);

  const handleSelectEducation = (edu) => {
    setShowHint(false);
    setSelectedEducation(edu);
  };

  return (
    <section style={sectionTight}>
      <Reveal>
        <h2 style={sectionTitle}>Through the Years</h2>
      </Reveal>
      {showHint && (
        <div style={educationHintSection}>
          <div style={educationHint}>
            <span style={educationHintHand}>☞</span>
            <span>Tap any card to explore my story</span>
            <span style={educationHintArrow}>↓</span>
          </div>
        </div>
      )}

      <div style={educationLayout}>
        <div style={educationCardsColumn}>
          <div style={timelineWrapper}>
            <div style={timelineLine} />
            {educationData.map((edu) => (
              <EducationCard
                key={edu.title}
                edu={edu}
                isActive={selectedEducation?.title === edu.title}
                onSelect={handleSelectEducation}
              />
            ))}
          </div>
        </div>

        <div
          ref={educationDetailRef}
          style={{ ...educationDetailColumn, scrollMarginTop: "1.5rem" }}
        >
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
