import { InputGroup, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setItemOffset } from "../../redux/categorySlice";

function SearchBar({ searchValue, setSearchValue }) {
  const dispatch = useDispatch();

  const handleChange = (val) => {
    setSearchValue(val);
    dispatch(setItemOffset(0));
  };
  return (
    <InputGroup className="mx-3 w-50 ms-auto me-5">
      <FormControl
        aria-label="First name"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </InputGroup>
  );
}

export default SearchBar;
