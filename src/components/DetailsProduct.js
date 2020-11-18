import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PhoneContext } from "./context";
import { useStateValue } from "./StateProvider";
import { Button, ProductTitle } from "./StyledComponents";
import Title from "./Title";

function DetailsProduct(props) {
  const [slug, setSlug] = useState(props.match.params.slug);
  const [myproduct, setMyProduct] = useState([]);
  const Temppost = useContext(PhoneContext);

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: product.title,
        images: product.images,
        price: product.price,
        id: product.id,
        incart: "true",
        slug: product.slug,
      },
    });
  };

  const product = Temppost.context.find((item) => slug === item.slug);
  if (!product) {
    return <div>Loading .......</div>;
  }

  return (
    <div className="container">
      <div className="product-details">
        <ProductTitle size="2rem" style={{ margin: "5rem auto" }}>
          {product?.title}
        </ProductTitle>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="left">
              <img src={product.images[0]} alt={product.title} />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="right">
              <ProductTitle size="1.5rem" align="left">
                {`Brand:${product.brand}`}
              </ProductTitle>
              <p>
                <span>Price: $</span>
                <span className="font-italic text-danger">{product.price}</span>
              </p>

              <h6 className="font-italic font-bold">{`About ${product.title}.`}</h6>
              <p>{product.description}</p>

              <div className="cartbuttons">
                <Link to="/">
                  <Button background="#8FA1F2">Back to product</Button>
                </Link>

                {product.incart ? (
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
                      disabled={product.incart}
                      onClick={addToBasket}
                    >
                      Add to cart
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DetailsProduct);
