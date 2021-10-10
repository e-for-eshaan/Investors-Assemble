import "./App.css";

import Home from "./pages/Home";
import Feed from "./components/feed/Feed";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import OtherUserProfile from "./pages/OtherUserProfile";
import Editprofile from "./components/profile/Editprofile";
import Profile from "./components/profile/Profile";
import { useContext, useLocation } from "react";
import { AuthContext } from "./context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  // const [user, setUser] = useState({});
  const { user } = useContext(AuthContext);
  const location = useLocation;
  return (
    <Router>
      <div className="App">
        <AnimatePresence exitBeforeEnter >
          <Switch location={location} >
            <Route path="/" exact>
              {user ? <Redirect to="/feed" /> : <Home />}
            </Route>
            <Route path="/register">
              {user ? <Redirect to="/feed" /> : <Register />}
            </Route>
            <Route path="/feed">
              {user ? <Feed user={user} /> : <Redirect to="/" />}
            </Route>
            <Route path="/user/profile">
              {user ? (
                <Profile userId={user._id} user={user} />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/user/editprofile">
              {user ? <Editprofile user={user} /> : <Redirect to="/" />}
            </Route>
            <Route path="/user/otherprofile/:id">
              <OtherUserProfile user={user} />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
