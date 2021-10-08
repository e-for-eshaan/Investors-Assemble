import "./App.css";
import Navbar from "./components/homepage/Navbar";
import Homepage1 from "./components/homepage/Homepage1";
import Homepage2 from "./components/homepage/Homepage2";
import Homepage3 from "./components/homepage/Homepage3";
import Homepage4 from "./components/homepage/Homepage4";
import Footer from "./components/homepage/Footer";
import Feed from "./components/feed/Feed";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Editprofile from "./components/profile/Editprofile";
import Profile from "./components/profile/Profile";

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
            <Footer />
          </Route>
          <Route path="/posts/all">
            <Feed />
          </Route>
          <Route path="/user/profile" exact>
            <Profile/>
          </Route>
          <Route path="/user/editprofile" exact>
            <Editprofile/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
