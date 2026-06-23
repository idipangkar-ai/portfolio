import { FiExternalLink } from "react-icons/fi";
import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import Surface from "../components/ui/Surface";
import { featuredProjects } from "../data/portfolio";

export default function ProjectShowcase({ limit }) {
  const projects = limit ? featuredProjects.slice(0, limit) : featuredProjects;

  return (
    <Section>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Badge variant="accent">Product Work</Badge>
            <h2 className="text-heading mt-4 max-w-3xl text-balance">
              The product work is where the beliefs become systems.
            </h2>
          </div>
          <p className="text-lead max-w-md">
            The flagship case study explores why the current communication model
            feels broken, what insight led to a new approach, and how consent can
            become part of the product architecture.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <Surface as="article" level="elevated" radius="xl" className="group overflow-hidden md:grid md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[330px] overflow-hidden bg-[var(--color-background-soft)] md:min-h-[520px]">
                  <img
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover opacity-88 transition duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-background-rgb)/0.5)] via-transparent to-transparent" />
                  <Badge className="absolute left-6 top-6 backdrop-blur-xl">{project.status}</Badge>
                </div>

                <div className="flex flex-col justify-between p-8 md:p-12">
                  <div>
                    <Badge variant="accent">{project.eyebrow}</Badge>
                    <h3 className="text-title mt-5">
                      {project.title}
                    </h3>
                    <p className="text-body mt-6">{project.summary}</p>
                    <p className="text-caption mt-5 font-medium normal-case tracking-normal text-[var(--color-text-tertiary)]">{project.story}</p>
                  </div>

                  <div className="mt-10">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-[var(--color-border)] pt-6">
                      <span className="text-caption text-[var(--color-text-tertiary)]">{project.year}</span>
                      <Button
                        href={project.href}
                        target={project.href.startsWith("http") ? "_blank" : undefined}
                        rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                        variant="ghost"
                        icon={false}
                        className="px-3 py-2"
                      >
                        Explore project <FiExternalLink aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Surface>
            </Reveal>
          ))}
        </div>
    </Section>
  );
}
