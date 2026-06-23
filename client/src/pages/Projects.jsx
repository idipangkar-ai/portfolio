import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Section from "../components/ui/Section";
import { featuredProjects } from "../data/portfolio";
import ProjectShowcase from "../sections/ProjectShowcase";
import ContactCTA from "../sections/ContactCTA";

export default function Projects() {
  return (
    <>
      <Section className="pt-36">
        <Reveal className="max-w-5xl">
          <Badge variant="accent">Product Work</Badge>
          <h1 className="text-heading mt-5 text-balance">
            A flagship case study in building from belief to system.
          </h1>
          <p className="text-lead mt-7 max-w-2xl">
            KuthaKo is the current product expression of the thesis: communication
            should respect context, protect attention, and let people control
            who can reach them.
          </p>
        </Reveal>
      </Section>

      <ProjectShowcase />

      <Section className="pt-0" containerClassName="grid gap-5 md:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.07}>
            <Card level="base" className="flex min-h-[360px] flex-col justify-between p-7" interactive>
              <div>
                <Badge variant="accent">{project.status}</Badge>
                <h2 className="text-title mt-5">{project.title}</h2>
                <p className="text-body mt-5">{project.summary}</p>
              </div>
              <div className="mt-8">
                <div className="grid grid-cols-3 gap-2">
                  {project.metrics.map((metric) => (
                    <Badge key={metric} className="justify-center text-center">
                      {metric}
                    </Badge>
                  ))}
                </div>
                <Button
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                  variant="secondary"
                  className="mt-6 w-full"
                >
                  Study the system
                </Button>
              </div>
            </Card>
          </Reveal>
        ))}
      </Section>

      <ContactCTA />
    </>
  );
}
