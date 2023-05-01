import classes from "./Navigation.module.scss";

const Navigation = (props) => {
  const transformTo = props.isOn ? "translateX(-100rem)" : "translateX(0)";
  const pointerEvents = props.isOn ? "none" : "auto";
  const isVisible = props.isOn ? "hidden" : "visible";
  return (
    <nav
      className={classes.nav}
      style={{
        transform: transformTo,
        pointerEvents: pointerEvents,
        visibility: isVisible,
        transition: "all 500ms ease-in",
        opacity: 1,
      }}
    >
      <ul className={classes["nav__items"]}>
        <li className={classes["nav__item"]}>
          <a href="#/" className={classes["nav__item--link"]}>
            Home
          </a>
        </li>
        <li className={classes["nav__item"]}>
          <a href="#/" className={classes["nav__item--link"]}>
            Features
          </a>
        </li>
        <li className={classes["nav__item"]}>
          <a href="#/" className={classes["nav__item--link"]}>
            FAQ
          </a>
        </li>
        <li className={classes["nav__item"]}>
          <a href="#/" className={classes["nav__item--link"]}>
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
