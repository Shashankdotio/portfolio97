import { isMobile, isMobileLayout } from "../constants/config";

/* ================= HERO STYLES ================= */
export const heroSection = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const heroContent = { textAlign: "center" };

export const heroTitle = {
  fontSize: "4rem",
  marginBottom: "1rem",
  letterSpacing: "-0.03em",
};

export const heroSubtitle = { fontSize: "1.3rem", opacity: 0.75 };

/* ================= ABOUT STYLES ================= */
export const aboutSection = {
  padding: "10vh 0",
  background: "transparent",
};

export const aboutContainer = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "2vh 4vw",
};

export const sectionTitle = {
  fontSize: "2.8rem",
  marginBottom: "2rem",
  letterSpacing: "-0.02em",
};

export const bodyText = {
  fontSize: "1.05rem",
  lineHeight: 1.8,
  opacity: 0.8,
  marginBottom: "1.4rem",
};

export const aboutLayout = {
  display: "flex",
  gap: "4rem",
  alignItems: "center",
  flexDirection: isMobileLayout ? "column" : "row",
};

export const aboutImage = {
  width: "300px",
  height: "400px",
  borderRadius: "16px",
  objectFit: "cover",
};

/* ================= SECTION STYLES ================= */
export const sectionTight = {
  padding: isMobile ? "18vh 8vw" : "15vh 12vw",
  background: "transparent",
};

export const sectionLoose = {
  padding: isMobile ? "18vh 8vw" : "15vh 12vw",
  background: "transparent",
};

/* ================= TILT PHOTO STYLES ================= */
export const tiltWrapper = {
  width: "100%",
  maxWidth: "320px",
  borderRadius: "20px",
  overflow: "hidden",
  transition: "transform 0.2s cubic-bezier(.2,.8,.2,1), box-shadow 0.2s ease",
  transformStyle: "preserve-3d",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

export const tiltImage = {
  width: "100%",
  borderRadius: "20px",
  display: "block",
};

/* ================= SKILLS STYLES ================= */
export const skillsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "3rem",
};

export const skillCard = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "2rem",
};

export const skillTitle = { fontSize: "1.35rem", marginBottom: "1rem" };

export const skillList = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontSize: "0.95rem",
  lineHeight: 1.7,
  opacity: 0.85,
};

/* ================= TIMELINE/EDUCATION STYLES ================= */
export const educationLayout = {
  display: "grid",
  gridTemplateColumns: isMobileLayout ? "1fr" : "minmax(300px, 430px) minmax(0, 1fr)",
  alignItems: "start",
  gap: isMobileLayout ? "3rem" : "4rem",
  maxWidth: "1120px",
  margin: "6rem 0 0",
};

export const educationCardsColumn = {
  width: "100%",
};

export const educationDetailColumn = {
  position: isMobileLayout ? "static" : "sticky",
  top: isMobileLayout ? "auto" : "12vh",
  width: "100%",
};

export const timelineWrapper = {
  position: "relative",
  width: "100%",
  maxWidth: "430px",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

export const timelineLine = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "1px",
  background: "rgba(255,255,255,0.08)",
};

export const timelineItem = { display: "flex", justifyContent: "center" };

export const timelineCard = {
  width: "100%",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid transparent",
  borderRadius: "20px",
  padding: "1.5rem",
};

export const courseworkList = {
  listStyle: "none",
  padding: 0,
  marginTop: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "0.5rem",
  fontSize: "0.9rem",
  opacity: 0.75,
};

export const secondaryEducationCard = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid transparent",
  borderRadius: "20px",
  padding: "1.8rem",
};

export const activeEducationCard = {
  background: "rgba(255,255,255,0.14)",
  border: "1px solid rgba(255,255,255,0.22)",
};

/* ================= EXPANDED EDUCATION MODAL STYLES ================= */
export const expandedModalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(4px)",
  zIndex: 100,
  animation: "fadeIn 0.3s ease-out",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: isMobile ? "1rem" : "5vw",
};

export const expandedModalCard = {
  position: "relative",
  background: "rgba(255,255,255,0.12)",
  borderRadius: "24px",
  maxWidth: "620px",
  width: "100%",
  maxHeight: isMobileLayout ? "none" : "78vh",
  overflow: "auto",
  overflowX: "hidden",
  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  animation: "scaleIn 0.4s cubic-bezier(.16,1,.3,1)",
  border: "1px solid rgba(255,255,255,0.1)",
};

export const expandedModalHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "1.5rem",
};

export const expandedModalTitle = {
  fontSize: isMobile ? "1.6rem" : "1.9rem",
  marginBottom: "0.5rem",
  letterSpacing: "-0.02em",
};

export const expandedModalCloseButton = {
  background: "none",
  border: "none",
  color: "rgba(255,255,255,0.7)",
  fontSize: "1.8rem",
  cursor: "pointer",
  padding: "0",
  width: "2rem",
  height: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  transition: "color 0.2s ease",
};

export const expandedModalContent = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export const expandedModalField = {
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};

export const expandedModalFieldLabel = {
  fontSize: "0.85rem",
  opacity: 0.7,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export const expandedModalFieldValue = {
  fontSize: "1.05rem",
  opacity: 0.95,
  lineHeight: 1.6,
};

export const expandedModalImage = {
  width: "100%",
  height: isMobile ? "250px" : "320px",
  objectFit: "cover",
};

export const expandedModalBody = {
  padding: "2.5rem",
};

export const expandedModalMemory = {
  fontSize: "1rem",
  lineHeight: 1.8,
  opacity: 0.9,
  marginTop: "1.5rem",
};

/* ================= EXPERIENCE STYLES ================= */
export const featuredExperienceCard = {
  maxWidth: "800px",
  margin: "4rem auto 2rem",
  background: "rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "2rem",
};

export const experienceList = {
  marginTop: "2rem",
  lineHeight: 1.8,
  opacity: 0.85,
};

export const viewMoreButton = {
  background: "none",
  border: "none",
  color: "rgba(255,255,255,0.75)",
  cursor: "pointer",
  margin: "1rem auto",
  display: "block",
};

export const secondaryExperienceGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "2rem",
};

export const secondaryExperienceCard = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "20px",
  padding: "1.8rem",
};

/* ================= PROJECTS STYLES ================= */
export const projectsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2.5rem",
};

export const projectCard = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "2rem",
};

export const projectDesc = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  opacity: 0.75,
};

export const projectsSection = {
  padding: isMobile ? "18vh 8vw" : "15vh 12vw",
  background: "transparent",
};

export const featuredProjectCard = {
  maxWidth: "900px",
  margin: "4rem auto",
  background: "rgba(255,255,255,0.1)",
  borderRadius: "28px",
  padding: "3rem",
};

export const featuredProjectDesc = {
  fontSize: "1.05rem",
  lineHeight: 1.7,
  opacity: 0.85,
};

export const projectsGridAlt = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2.5rem",
  marginTop: "4rem",
};

export const projectCardAlt = {
  background: "rgba(255,255,255,0.06)",
  borderRadius: "20px",
  padding: "2rem",
};

export const projectDescAlt = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  opacity: 0.75,
};

/* ================= CONTACT STYLES ================= */
export const contactLayout = {
  display: "grid",
  gridTemplateColumns: isMobileLayout ? "1fr" : "1fr 0.7fr",
  gap: "8rem",
  alignItems: "flex-start",
};

export const contactSectionMinimal = {
  padding: "22vh 12vw",
  background: "transparent",
};

export const contactText = {
  maxWidth: "560px",
  fontSize: "1rem",
  lineHeight: 1.7,
  opacity: 0.75,
  marginBottom: "3rem",
};

export const contactList = {
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
};

export const contactItem = {
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
  padding: "0.6rem 0",
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
};

export const contactValue = {
  fontSize: "0.95rem",
  opacity: 0.7,
};

export const contactImage = {
  width: "100%",
  maxWidth: "360px",
  borderRadius: "18px",
  objectFit: "cover",
  opacity: 0.9,
  justifySelf: "end",
};

export const closingLine = {
  fontSize: "1rem",
  opacity: 0.7,
  marginBottom: "3rem",
};

export const contactItemPrimary = {
  ...contactItem,
  fontSize: "1.15rem",
  marginBottom: "0.6rem",
};

export const photoCaption = {
  fontSize: "0.85rem",
  opacity: 0.6,
  marginTop: "0.6rem",
  textAlign: "right",
};

/* ================= BLUR WRAPPER ================= */
export const blurWrapper = {
  backdropFilter: isMobile ? "blur(8px)" : "blur(12px)",
  background: isMobile
    ? "rgba(0,0,0,0.3)"
    : "rgba(0,0,0,0.35)",
};
