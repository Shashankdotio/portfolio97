import { Reveal } from "../common/Reveal";
import { HoverCard } from "../common/HoverCard";
import { skillsData } from "../../constants/data";
import {
  sectionTight,
  skillsGrid,
  skillsRow,
  skillCard,
  skillTitle,
  skillList,
  skillItem,
  sectionTitle,
} from "../../styles/styles";

export function FocusAreasSection() {
  const skillRows = [
    skillsData.slice(0, 3),
    skillsData.slice(3, 6),
  ];

  return (
    <section style={sectionTight}>
      <Reveal>
        <h2 style={sectionTitle}>My Toolkit</h2>
      </Reveal>

      <div style={skillsGrid}>
        {skillRows.map((row, rowIndex) => (
          <div key={`skill-row-${rowIndex}`} style={skillsRow}>
            {row.map((group, itemIndex) => (
              <Reveal
                key={group.title}
                delay={(rowIndex * 3 + itemIndex) * 0.1}
              >
                <HoverCard style={skillCard}>
                  <h3 style={skillTitle}>{group.title}</h3>
                  <ul style={skillList}>
                    {group.items.map((item) => (
                      <li key={item} style={skillItem}>{item}</li>
                    ))}
                  </ul>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
