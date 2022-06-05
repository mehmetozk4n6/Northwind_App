import { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setItemOffset } from "../../redux/categorySlice";
import { searchValueSelector, setSearchValue } from "../../redux/productSlice";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector(searchValueSelector);
  const [searchword, setSearchword] = useState(searchValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(searchword));
    dispatch(setItemOffset(0));
  };
  return (
    <InputGroup className="mx-3 w-25 ms-5 me-3  mx-auto ">
      <form onSubmit={handleSubmit} className="d-flex">
        <FormControl
          aria-label="First name"
          placeholder="Search"
          value={searchword}
          onChange={(e) => setSearchword(e.target.value)}
          className="rounded-left"
        />
        <InputGroup.Text id="basic-addon1" className="p-0 px-2">
          <button className="p-0 m-0 border-0">
            <AiOutlineSearch />
          </button>
        </InputGroup.Text>
      </form>
    </InputGroup>
  );
}

export default SearchBar;
