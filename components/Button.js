const ButtonWrapper = ({ type, href, children }) => {
  if (type == "anchor") {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  } else return children;
};

const Button = ({ label, Icon, styles, onClick, secondary, type, href }) => {
  if (secondary) {
    return (
      <ButtonWrapper type={type} href={href}>
        <div
          className={`center bg-white text-black font-crush text-[1.2em] tracking-wide px-7 py-3 border-4 cursor-pointer hover:bg-black hover:text-white transition-all ${styles}`}
          onClick={onClick}
        >
          {Icon ? <span className="text-[30px] mr-4">{Icon}</span> : null}
          {label}
        </div>
      </ButtonWrapper>
    );
  } else {
    return (
      <ButtonWrapper type={type} href={href}>
        <div
          className={`center bg-accent text-white font-crush text-[1.2em] tracking-wide px-8 py-4 cursor-pointer hover:opacity-80 transition-all ${styles}`}
          onClick={onClick}
        >
          {Icon ? <span className="text-[30px] mr-4">{Icon}</span> : null}
          {label}
        </div>
      </ButtonWrapper>
    );
  }
};

export default Button;
