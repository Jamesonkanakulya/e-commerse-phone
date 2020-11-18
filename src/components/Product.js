import React, { useContext } from "react";
import { PhoneContext } from "./context";
import Item from "./Item";

function Product() {
  const Temppost = useContext(PhoneContext);
  const post = Temppost.context;

  const Posts = () => {
    if (!post) {
      return (
        <div>
          <h5>Loading .....</h5>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            {post.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-3 col-sm-12">
                <Item
                  images={item.images}
                  title={item.title}
                  price={item.price}
                  slug={item.slug}
                  id={item.id}
                  incart={item.incart}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <Posts />
    </div>
  );
}

export default React.memo(Product);
