import "./App.css";

import Home from "./pages/Home";
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
            <Home />
          </Route>
          <Route path="/posts/all">
            <Feed />
          </Route>
          <Route path="/user/profile">
            <Profile />
          </Route>
          <Route path="/user/editprofile">
            <Editprofile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
