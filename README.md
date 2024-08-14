# Movie App

Movie App build on React and Typescript

## Getting Started

### Prerequisite

- Node
- npm

### Installing

- git clone the repository
- cd in to repository folder and run `npm install`

# To Start Project

- run `npm start`

## Features List

- [x] Search Movies and their details
- [x] storing favorite movies list in local storage
- [x] Initial design
- [x] Add Movie to favorites and remove them
- [x] Smooth animations using framer motion
- [x] lazy loading using react suspense and lazy
- [x] Responsive

## Authors

Fozan Javaid
[Fozan Javaid ](https://www.linkedin.com/in/fozan-javaid-6b658a246/)

## Documentation for Custom Hooks

### Custom Hook 1: `useFetchMovieHook`

- **Location:** `src/components/CustomeHooks/useFetchMovieHook.tsx`
- **Description:**
  - This hook uses **TanStack useSuspenseQuery** and takes in movie's name.
  - It provides the search results based on the movie searched.
  - This hook uses the **omdbapi API** for fetching data.
- **Use Case:**
  - Used in the **Movielist** component located at `src/Components/complex/Movielist/Movielist.tsx`

### Custom Hook 2: `useFetchMovieDetailsHook`

- **Location:** `src/components/CustomeHooks/useFetchMovieDetailsHook.tsx`
- **Description:**
  - This hook uses **TanStack useSuspenseQuery** and takes in movie's id.
  - It provides the detailed description on the selected movie.
  - This hook uses the **omdbapi API** for fetching data.
- **Use Case:**
  - Used in the **SelectedMovieDetails** component located at `src/Components/compound/SelectedMovieDetails/SelectedMovieDetails.tsx`
