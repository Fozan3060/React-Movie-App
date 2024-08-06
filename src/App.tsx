import './App.css';
import Header from './components/complex/Header/Header';
import Input from './components/shared/Input/Input';
import LeftBar from './components/complex/LeftBar/LeftBar';
import Container from './components/complex/Container/Container';
import Rightbar from './components/complex/RightBar/RightBar';
import Logo from './components/shared/Logo/Logo';
import Results from './components/compound/Results/Results';
import Movielist from './components/complex/Movielist/Movielist';
import { useMovie } from './Context/ReactMovieContext';
import SelectedMovieDetails from './components/compound/SelectedMovieDetails/SelectedMovieDetails';
import MovieWatchedList from './components/complex/MovieWatched/MovieWatchedList';

function App() {
  const { setName, name, selected } = useMovie();
  return (
    <>
      <Header>
        <Logo />
        <Input
          setname={setName}
          name={name}
          className="bg-violet-500 text-xl outline-none text-white md:w-96  w-[15rem] sm:w-[18rem] h-10 rounded-md px-3 transform transition-all duration-300 ease-in-out
             hover:shadow-lg placeholder-slate-300 hover:-translate-y-0.5 focus:-translate-y-0.5  focus:shadow-xl"
          placeholder="Search Movie"
        />
        <Results />
      </Header>
      <Container>
        <LeftBar>
          <Movielist />
        </LeftBar>
        <Rightbar>
          {selected ? (
            <SelectedMovieDetails key={selected} />
          ) : (
            <MovieWatchedList />
          )}
        </Rightbar>
      </Container>
    </>
  );
}

export default App;
