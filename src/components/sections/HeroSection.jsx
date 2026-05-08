import { heroSection, heroContent, heroTitle, heroSubtitle } from "../../styles/styles";
import { isMobile } from "../../constants/config";

export function HeroSection() {
  return (
    <section style={heroSection}>
      <div style={heroContent}>
        <h1
          style={{
            ...heroTitle,
            fontSize: isMobile ? "2.6rem" : "4rem",
          }}
        >
          Shashank Kamble
        </h1>
        <p style={heroSubtitle}>
            Making computers think a little harder than I do at 2am.
        </p>
      </div>
    </section>
  );
}
