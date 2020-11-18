import React, { useContext, useState } from "react";
import { useStateValue } from "./StateProvider";
import { PhoneContext } from "./context";
import styled from "styled-components";
import { Button } from "./StyledComponents";
import { Link } from "react-router-dom";

function Model(props) {
  const [slug, setSlug] = useState();
  const post = useContext(PhoneContext);
  const modalOpen = post.modalOpen;
  const items = post.modelState;
  const CloseModel = post.CloseModel;

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: items.title,
        images: items.images,
        price: items.price,
        id: items.id,
        incart: "true",
        slug: items.slug,
      },
    });
  };

  const product = post.context;

  if (!modalOpen) {
    return null;
  }

  if (!items) {
    return <div>LOADING ........</div>;
  }

  return (
    <ModelConatiner>
      <div className="model-item">
        <h2>Add item to My cart</h2>
        <img src={items.images[0]} alt={items.title} />

        <h4>{items.title}</h4>
        <h6>
          Price:
          <span>${items.price}</span>
        </h6>
        <div className="model-buttons">
          <Link to="/">
            <Button background="#8FA1F2" onClick={() => CloseModel()}>
              back to products
            </Button>
          </Link>

          {items.incart ? (
            <Link to="#">
              <Button
                color="#F79F11"
                background="white"
                className="ml-4"
                disabled={product.incart}
              >
                In cart
              </Button>
            </Link>
          ) : (
            <Link to="#">
              <Button
                color="#F79F11"
                background="white"
                className="ml-4"
                disabled={items.incart}
                onClick={addToBasket}
              >
                Add to cart
              </Button>
            </Link>
          )}
        </div>
      </div>
    </ModelConatiner>
  );
}

export default React.memo(Model);

const ModelConatiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  display: flex;
`;
