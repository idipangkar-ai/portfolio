import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Section from "../components/ui/Section";
import Surface from "../components/ui/Surface";
import ContactCTA from "../sections/ContactCTA";
import { principles, technologies, timeline } from "../data/portfolio";

function SpatialSignature() {
  return (
    <Surface level="glass" radius="xl" className="relative grid h-[420px] overflow-hidden place-items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(var(--color-accent-rgb)/0.18),transparent_18rem)]" />
      <div className="relative grid h-52 w-52 place-items-center rounded-full bg-[linear-gradient(145deg,rgb(var(--color-surface-rgb)/0.22),rgb(var(--color-surface-rgb)/0.035))] shadow-[var(--shadow-glass)]">
        <div className="h-32 w-32 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] backdrop-blur-2xl" />
        <span className="text-title absolute font-black text-[var(--color-text-tertiary)]">DH</span>
      </div>
    </Surface>
  );
}

export default function About() {
  return (
    <>
      <Section className="pt-36" containerClassName="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <Badge variant="accent">Founder Story</Badge>
          <h1 className="text-heading mt-5 max-w-4xl text-balance">
            I am building from a simple belief: visibility should never become permission.
          </h1>
          <p className="text-lead mt-7 max-w-2xl">
            My work sits between product thinking, systems thinking, and the
            human side of communication. I care about the rules technology
            normalizes, especially who gets access to whom and on what terms.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <SpatialSignature />
        </Reveal>
      </Section>

      <Section className="pt-0" containerClassName="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="sticky top-28">
            <Badge variant="accent">Beliefs</Badge>
            <h2 className="text-title mt-4">The principles behind the founder journey.</h2>
          </div>
        </Reveal>
        <div className="grid gap-4">
          {timeline.map((item, index) => (
            <Reveal key={`${item.period}-${item.title}`} delay={index * 0.06}>
              <Card level="base" className="p-6 md:p-8">
                <Badge variant="accent">{item.period}</Badge>
                <h3 className="text-title mt-4">{item.title}</h3>
                <p className="text-caption mt-2 text-[var(--color-text-tertiary)]">{item.organization}</p>
                <p className="text-body mt-5">{item.detail}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal className="max-w-3xl">
          <Badge variant="accent">Operating System</Badge>
          <h2 className="text-heading mt-4 text-balance">How the thesis turns into product judgment.</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </Reveal>
      </Section>

      <Section className="pt-0" containerClassName="grid gap-4 md:grid-cols-2">
        {principles.map((item, index) => (
          <Reveal key={item} delay={index * 0.05}>
            <Card level="elevated" className="p-8 md:p-10">
              <span className="text-caption text-[var(--color-text-tertiary)]">Principle {index + 1}</span>
              <p className="text-title mt-8">{item}</p>
            </Card>
          </Reveal>
        ))}
      </Section>

      <ContactCTA />
    </>
  );
}
