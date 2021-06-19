import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProduct from "./components/addProduct/AddProduct";
import HeaderNav from "./components/headerNav/HeaderNav";
<<<<<<< HEAD
=======
import NotFound from "./components/Pages/404/NotFound";
>>>>>>> ff28e29f31be24ad863078ed96337ca6110ece95
import Checkout from "./components/Pages/checkout/Checkout";
import Home from "./components/Pages/home/Home";
import Login from "./components/Pages/Login/Login";
import SingleProduct from "./components/Pages/singleProduct/SingleProduct";
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
              <SingleProduct/>
            </Route>
            <Route path="/add-product">
              <AddProduct />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
<<<<<<< HEAD
            <Route exact path="/login">
              <Login/>
=======
            <Route path="*">
              <NotFound />
>>>>>>> ff28e29f31be24ad863078ed96337ca6110ece95
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
