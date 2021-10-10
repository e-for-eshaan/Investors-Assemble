import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MenuIcon from '@mui/icons-material/Menu';
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
     <Link to='/' style={{ textDecoration: 'none' }}> <div className = {classes.logo}>Investor's Assemble</div></Link>
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
        {          
            <li className={classes.menu} onClick={props.clicker}><MenuIcon/></li>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
