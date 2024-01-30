import { SearchInput } from "../components";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useAppContext } from "../AppContext/AppContext";

const SearchInputContainer = () => {
  const [searchText, setSearchText] = useState("");

  const { handleSearchGifs } = useAppContext();
  const debouncedSearchTerm = useDebounce(searchText, 500);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    if (debouncedSearchTerm !== "" && debouncedSearchTerm.length > 2) {
      handleSearchGifs(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <SearchInput searchText={searchText} onSearch={handleSearchTextChange} />
  );
};

export default SearchInputContainer;
