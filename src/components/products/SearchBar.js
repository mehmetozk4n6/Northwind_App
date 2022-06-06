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
        <div className="d-flex p-1 search">
          <button className="p-0 m-0 ">
            <AiOutlineSearch />
          </button>
          <FormControl
            aria-label="First name"
            placeholder="Search"
            value={searchword}
            onChange={(e) => setSearchword(e.target.value)}
            className="searchbar"
          />
        </div>
      </form>
    </InputGroup>
  );
}

export default SearchBar;
