import React,{useContext} from "react";

import Product from "../components/Product";
import Title from "../components/Title";

function Home() {

  return (
    <div >
      <div className="home-container">
        <Title name="our" title="products"/>
        <Product/>
       
      </div>
    </div>
  );
}

export default Home;
