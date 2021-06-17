import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./components/addProduct/AddProduct";
import HeaderNav from "./components/headerNav/HeaderNav";
import Checkout from './components/Pages/checkout/Checkout';
import Home from "./components/Pages/home/Home";
import SingleProduct from "./components/Pages/singleProPg/SingleProduct";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-300">
        <Router>
          <HeaderNav />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/product-detail">
              <SingleProduct></SingleProduct>
            </Route>
            <Route path="/add-product">
              <AddProduct />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
