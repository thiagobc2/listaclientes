import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white p-4 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      {label}
    </button>
  );
}

export default Button;
