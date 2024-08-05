import { useState } from 'react';
import './App.css';
import Header from './components/complex/Header/Header';
import Input from './components/shared/Input/Input';
import LeftBar from './components/complex/LeftBar/LeftBar';
import Container from './components/complex/Container/Container';
import Rightbar from './components/complex/RightBar/RightBar';
import Logo from './components/shared/Logo/Logo';
import CustomStar from './components/shared/CustomStarRating/CustomStarRating';

function App() {
  const [name, setname] = useState('');
  const [rating, setRating] = useState(0);
  return (
    <>
      <Header>
        <Logo />
        <Input
          setname={setname}
          name={name}
          className="bg-violet-500 text-xl outline-none text-white md:w-96  w-[15rem] sm:w-[18rem] h-10 rounded-md px-3 transform transition-all duration-300 ease-in-out
             hover:shadow-lg placeholder-slate-300 hover:-translate-y-0.5 focus:-translate-y-0.5  focus:shadow-xl"
          placeholder="Search Movie"
        />
        <h1 className="text-xl">Found 0 results</h1>
      </Header>
      <Container>
        <LeftBar>
          <h1>Searched Movies</h1>
        </LeftBar>
        <Rightbar>
          <h1>Favorites</h1>
          <div className="flex gap-2">
            <CustomStar length="10" rating={rating} setRating={setRating} />
            <span>{rating}</span>
          </div>
        </Rightbar>
      </Container>
    </>
  );
}

export default App;
