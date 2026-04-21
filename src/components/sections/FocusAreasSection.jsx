import { Reveal } from "../common/Reveal";
import { HoverCard } from "../common/HoverCard";
import { skillsData } from "../../constants/data";
import {
  sectionTight,
  skillsGrid,
  skillCard,
  skillTitle,
  skillList,
  sectionTitle,
} from "../../styles/styles";

export function FocusAreasSection() {
  return (
    <section style={sectionTight}>
      <Reveal>
        <h2 style={sectionTitle}>Focus Areas</h2>
      </Reveal>

      <div style={skillsGrid}>
        {skillsData.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.1}>
            <HoverCard style={skillCard}>
              <h3 style={skillTitle}>{group.title}</h3>
              <ul style={skillList}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </HoverCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
