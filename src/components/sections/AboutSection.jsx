import { Reveal } from "../common/Reveal";
import {
  aboutSection,
  aboutContainer,
  aboutLayout,
  aboutImage,
  sectionTitle,
  bodyText,
} from "../../styles/styles";

export function AboutSection() {
  return (
    <section style={aboutSection}>
      <div style={aboutContainer}>
        <Reveal>
          <div style={aboutLayout}>
            <img src="me.png" alt="Portrait" style={aboutImage} />
            <div>
              <h2 style={sectionTitle}>About</h2>
              <p style={bodyText}>
                I work with data and machine learning, often on problems
                where the answers aren't obvious.
              </p>
              <p style={bodyText}>
                I like understanding why something works, not just that it
                works.
              </p>
              <p style={bodyText}>
                Outside of tech, I also spend time on creative work like
                graphic design, editing, and cinematography.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
