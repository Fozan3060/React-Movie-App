import { forwardRef } from 'react';

interface InputProps {
  name: string;
  setname: (value: string) => void;
  placeholder: string;
  className?: string;
  onClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = 'text-xl outline-none text-white md:w-96 w-[15rem] sm:w-[18rem] h-10 rounded-md px-3 ',
      name,
      setname,
      placeholder,
      onClick,
    },
    ref
  ) => (
    <div>
      <input
        onChange={(e) => setname(e.target.value)}
        value={name}
        className={className}
        placeholder={placeholder}
        type="text"
        ref={ref}
        onClick={onClick}
      />
    </div>
  )
);

export default Input;
