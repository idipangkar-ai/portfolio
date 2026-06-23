import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import Section from "../components/ui/Section";
import Surface from "../components/ui/Surface";
import { productQuestions } from "../data/portfolio";

const labels = ["Problem", "Decision", "Principle"];

export default function ProductQuestionsSection() {
  return (
    <Section className="pt-0">
      <Reveal className="max-w-4xl">
        <Badge variant="accent">Decision Journal</Badge>
        <h2 className="text-heading mt-5 text-balance">
          Questions that shaped KuthaKo.
        </h2>
        <p className="text-lead mt-7 max-w-3xl">
          Each rule came from a founder question about trust, pressure, and the
          shape of consent. The system was designed by deciding what should not
          be possible, not only what should be easy.
        </p>
      </Reveal>

      <div className="mt-16">
        <Surface level="glass" radius="2xl" className="overflow-hidden">
          <div className="divide-y divide-[var(--color-border)]">
            {productQuestions.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.05}>
                <article className="grid gap-8 p-7 md:grid-cols-[0.34fr_0.66fr] md:p-10 lg:p-12">
                  <div>
                    <span className="text-caption text-[var(--color-text-tertiary)]">
                      Decision {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-title mt-4 max-w-sm">{item.question}</h3>
                  </div>

                  <div className="grid gap-6">
                    {[item.problem, item.decision, item.principle].map((copy, copyIndex) => (
                      <div key={labels[copyIndex]} className="grid gap-2 md:grid-cols-[7rem_1fr]">
                        <p className="text-caption text-[var(--color-text-primary)]">{labels[copyIndex]}</p>
                        <p className="text-body">{copy}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Surface>
      </div>
    </Section>
  );
}
