import React from "react";
import { useStateValue } from "./StateProvider";

function Cart() {
  const [{ basket }] = useStateValue();
  console.log(basket);

  return (
    <div>
      <h1>hello from cart</h1>
    </div>
  );
}

export default Cart;
