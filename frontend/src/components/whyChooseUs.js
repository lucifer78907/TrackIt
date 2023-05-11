import classes from "./whyChooseUs.module.scss";
import typography from "../components/extras/typography.module.scss";
import Reasons from "./Reasons";
import { useLayoutEffect, useRef } from "react";
import { data } from "../data/CardData";
import { gsap } from "gsap";

const WhyChooseUs = () => {
  const cardRefArr = useRef([]);
  const headingRef = useRef(null);

  const headingClass = `${typography["heading__secondary"]} ${typography["heading__secondary--grad"]}`;

  useLayoutEffect(() => {
    console.log(cardRefArr);
    const tl = gsap.timeline();
    tl.from(headingRef.current, {
      opacity: 0,
      ease: "power4.out",
      y: "-10rem",
      duration: 0.5,
    }).from(cardRefArr.current, {
      stagger: {
        each: 0.2,
        from: "center",
      },
      y: "10rem",
      opacity: 0,
    });
  }, []);

  const addToRef = (ele) => {
    cardRefArr.current.push(ele);
  };

  return (
    <section className={classes.whyChooseUs}>
      <h2 ref={headingRef} className={headingClass}>
        What's more?
      </h2>
      <div className={classes.reasons}>
        {data.map((d) => {
          return (
            <Reasons
              key={d.id}
              id={d.id}
              title={d.title}
              subtitle={d.subtitle}
              innerRef={addToRef}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
