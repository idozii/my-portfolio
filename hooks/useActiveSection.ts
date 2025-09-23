import { useState, useEffect } from 'react';

const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Get all currently intersecting sections with their intersection ratios
        const intersectingSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            ratio: entry.intersectionRatio,
            top: entry.boundingClientRect.top,
          }))
          .sort((a, b) => {
            // If one section has significantly higher intersection ratio, prioritize it
            const ratioDiff = Math.abs(a.ratio - b.ratio);
            if (ratioDiff > 0.1) {
              return b.ratio - a.ratio;
            }
            // Otherwise, prioritize the section closer to the top of viewport
            return Math.abs(a.top) - Math.abs(b.top);
          });

        if (intersectingSections.length > 0) {
          const newActiveSection = intersectingSections[0].id;
          if (newActiveSection !== activeSection) {
            setActiveSection(newActiveSection);
          }
        }
      },
      { 
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, activeSection]);

  return activeSection;
};

export default useActiveSection;
