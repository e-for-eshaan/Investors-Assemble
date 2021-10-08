import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

const Navbar = (props) => {
  const { user } = useContext(AuthContext);

  return (
    <nav
      className={classes.nav}
      style={{
        position: props.pos,
        borderBottomLeftRadius: props.round,
        borderBottomRightRadius: props.round,
      }}
    >
      <img src={logo} alt="" className={classes.logo} />
      <ul className={classes.list}>
        {!user && (
          <Link to="/" className={classes.listitem}>
            <li className={classes.listitem}>Home</li>
          </Link>
        )}
        {user && (
          <Link to="/feed" className={classes.listitem}>
            <li className={classes.listitem}>Feed</li>
          </Link>
        )}
        {user && (
          <Link to="/user/profile" className={classes.listitem}>
            <li className={classes.listitem}>Profile</li>
          </Link>
        )}
        {user && (
          <Link to="/logout" className={classes.listitem}>
            <li className={classes.listitem}>Log Out</li>
          </Link>
        )}
        {!user && (
          <Link to="/register" className={classes.listitem}>
            <li className={classes.listitem}>Register</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
