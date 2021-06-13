import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderNav from "./components/headerNav/HeaderNav";
import Home from "./components/pages/home/Home";
import SingleProduct from "./components/pages/singleProPg/SingleProduct";
import store from "./redux/Store";
function App() {
  return (

    <Provider store={store}>
      <div className="bg-gray-300">
        <Router>
          <HeaderNav />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/product-detail">
              <SingleProduct></SingleProduct>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
