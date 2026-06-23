import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Section from "../components/ui/Section";
import Surface from "../components/ui/Surface";
import { principles } from "../data/portfolio";

export default function AboutPreview() {
  return (
    <Section containerClassName="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <Surface level="glass" radius="xl" className="relative overflow-hidden p-8 md:p-10">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[rgb(var(--color-accent-rgb)/0.12)] blur-3xl" />
            <Badge variant="accent">Beliefs</Badge>
            <h2 className="text-heading mt-8">
              The work starts with a human problem, not a product category.
            </h2>
            <p className="text-body mt-8">
              Communication systems shape behavior. When they make people instantly
              reachable by default, they quietly normalize interruption. I believe
              access should carry context, consent, and a clear signal of trust.
            </p>
            <Button to="/about" variant="secondary" className="mt-8">
              Read the beliefs
            </Button>
          </Surface>
        </Reveal>

        <div className="grid gap-4">
          {principles.map((item, index) => (
            <Reveal key={item} delay={index * 0.07}>
              <Card level="base" interactive>
                <p className="text-body font-semibold text-[var(--color-text-primary)]">{item}</p>
              </Card>
            </Reveal>
          ))}
        </div>
    </Section>
  );
}
