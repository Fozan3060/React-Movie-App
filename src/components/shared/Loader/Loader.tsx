const Loader = () => (
  <div className="grid place-items-center h-full w-full ">
    <div className="relative">
      <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-purple-900"></div>
      <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-purple-500 animate-spin"></div>
    </div>
  </div>
);
export default Loader;
