import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import boxes from "../../assets/boxes.jpeg";
import { itemOffsetSelector, setItemOffset } from "../../redux/categorySlice";

// Example items, to simulate fetching from another resourc

function Items({ currentItems, findItem, removeFromCart1, addToCart1 }) {
  return (
    <>
      {currentItems &&
        currentItems.map((product) => (
          <div
            key={product.id}
            className="m-3 d-flex flex-column flex-wrap w-25 justify-content-center align-items-center"
          >
            <Card className="w-100">
              <CardImg
                top
                width="100%"
                src={boxes}
                alt="Card image cap"
                className="p-1"
              />
              <CardBody className="d-flex flex-column align-items-center justify-content-center">
                <CardTitle className="h-50 text-center cardtitle">
                  {product.productName}
                </CardTitle>
                <CardSubtitle className="text-center">{`${product.unitPrice} $`}</CardSubtitle>
                {/* <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText> */}
                <div className="d-flex flex-wrap justify-content-between">
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => removeFromCart1(product, 1)}
                  >
                    -
                  </Button>
                  <div className="quantity p-1 ms-2 me-2">
                    {findItem(product) ? findItem(product).quantity : 0}
                  </div>
                  <Button
                    size="sm"
                    variant="outline-success"
                    onClick={() => addToCart1(product, 1)}
                  >
                    +
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({
  filteredProducts,
  findItem,
  removeFromCart1,
  addToCart1,
}) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState("");
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const itemOffset = useSelector(itemOffsetSelector);
  const dispatch = useDispatch();
  let itemsPerPage = 9;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(filteredProducts?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % filteredProducts?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    dispatch(setItemOffset(newOffset));
  };

  return (
    <>
      <div className="d-flex flex-wrap">
        <Items
          currentItems={currentItems}
          findItem={findItem}
          removeFromCart1={removeFromCart1}
          addToCart1={addToCart1}
        />
      </div>

      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={6}
      />
    </>
  );
}

export default PaginatedItems;
