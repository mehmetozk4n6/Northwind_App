import React from "react";
import { useSelector } from "react-redux";
import { totalPriceSelector } from "../../redux/cartSlice";

function Price() {
  const totalPrice = useSelector(totalPriceSelector);
  return (
    <div className="m-2">
      Total Price :<span>{totalPrice}</span> $
    </div>
  );
}

export default Price;
