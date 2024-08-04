import { useState } from 'react';
import './App.css';
import Header from './components/complex/Header/Header';
import Input from './components/shared/Input/Input';

function App() {
  const [name, setname] = useState('');

  return (
    <>
      <Header>
        <h1 className="text-xl">Weather App</h1>
        <Input
          setname={setname}
          name={name}
          className="bg-violet-500 text-xl outline-none text-white md:w-96  w-[15rem] sm:w-[18rem] h-10 rounded-md px-3 transform transition-all duration-300 ease-in-out
             hover:shadow-lg placeholder-slate-300 hover:-translate-y-0.5 focus:-translate-y-0.5  focus:shadow-xl"
          placeholder="Search Movie"
        />
        <h1 className="text-xl">Found 0 results</h1>
      </Header>
    </>
  );
}

export default App;
