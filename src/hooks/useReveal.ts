"use client";

import { useEffect, useRef } from "react";

/**
 * Simple scroll-triggered reveal using IntersectionObserver.
 * Adds the 'revealed' class to child elements matching `selector` when the section enters the viewport.
 * CSS handles the transition (see globals.css .reveal-item and .revealed).
 */
export function useReveal(selector: string, threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealItems = () => {
      const items = el.querySelectorAll(selector);
      items.forEach((item, i) => {
        setTimeout(() => {
          item.classList.add("revealed");
        }, i * 120); // stagger
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealItems();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    // Immediate check: if element is already in viewport on mount, reveal right away
    const rect = el.getBoundingClientRect();
    if (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    ) {
      // Small delay to let CSS load before revealing
      setTimeout(() => {
        revealItems();
        observer.unobserve(el);
      }, 100);
    }

    return () => observer.disconnect();
  }, [selector, threshold]);

  return ref;
}
