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
          Building intelligent systems with data and code.
        </p>
      </div>
    </section>
  );
}
