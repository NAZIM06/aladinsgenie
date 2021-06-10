import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import SingleProduct from "./components/pages/singleProPg/SingleProduct";
function App() {
  return (
    <div className="bg-gray-300 h-screen">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/single-product">
            <SingleProduct></SingleProduct>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
