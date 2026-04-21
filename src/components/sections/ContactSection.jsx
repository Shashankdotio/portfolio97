import { Reveal } from "../common/Reveal";
import { TiltPhoto } from "../common/TiltPhoto";
import { contactData } from "../../constants/data";
import {
  contactSectionMinimal,
  contactLayout,
  sectionTitle,
  contactText,
  contactList,
  contactItem,
  contactItemPrimary,
  contactValue,
} from "../../styles/styles";

function ContactLink({ link }) {
  const style = link.isPrimary ? contactItemPrimary : contactItem;

  return (
    <Reveal delay={link.delay}>
      <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} style={style}>
        <span>{link.label}</span>
        <span style={contactValue}>{link.value}</span>
      </a>
    </Reveal>
  );
}

export function ContactSection() {
  return (
    <section style={contactSectionMinimal}>
      <div style={contactLayout}>
        {/* LEFT: TEXT + LINKS */}
        <div>
          <Reveal>
            <h2 style={sectionTitle}>Contact</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p style={contactText}>
              If you'd like to talk about data, machine learning, or
              potential opportunities, feel free to reach out.
            </p>
          </Reveal>

          <div style={contactList}>
            {contactData.links.map((link) => (
              <ContactLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        {/* RIGHT: PHOTO */}
        <Reveal delay={0.25}>
          <div style={{ justifySelf: "middle", marginTop: "3rem" }}>
            <TiltPhoto src="fin.png" alt="Portrait" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
