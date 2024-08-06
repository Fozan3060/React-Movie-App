import { ReactNode } from 'react';

interface ButtonProps {
  icon?: ReactNode;
  description: string;
  className?: string;
  children?: ReactNode;
  onclick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  description = '',
  className = 'bg-slate-200 p-2 text-black rounded-md',
  children,
  onclick,
}) => {
  return (
    <button className={className} onClick={onclick}>
      {description}
      {children}
      {icon}
    </button>
  );
};

export default Button;
