interface InputProps {
  name: string;
  setname: (value: string) => void;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  className = 'text-xl outline-none text-white md:w-96 w-[15rem] sm:w-[18rem] h-10 rounded-md px-3 ',
  name,
  setname,
  placeholder,
}) => (
  <div>
    <input
      onChange={(e) => setname(e.target.value)}
      value={name}
      className={className}
      placeholder={placeholder}
      type="text"
    />{' '}
  </div>
);

export default Input;
