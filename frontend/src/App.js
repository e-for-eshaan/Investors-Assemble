import "./App.css";
import Feed from "./components/feed/Feed";
import Footer from "./components/homepage/Footer";
import Homepage1 from "./components/homepage/Homepage1";
import Homepage2 from "./components/homepage/Homepage2";
import Homepage3 from "./components/homepage/Homepage3";
import Homepage4 from "./components/homepage/Homepage4";
import Navbar from "./components/homepage/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Homepage1 />
            <hr />
            <Homepage2 />
            <hr />
            <Homepage3 />
            <hr />
            <Homepage4 />
            <hr />
            <Footer />
          </Route>
          <Route path="/posts/all" exact>
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
