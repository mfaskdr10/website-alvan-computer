/* eslint-disable react/prop-types */
const Button = ({ children, classname }) => {
  return (
    <>
      <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}>
        {children}
      </button>
    </>
  );
};

export default Button;
