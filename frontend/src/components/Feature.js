import { Fragment } from "react";
import classes from "./Features.module.scss";
import typography from "./extras/typography.module.scss";

const Feature = (props) => {
  let content;
  if (props.reverse) {
    content = (
      <Fragment>
        <img src={props.img} alt="Feature 1 image" />
        <aside className={classes["feature__text-box"]}>
          <h3 className={typography["heading__tertiary"]}>{props.title}</h3>
          <p className={classes["feature__text-box--para"]}>{props.content}</p>
        </aside>
      </Fragment>
    );
  } else {
    content = (
      <Fragment>
        <aside className={classes["feature__text-box"]}>
          <h3 className={typography["heading__tertiary"]}>{props.title}</h3>
          <p className={classes["feature__text-box--para"]}>{props.content}</p>
        </aside>
        <img src={props.img} alt="Feature 1 image" />
      </Fragment>
    );
  }

  const style = props.reverse
    ? ""
    : "linear-gradient(to right, #fff 60%, transparent)";

  return (
    <article
      className={classes.feature}
      style={{
        backgroundImage: style,
      }}
    >
      {content}
    </article>
  );
};

export default Feature;
