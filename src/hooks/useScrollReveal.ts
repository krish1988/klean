"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure the DOM is fully rendered
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".reveal");
      
      // Reset reveal classes to allow animation on page reload/change
      els.forEach((el) => el.classList.remove("in"));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      els.forEach((el) => observer.observe(el));

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);
}
