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

export function ExpandedCertificationModal({ certification, onClose }) {
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
      {certification.image && (
        <img
          src={certification.image}
          alt={certification.title}
          style={expandedModalImage}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      )}

      <div style={expandedModalBody}>
        <div style={expandedModalHeader}>
          <div>
            <h2 style={expandedModalTitle}>{certification.title}</h2>
          </div>
          <button
            onClick={onClose}
            style={expandedModalCloseButton}
            aria-label="Close certification details"
          >
            x
          </button>
        </div>

        <div style={expandedModalContent}>
          <div style={expandedModalField}>
            <span style={expandedModalFieldLabel}>Provider</span>
            <p style={expandedModalFieldValue}>{certification.provider}</p>
          </div>

          <div style={expandedModalField}>
            <span style={expandedModalFieldLabel}>Description</span>
            <p style={expandedModalFieldValue}>{certification.description}</p>
          </div>

          {certification.skills && certification.skills.length > 0 && (
            <div style={expandedModalField}>
              <span style={expandedModalFieldLabel}>Skills</span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.9rem",
                      padding: "0.4rem 0.8rem",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      opacity: 0.85,
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
