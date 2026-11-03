function Panel({ title, children }) {
  return (
    <div className="panel-outline w-auto">
      {/* <ContactPanel
        className="h-64 w-full panel-svg"
        // preserveAspectRatio="none"
      >
        This is my summary.
      </ContactPanel> */}

      <div className="panel-glow ">
        <span className="panel-title">{title}</span>
        <div className={`panel `}>
          <div className="panel-inner">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
