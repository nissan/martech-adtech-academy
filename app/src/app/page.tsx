import { ModuleCard } from "@/components/ModuleCard";
import { FirstTimeOnboardingPrompt } from "@/components/FirstTimeOnboardingPrompt";
import { modules } from "@/lib/curriculum";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <h1>MarTech + AdTech Academy</h1>
        <p className="muted">
          A practical operator curriculum combining theory, labs, and Harvard-style case studies.
        </p>
        <p>
          Structure used from Academy builds: module-first learning, guided routes, and measurable progress.
        </p>
      </header>

      <FirstTimeOnboardingPrompt />

      <section className="panel" style={{ marginBottom: 16 }}>
        <p style={{ marginTop: 0 }}>
          <strong>New here?</strong> Start with the guided onboarding flow before Module 1.
        </p>
        <Link className="button" href="/onboarding">
          Start onboarding
        </Link>

        <strong>How to use this:</strong>
        <ol className="list" style={{ marginTop: 8 }}>
          <li>Read the theory section.</li>
          <li>Complete the practical lab artifact.</li>
          <li>Write a case memo answering the decision dilemma.</li>
        </ol>
      </section>

      <section className="grid">
        {modules.map((module, index) => (
          <ModuleCard key={module.slug} module={module} index={index} />
        ))}
      </section>
    </main>
  );
}
