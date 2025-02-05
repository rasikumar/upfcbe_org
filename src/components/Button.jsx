import { Link } from "react-router";

/* eslint-disable react/prop-types */
const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  to = null, // Add `to` prop for navigation
  size = "md", // Add size prop for different button sizes
  disabled = false, // Add disabled prop
  ...props
}) => {
  const baseStyles = `inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed border-2 border-transparent `;

  // Define size options
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Define variant styles
  const variants = {
    primary:
      "bg-upforangecrayola text-white text-sm md:text-base py-2 px-6 rounded-full hover:bg-transparent hover:border hover:border-upforangecrayola hover:text-black transition-all ease-in-out",
    secondary:
      "border border-upforangecrayola text-black text-sm md:text-base py-2 px-6 rounded-full hover:bg-upforangecrayola hover:text-white transition-all ease-in-out",
    outline:
      "border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-200",
  };

  const classes = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  // Render a Link if `to` is provided, otherwise render a button
  return to ? (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  ) : (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
