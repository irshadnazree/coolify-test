// create a button component
'use client';

const Button = () => {
  const crashServer = async () => {
    try {
      const response = await fetch('/api/server');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={crashServer}>
      <span>Crash Server</span>
    </button>
  );
};

export default Button;
