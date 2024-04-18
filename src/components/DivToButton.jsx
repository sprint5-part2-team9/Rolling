const DivToButton = ({ children, onClick, Ref, className }) => {
  const handleKeyDown = function (e) {
    if (e.code === "Enter" || e.code === " ") {
      e.preventDefault();
      e.target.click();
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={handleKeyDown}
      onClick={onClick}
      ref={Ref}
      className={className}
    >
      {children}
    </div>
  );
};

export default DivToButton;
