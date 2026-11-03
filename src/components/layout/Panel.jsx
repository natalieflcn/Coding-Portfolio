function Panel({ title, children }) {
  return (
    <div className="bg-amber-400 panel-outline min-w-0">
      {/* <ContactPanel
        className="h-64 w-full panel-svg"
        // preserveAspectRatio="none"
      >
        This is my summary.
      </ContactPanel> */}

      <div className="panel-glow ">
        <span className="panel-title  text-xl xs:text-2xl sm:text-3xl  lg:text-4xl">
          {title}
        </span>
        <div className={`panel `}>
          <div className="panel-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
