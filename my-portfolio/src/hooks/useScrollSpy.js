import { useEffect, useState } from "react";

const SECTION_IDS = ["home", "about", "projects", "certs", "contact"];

export function useScrollSpy() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observers = new Map();

    const observe = (id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            setActiveId(id);
          });
        },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.set(id, observer);
    };

    SECTION_IDS.forEach(observe);

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return activeId;
}
