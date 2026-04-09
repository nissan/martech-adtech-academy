"use client";

import { useEffect } from "react";

const ONBOARDING_KEY = "martech-academy-onboarding-seen-v1";

export function OnboardingSeenMarker() {
  useEffect(() => {
    window.localStorage.setItem(ONBOARDING_KEY, "true");
  }, []);

  return null;
}
