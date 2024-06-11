// create a button component
'use client';

const Button = ({ children, onClick }: any) => {
  return (
    <button onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
