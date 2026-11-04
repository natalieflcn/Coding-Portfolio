import { useEffect, useRef } from "react";

function Panel({ title, children }) {
  const panelGlowRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const panelGlow = panelGlowRef.current;
    const panelTitle = titleRef.current;

    if (!panelGlow || !panelTitle) return;

    const updateTabWidth = function () {
      // measures elements' dimensions and position on the screen (returns element's width)
      const titleRect = panelTitle.getBoundingClientRect();

      // adding calculated element width to the panel
      panelGlow.style.setProperty("--tab-width", `${titleRect.width}px`);
    };

    // an observer that executes updateTabWidth whenever (observed) element dimensions change
    const observer = new ResizeObserver(updateTabWidth);

    observer.observe(panelTitle);
    observer.observe(panelGlow);

    // manually initiate tab width when component mounts
    updateTabWidth();
  }, [title]);

  return (
    <div className="panel-outline min-w-0">
      <div ref={panelGlowRef} className="panel-glow">
        <span
          ref={titleRef}
          className="panel-title  text-xl xs:text-2xl sm:text-3xl lg:text-4xl"
        >
          {title}
        </span>
        <div className="panel">
          <div className="panel-inner ">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
