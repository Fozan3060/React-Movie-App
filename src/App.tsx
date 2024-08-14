import './App.css';
import Header from './components/complex/Header/Header';
import LeftBar from './components/complex/LeftBar/LeftBar';
import Container from './components/complex/Container/Container';
import Rightbar from './components/complex/RightBar/RightBar';
import Movielist from './components/complex/Movielist/Movielist';
import { useMovie } from './Context/ReactMovieContext';
import SelectedMovieDetails from './components/compound/SelectedMovieDetails/SelectedMovieDetails';
import MovieWatchedList from './components/complex/MovieWatched/MovieWatchedList';
import WatchedMovieSummary from './components/compound/WatchedMovieSummary/WatchedMovieSummary';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorDisplay } from './components/shared/ErrorDisplay/ErrorDisplay';
import Loader from './components/shared/Loader/Loader';
import { SelectedMovieSkeleton } from './components/compound/SelectedMovieSkeleton/SelectedMovieSkeleton';

function App() {
  const { name, selected } = useMovie();

  return (
    <>
      <Header />
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
