import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
const Navbar = (props) => {
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
        <Link to="/" className={classes.listitem}>
          <li className={classes.listitem}>Home</li>
        </Link>
        <Link to="/feed" className={classes.listitem}>
          <li className={classes.listitem}>Feed</li>
        </Link>
        <Link to="/user/profile" className={classes.listitem}>
          <li className={classes.listitem}>Profile</li>
        </Link>
        <Link to="/register" className={classes.listitem}>
          <li className={classes.listitem}>Register</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
