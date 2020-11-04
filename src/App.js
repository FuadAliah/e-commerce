import React from "react";
import Header from "./Components/Header/Header";
import ProductsContextProvider from "./Context/ProductsContext";
import CartContextProvider from "./Context/CartContext";
import Products from "./Components/Products/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/Cart" component={Cart} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
};

export default App;
