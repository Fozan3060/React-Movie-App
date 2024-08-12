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
import WatchedMovieSummary from './components/compound/WatchedMovieSummary/WatchedMovieSummary';
import { Suspense, useEffect, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorDisplay } from './components/shared/ErrorDisplay/ErrorDisplay';
import Loader from './components/shared/Loader/Loader';
import { SelectedMovieSkeleton } from './components/compound/SelectedMovieSkeleton/SelectedMovieSkeleton';

function App() {
  const { setName, name, selected } = useMovie();
  const inputElementRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Enter' && inputElementRef.current) {
        inputElementRef.current.focus();
      }
    };

    if (inputElementRef.current) {
      console.log(inputElementRef.current.value);
      inputElementRef.current.focus();
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
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
          ref={inputElementRef}
        />
        <Results />
      </Header>
      <Container>
        <LeftBar>
          <ErrorBoundary fallback={<ErrorDisplay />} resetKeys={[name]}>
            <Suspense fallback={<Loader />}>
              {name ? (
                <Movielist />
              ) : (
                <h1>
                  <h1 className="text-center mt-20 text-2xl font-semibold">
                    No Movies Searched
                  </h1>
                </h1>
              )}
            </Suspense>
          </ErrorBoundary>
        </LeftBar>
        <Rightbar>
          <ErrorBoundary
            key={'2'}
            fallback={<ErrorDisplay />}
            resetKeys={[name]}
          >
            {selected && (
              <Suspense key={'1'} fallback={<SelectedMovieSkeleton />}>
                <SelectedMovieDetails key={selected} />
              </Suspense>
            )}
            <>
              <WatchedMovieSummary key={'3'} />
              <MovieWatchedList key={'4'} />
            </>
          </ErrorBoundary>
        </Rightbar>
      </Container>
    </>
  );
}

export default App;
