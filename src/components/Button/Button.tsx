import React from 'react';

export interface ButtonProps {
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button data-testid="button">{title}</button>
  )
}
