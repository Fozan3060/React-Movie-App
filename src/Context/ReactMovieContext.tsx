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
  rating: number;
  setRating: (rating: number) => void;
  selected: string;
  setSelected: (selected: string) => void;
  watchMovieslist: MovieItem[];
  setwatchMovieslist: Dispatch<SetStateAction<MovieItem[]>>;
}
interface MovieItem {
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

export const MovieContextProvider = ({
  children,
}: MovieContextProviderProps) => {
  const [name, setName] = useState<string>('');
  const [selected, setSelected] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [watchMovieslist, setwatchMovieslist] = useState<MovieItem[]>([]);
  return (
    <MovieContext.Provider
      value={{
        name,
        setName,
        rating,
        setRating,
        selected,
        setSelected,
        watchMovieslist,
        setwatchMovieslist,
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
