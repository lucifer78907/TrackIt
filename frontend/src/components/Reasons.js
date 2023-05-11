import { Fragment } from "react";
import classes from "./whyChooseUs.module.scss";
import typography from "../components/extras/typography.module.scss";
import { gsap } from "gsap";
import { useRef } from "react";

const Reasons = (props) => {
  const cardRef = useRef(null);
  const reasonClass = `${classes[`reason__${props.id}`]} }`;

  const headerClass = `${typography["heading__quaternary"]} ${classes["reason__head"]}`;
  let animation;

  const animationHoverHandler = () => {
    animation = gsap.to(cardRef.current, {
      scale: 1.2,
      duration: 0.4,
      ease: "power4.out",
    });
  };

  const animationLeaveHandler = () => {
    animation.reverse();
  };

  return (
    <Fragment>
      <div className={reasonClass} ref={cardRef}>
        <article
          ref={props.innerRef}
          onMouseEnter={animationHoverHandler}
          onMouseLeave={animationLeaveHandler}
          className={classes.reason}
        >
          <h4 className={headerClass}>{props.title}</h4>
          <p className={classes["reason__para"]}>{props.subtitle}</p>
        </article>
      </div>
    </Fragment>
  );
};

export default Reasons;
