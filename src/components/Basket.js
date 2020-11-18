import React from "react";
import { useStateValue } from "./StateProvider";

function Basket() {
  const [{ basket }] = useStateValue();

  return <span>{basket ? basket.length : null}</span>;
}

export default Basket;
