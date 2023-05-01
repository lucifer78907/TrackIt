import classes from "./Header.module.scss";
import typography from "./extras/typography.module.scss";
import Navigation from "./Navigation";
import { Fragment, useState } from "react";

const Header = () => {
  const [isNavOn, setIsNavOn] = useState(false);

  const toggleSetWid = () => {
    setIsNavOn(!isNavOn);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <p
          className={classes.sidebar}
          onClick={toggleSetWid}
          style={{ zIndex: "9999" }}
        >
          &nbsp;
        </p>
        <Navigation isOn={!isNavOn}></Navigation>
        <article className={classes["header__text-box"]}>
          <h1 className={typography["heading__primary"]}>Track It</h1>
          <p className={classes["header__para"]}>
            Track your buses with Track it
          </p>
        </article>
      </header>
    </Fragment>
  );
};

export default Header;
