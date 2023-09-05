import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm hover:bg-yellow-300  rounded-full transition-colors duration-300 text-stone-800 font-semibold inline-block focus:bg-yellow-300 focus:outine-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed uppercase ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md: py-4 capa",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs ",
    round: base + "px-3 py-1 md:px-4 md:py-2 text-xs ",
    secondary:
      "border-2 text-sm border-stone-300 uppercase tracking-wide  rounded-full transition-colors duration-300 text-stone-400 font-semibold inline-block hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outine-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md: py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
