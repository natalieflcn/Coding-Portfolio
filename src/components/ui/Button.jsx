const variants = {
  red: `bg-red-200 
  hover:bg-red-100 
  hover:shadow-red-100
  hover:shadow-[0_0_12px_--color-red-100]
  active:shadow-red-100 
  active:shadow-[0_0_12px_--color-red-100] `,
  blue: `bg-blue-300 
  hover:bg-blue-200 
  hover:shadow-blue-0 
  hover:shadow-[0_0_12px_--color-blue-0] 
  active:shadow-blue-0 
  active:shadow-[0_0_12px_--color-blue-0]`,
  purple: `bg-purple-300 
  hover:bg-purple-200 
  hover:shadow-purple-100 
  hover:shadow-[0_0_12px_--color-purple-100] 
  active:shadow-purple-100 
  active:shadow-[0_0_12px_--color-purple-100]`,
};

function Button({ variant = "red", className, children, ...props }) {
  return (
    <button
      className={`${variants[variant]} ${className} font-mono font-bold px-2 py-1 text-xs lg:text-sm uppercase rounded-xs transition-colors duration-50 hover:cursor-pointer`}
      {...props}
    >
      {children}{" "}
    </button>
  );
}

export default Button;
