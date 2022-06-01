import { InputGroup, FormControl } from "react-bootstrap";

function SearchBar({ searchValue, setSearchValue }) {
  return (
    <InputGroup className="mx-3 w-50 ms-auto me-5">
      <FormControl
        aria-label="First name"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchBar;
