"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ONBOARDING_KEY = "martech-academy-onboarding-seen-v1";

export function FirstTimeOnboardingPrompt() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = window.localStorage.getItem(ONBOARDING_KEY);
    setShow(!seen);
    setReady(true);
  }, []);

  const markSeen = () => {
    window.localStorage.setItem(ONBOARDING_KEY, "true");
  };

  const startOnboarding = () => {
    markSeen();
    router.push("/onboarding");
  };

  const dismiss = () => {
    markSeen();
    setShow(false);
  };

  if (!ready || !show) return null;

  return (
    <section className="panel section" style={{ marginBottom: 16 }}>
      <h2 style={{ margin: 0 }}>New learner recommended path</h2>
      <p className="muted" style={{ margin: 0 }}>
        Start with the 3-minute onboarding to understand module types, learning loop, and how Harvard-style
        case discussions build decision quality.
      </p>
      <div className="navRow" style={{ marginTop: 8 }}>
        <button className="button plainButton" onClick={startOnboarding}>Start guided onboarding</button>
        <button className="button plainButton" onClick={dismiss}>Skip for now</button>
      </div>
    </section>
  );
}
