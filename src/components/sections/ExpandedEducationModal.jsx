import { useEffect, useRef } from "react";
import {
  expandedModalCard,
  expandedModalHeader,
  expandedModalTitle,
  expandedModalCloseButton,
  expandedModalContent,
  expandedModalField,
  expandedModalFieldLabel,
  expandedModalFieldValue,
  expandedModalImage,
  expandedModalBody,
  expandedModalMemory,
} from "../../styles/styles";

export function ExpandedEducationModal({ education, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div style={expandedModalCard} ref={modalRef}>
      {education.image && (
        <img
          src={education.image}
          alt={education.school}
          style={expandedModalImage}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      )}

      <div style={expandedModalBody}>
        <div style={expandedModalHeader}>
          <div>
            <h2 style={expandedModalTitle}>{education.title}</h2>
          </div>
          <button
            onClick={onClose}
            style={expandedModalCloseButton}
            aria-label="Close education details"
          >
            x
          </button>
        </div>

        <div style={expandedModalContent}>
          <div style={expandedModalField}>
            <span style={expandedModalFieldLabel}>Institution</span>
            <p style={expandedModalFieldValue}>{education.school}</p>
          </div>

          {education.focus && (
            <div style={expandedModalField}>
              <span style={expandedModalFieldLabel}>Specialization</span>
              <p style={expandedModalFieldValue}>{education.focus}</p>
            </div>
          )}

          <div style={expandedModalField}>
            <span style={expandedModalFieldLabel}>Period</span>
            <p style={expandedModalFieldValue}>{education.period}</p>
          </div>
        </div>

        {education.memory && (
          <div style={expandedModalMemory}>
            <p style={{ marginBottom: 0 }}>{education.memory}</p>
          </div>
        )}
      </div>
    </div>
  );
}
