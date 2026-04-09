import Link from "next/link";
import { OnboardingSeenMarker } from "@/components/OnboardingSeenMarker";

const moduleTypes = [
  {
    name: "Foundations",
    modules: "Modules 1-2",
    focus: "Industry map, data foundations, and shared language across teams.",
  },
  {
    name: "Architecture",
    modules: "Modules 3-5",
    focus: "CRM/CDP design, programmatic mechanics, and privacy-safe signal pipelines.",
  },
  {
    name: "Performance",
    modules: "Modules 6-8",
    focus: "Measurement, lifecycle orchestration, and creative testing operations.",
  },
  {
    name: "Governance + Strategy",
    modules: "Modules 9-10",
    focus: "Vendor governance and a full-funnel 90-day operating plan.",
  },
];

const learningLoop = [
  "Theory: build mental models and vocabulary.",
  "Practical lab: produce an operator artifact you can reuse at work.",
  "Harvard-style case: make a real decision under constraints.",
  "Checkpoint quiz + memo: test understanding and lock in reasoning.",
];

const caseBenefits = [
  "Forces decision-making, not passive reading.",
  "Builds tradeoff thinking under time, budget, and risk constraints.",
  "Improves leadership communication with defendable recommendations.",
  "Transfers faster to real campaign, stack, and governance decisions.",
];

export default function OnboardingPage() {
  return (
    <main className="container">
      <OnboardingSeenMarker />

      <header className="hero">
        <Link className="muted" href="/">
          ← Back to modules
        </Link>
        <h1>Onboarding: How to learn with this academy</h1>
        <p className="muted">
          This app is designed for operator learning, not just content consumption. Each module blends concepts,
          execution, and decision-making.
        </p>
      </header>

      <section className="panel section">
        <h2>Your 4-step learning loop</h2>
        <ol className="list">
          {learningLoop.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="panel section">
        <h2>Module types and progression</h2>
        <div className="grid">
          {moduleTypes.map((group) => (
            <article key={group.name} className="card">
              <h3>{group.name}</h3>
              <p className="muted">{group.modules}</p>
              <p>{group.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel section">
        <h2>Why Harvard-style case studies accelerate learning</h2>
        <ul className="list">
          {caseBenefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="panel section">
        <h2>Suggested first session (45-60 min)</h2>
        <ol className="list">
          <li>Complete this onboarding page once.</li>
          <li>Do Module 1 theory + practical lab.</li>
          <li>Answer Module 1 cold-call case questions out loud, then in memo form.</li>
          <li>Submit quiz and mark the module complete.</li>
        </ol>
      </section>

      <nav className="navRow">
        <Link className="button" href="/module/industry-map">
          Start Module 1
        </Link>
        <Link className="button" href="/">
          View all modules
        </Link>
      </nav>
    </main>
  );
}
