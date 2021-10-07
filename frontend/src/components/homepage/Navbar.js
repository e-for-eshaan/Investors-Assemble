import classes from "./Navbar.module.css"
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className={classes.nav}  style={{position:props.pos, borderBottomLeftRadius:props.round,borderBottomRightRadius:props.round}}>
      <h1 className={classes.logo}>LOGO</h1>
      <ul className={classes.list}>
        <Link to='/posts/all' className={classes.listitem}><li className={classes.listitem}>ITEM 1</li></Link>
        <Link to='/' className={classes.listitem}><li className={classes.listitem}>ITEM 2</li></Link>
        <Link to='/' className={classes.listitem}><li className={classes.listitem}>ITEM 3</li></Link>
        <Link to='/' className={classes.listitem}><li className={classes.listitem}>ITEM 4</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
