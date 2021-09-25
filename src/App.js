import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages";

const App = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
