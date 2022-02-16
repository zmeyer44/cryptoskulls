const HeaderLink = ({ label, active, hidden = false, large }) => {
  return (
    <div
      className={`${
        hidden && "hidden md:inline-flex"
      } flex items-center cursor-pointer text-black/60 hover:text-black  ${
        active && "!text-accent"
      }`}
    >
      <h4 className={`text-lg tracking-wide font-crush ${large && "text-4xl"}`}>
        {label}
      </h4>
    </div>
  );
};

export default HeaderLink;
