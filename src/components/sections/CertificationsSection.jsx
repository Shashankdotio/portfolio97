import { useState } from "react";
import { Reveal } from "../common/Reveal";
import { HoverCard } from "../common/HoverCard";
import { CertificateImageModal } from "./CertificateImageModal";
import { certificationsData } from "../../constants/data";
import {
  sectionTight,
  sectionTitle,
  certificationsGrid,
  certificationCard,
  certificationImageWrapper,
  certificationImage,
  certificationContent,
  certificationTitle,
  certificationProvider,
  certificationDescription,
  certificationSkills,
  skillTag,
  viewMoreButton,
} from "../../styles/styles";

function CertificationCard({ cert, onImageClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Reveal delay={cert.delay}>
      <div
        style={{
          background: "transparent",
        }}
      >
        <HoverCard style={certificationCard}>
          <div
            style={certificationImageWrapper}
            onClick={() => onImageClick(cert.image)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onImageClick(cert.image);
              }
            }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                ...certificationImage,
                opacity: imageLoaded ? 1 : 0.7,
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onLoad={() => setImageLoaded(true)}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          <div style={certificationContent}>
            <h3 style={certificationTitle}>{cert.title}</h3>
            <p style={certificationProvider}>{cert.provider}</p>
            <p style={certificationDescription}>{cert.description}</p>

            <div style={certificationSkills}>
              {cert.skills.map((skill) => (
                <span key={skill} style={skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </HoverCard>
      </div>
    </Reveal>
  );
}

export function CertificationsSection() {
  const featured = certificationsData.filter((cert) => cert.featured);
  const others = certificationsData.filter((cert) => !cert.featured);
  const [expandedCertImage, setExpandedCertImage] = useState(null);
  const [showOthers, setShowOthers] = useState(false);

  return (
    <section style={sectionTight}>
      <Reveal>
        <h2 style={sectionTitle}>Certifications & Achievements</h2>
      </Reveal>

      {featured.length > 0 && (
        <>
          <Reveal>
            <p
              style={{
                opacity: 0.7,
                fontSize: "0.95rem",
                marginTop: "0.5rem",
                marginBottom: "2rem",
              }}
            >
              Featured
            </p>
          </Reveal>
          <div style={certificationsGrid}>
            {featured.map((cert) => (
              <CertificationCard
                key={cert.title}
                cert={cert}
                onImageClick={setExpandedCertImage}
              />
            ))}
          </div>
        </>
      )}

      {others.length > 0 && (
        <>
          {showOthers && (
            <>
              <Reveal>
                <p
                  style={{
                    opacity: 0.7,
                    fontSize: "0.95rem",
                    marginTop: "4rem",
                    marginBottom: "2rem",
                  }}
                >
                  Other Certifications
                </p>
              </Reveal>
              <div style={certificationsGrid}>
                {others.map((cert) => (
                  <CertificationCard
                    key={cert.title}
                    cert={cert}
                    onImageClick={setExpandedCertImage}
                  />
                ))}
              </div>
            </>
          )}

          <button
            onClick={() => setShowOthers(!showOthers)}
            style={viewMoreButton}
          >
            {showOthers ? "Show less" : `View more (${others.length})`}
          </button>
        </>
      )}

      {expandedCertImage && (
        <CertificateImageModal
          certImage={expandedCertImage}
          onClose={() => setExpandedCertImage(null)}
        />
      )}
    </section>
  );
}



