import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface MovieContextType {
  name: string;
  setName: (name: string) => void;
  selected: string;
  setSelected: (selected: string) => void;
  watchMovieslist: MovieItem[];
  setwatchMovieslist: Dispatch<SetStateAction<MovieItem[]>>;
  handleClose: () => void;
  RemoveFromFav: () => void;
}
export interface MovieItem {
  Poster: string;
  Title: string;
  imdbID: string;
  Released: string;
  Runtime: string;
  imdbRating: string;
  userRating: number;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieContextProviderProps {
  children: ReactNode;
}

const initialValue = localStorage.getItem('WatchList');
const parsedInitialValue = initialValue ? JSON.parse(initialValue) : [];

export const MovieContextProvider = ({
  children,
}: MovieContextProviderProps) => {
  const [name, setName] = useState<string>('');
  const [selected, setSelected] = useState<string>('');
  const [watchMovieslist, setwatchMovieslist] = useState<MovieItem[]>(
    () => parsedInitialValue
  );
  const handleClose = () => {
    setSelected('');
  };
  const RemoveFromFav = () => {
    setwatchMovieslist((prev) =>
      prev.filter((movie) => movie.imdbID !== selected)
    );
    handleClose();
  };
  return (
    <MovieContext.Provider
      value={{
        name,
        setName,
        selected,
        setSelected,
        watchMovieslist,
        setwatchMovieslist,
        handleClose,
        RemoveFromFav,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error('useMovie must be used within a MovieContextProvider');
  }
  return context;
};
