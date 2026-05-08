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
              <h2 style={sectionTitle}>About me</h2>
              <p style={bodyText}>
                A lot of my time goes into data, machine learning, and trying to figure out why my code worked yesterday but not today.
              </p>
              <p style={bodyText}>
                I enjoy solving problems, especially the kind where there’s no clear answer from the start.
              </p>
              <p style={bodyText}>
                Outside of tech, I’m usually doing something creative like editing videos, designing, or obsessing over visuals for way too long.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
