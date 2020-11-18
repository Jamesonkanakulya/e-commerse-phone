import React, { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhoneContext } from "./context";
import { useStateValue } from "./StateProvider";

function Item({ images, title, price, slug, id, incart }) {
  const context = useContext(PhoneContext);
  const OpenModel = context.OpenModel;

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        images: images,
        price: price,
        id: id,
        incart: "true",
        slug: slug,
      },
    });
  };
  return (
    <section className="product">
      <Link to={`/product-details/${slug}`}>
        <img src={images[0]} alt={title} />
      </Link>

      {incart ? (
        <button className="font-weight-bold">in cart</button>
      ) : (
        <button disabled={incart} onClick={() => OpenModel(id)}>
          <FaShoppingCart />
        </button>
      )}

      <p>
        <span className="font-weight-bold">{title}</span>
        <span className="font-italic text-danger">$ {price}</span>
      </p>
    </section>
  );
}

export default Item;
