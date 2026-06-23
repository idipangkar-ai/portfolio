import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Section from "../components/ui/Section";
import { capabilities } from "../data/portfolio";

export default function CapabilitiesSection() {
  return (
    <Section>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge variant="accent">Capabilities</Badge>
          <h2 className="text-heading mt-4 text-balance">The way I turn beliefs into products.</h2>
          <p className="text-lead mt-6">
            Meaningful technology needs more than execution. It needs clear
            product judgment, systems thinking, and the patience to design trust
            into the experience from the beginning.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <Card level="base" className="min-h-[260px] p-8 md:p-10" interactive>
                <span className="text-caption text-[var(--color-text-tertiary)]">0{index + 1}</span>
                <h3 className="text-title mt-10">{item.title}</h3>
                <p className="text-body mt-4">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
    </Section>
  );
}
