import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import Surface from "../components/ui/Surface";
import { siteMeta } from "../constants/site";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("idle");
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Share your name so the conversation starts clearly.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (form.message.trim().length < 20) {
      nextErrors.message = "Share a little more context, at least 20 characters.";
    }
    return nextErrors;
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm(initialForm);
  };

  return (
    <Section className="min-h-screen pt-36" containerClassName="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
      <Reveal>
        <Badge variant="accent">Contact</Badge>
        <h1 className="text-heading mt-5 text-balance">Let's talk about products, systems, and better communication.</h1>
        <p className="text-lead mt-7">
          Reach out for thoughtful conversations about privacy-first technology,
          product ideas, collaboration, or the future of consent-based access.
        </p>

        <div className="text-body mt-10 grid gap-4">
          <a href={`mailto:${siteMeta.email}`} className="transition hover:text-[var(--color-text-primary)]">
            {siteMeta.email}
          </a>
          <span>{siteMeta.phoneLabel}</span>
          <span>{siteMeta.location}</span>
        </div>

        <div className="mt-10">
          <Button href={`mailto:${siteMeta.email}`} variant="secondary">
            Start by email
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <Surface as="form" onSubmit={submit} level="glass" radius="xl" className="p-6 md:p-9" noValidate>
          <div className="grid gap-5">
            <Field
              label="Name"
              name="name"
              value={form.name}
              error={errors.name}
              onChange={updateField}
              placeholder="Your name"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={updateField}
              placeholder="you@example.com"
            />
            <Field
              label="Conversation"
              name="message"
              value={form.message}
              error={errors.message}
              onChange={updateField}
              placeholder="Share what you want to discuss: a product idea, privacy-first technology, collaboration, or a communication problem worth rethinking."
              textarea
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-caption text-[var(--color-text-tertiary)]">{form.message.length} characters</p>
            <Button type="submit" icon={false}>
              Send message
            </Button>
          </div>

          {status === "success" && (
            <div className="text-caption mt-6 flex items-start gap-3 rounded-[var(--radius-lg)] bg-[var(--color-surface-elevated)] p-4 text-[var(--color-success)]">
              <FiCheckCircle className="mt-0.5" />
              <p>
                Message checked locally. Connect a secure form service or API endpoint before using this in production.
              </p>
            </div>
          )}
        </Surface>
      </Reveal>
    </Section>
  );
}

function Field({ label, name, value, onChange, error, textarea, type = "text", placeholder }) {
  const classes = [
    "mt-2 w-full rounded-[var(--radius-lg)] border bg-[var(--color-input)] px-4 py-4 text-[var(--color-input-foreground)] outline-none transition placeholder:text-[var(--color-text-tertiary)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
    error ? "border-[var(--color-error)]" : "border-[var(--color-border)] focus:border-[var(--color-border-strong)]",
  ].join(" ");

  return (
    <label className="block">
      <span className="text-caption text-[var(--color-text-primary)]">{label}</span>
      {textarea ? (
        <textarea
          className={`${classes} min-h-40 resize-none`}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={600}
        />
      ) : (
        <input
          className={classes}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
      {error && <span className="text-caption mt-2 block text-[var(--color-error)]">{error}</span>}
    </label>
  );
}
