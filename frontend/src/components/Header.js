import classes from "./Header.module.scss";
import typography from "./extras/typography.module.scss";
import Navigation from "./Navigation";
import { Fragment, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const Header = () => {
  const headerRef = useRef(null);
  const sidebarRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const [isNavOn, setIsNavOn] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(headerRef.current, {
        autoAlpha: 0,
        duration: 0.7,
        scale: 0.8,
      })
        .from(headingRef.current, {
          duration: 0.5,
          opacity: 0,
          ease: "bounce",
          y: "10rem",
        })
        .from(sidebarRef.current, {
          opacity: 0,
          x: "10rem",
          duration: 1,
          ease: "bounce",
        })
        .from(
          paraRef.current,
          {
            opacity: 0,
            x: "20rem",
            duration: 1,
            ease: "power4.out",
          },
          "<"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const toggleSetWid = () => {
    setIsNavOn(!isNavOn);
  };

  return (
    <Fragment>
      <header className={classes.header} ref={headerRef}>
        <p
          className={classes.sidebar}
          onClick={toggleSetWid}
          style={{ zIndex: "9999" }}
          ref={sidebarRef}
        >
          &nbsp;
        </p>
        <Navigation isOn={!isNavOn}></Navigation>
        <article className={classes["header__text-box"]}>
          <h1 ref={headingRef} className={typography["heading__primary"]}>
            Track IT
          </h1>
          <p ref={paraRef} className={classes["header__para"]}>
            Track your buses with Track IT
          </p>
        </article>
      </header>
    </Fragment>
  );
};

export default Header;
