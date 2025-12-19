import { useLocation } from "react-router-dom";

const Search = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  return <h1>Results for: {query}</h1>;
};

export default Search;
