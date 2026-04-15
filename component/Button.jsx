const Button = ({ children }) => {
  return (
    <button className="py-2 px-5 font-bold rounded-3xl bg-sky-500">
      {children}
    </button>
  );
};

export default Button;
