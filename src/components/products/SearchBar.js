import { InputGroup, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setItemOffset } from "../../redux/categorySlice";
import { searchValueSelector, setSearchValue } from "../../redux/productSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector(searchValueSelector);

  const handleChange = (val) => {
    dispatch(setSearchValue(val));
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
