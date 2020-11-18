import "./App.scss";
import Home from "./pages/Home";
import Errorpage from "./pages/Errorpage";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import DetailsProduct from "./components/DetailsProduct";

import My from "./components/My";
import Model from "./components/Model";
import Cart from "./components/Cart";

function App() {
  return (
    <div fluid className="mx=0">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />

        <Route exact path="/product-details/:slug" component={DetailsProduct} />
        <Route component={Errorpage} />
      </Switch>
      <Model />
      {/* <My /> */}
    </div>
  );
}

export default App;
