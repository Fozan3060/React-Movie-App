import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  icon?: ReactNode;
  description: string;
  className?: string;
  children?: ReactNode;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  description = '',
  className = 'bg-slate-200 p-2 text-black rounded-md',
  children,
  onclick,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={className}
      onClick={onclick}
    >
      {description}
      {children}
      {icon}
    </motion.button>
  );
};

export default Button;
