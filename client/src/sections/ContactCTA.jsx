import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import Surface from "../components/ui/Surface";

export default function ContactCTA() {
  return (
    <Section className="py-10">
      <Reveal>
        <Surface level="floating" radius="2xl" className="overflow-hidden p-8 md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <Badge variant="accent">Collaboration</Badge>
              <h2 className="text-heading mt-5 max-w-3xl">
                Interested in privacy-first technology, product ideas, or better communication systems?
              </h2>
            </div>
            <Button to="/contact">
              Start the conversation
            </Button>
          </div>
        </Surface>
      </Reveal>
    </Section>
  );
}
