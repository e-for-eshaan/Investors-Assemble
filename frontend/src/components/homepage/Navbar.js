import classes from "./Navbar.module.css";

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
      <h1 className={classes.logo}>LOGO</h1>
      <ul className={classes.list}>
        <li className={classes.listitem}>ITEM 1</li>
        <li className={classes.listitem}>ITEM 2</li>
        <li className={classes.listitem}>ITEM 3</li>
        <li className={classes.listitem}>ITEM 4</li>
      </ul>
    </nav>
  );
};

export default Navbar;
