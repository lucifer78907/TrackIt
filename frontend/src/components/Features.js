import Feature from "./Feature";
import classes from "./Features.module.scss";
import typography from "./extras/typography.module.scss";
import feature1Img from "../assets/images/Feature-1.svg";
import feature2Img from "../assets/images/Feature-2.svg";
import feature3Img from "../assets/images/Feature-3.svg";

const data = [
  {
    id: 1,
    title: "Real-Time Bus Tracking",
    content:
      "This feature allows users to track the real-time location of the bus they are waiting for. Users can see the current location of the bus on a map and receive updates on its estimated arrival time",
    image: feature1Img,
    reverse: true,
  },
  {
    id: 2,
    title: "Notifications for Bus Arrivals",
    content:
      "With this feature, users can receive notifications when their bus is about to arrive at their stop. This can help users plan their travel more efficiently and avoid missing their bus.",
    image: feature2Img,
    reverse: false,
  },
  {
    id: 3,
    title: "Bus Route Information",
    content:
      "This feature provides users with information on the bus routes and stops in their area. Users can view the bus route map and timetable, as well as search for specific routes or stops.",
    image: feature3Img,
    reverse: true,
  },
];

const Features = () => {
  return (
    <section className={classes.features}>
      <h2 className={typography["heading__secondary"]}>
        What makes our app stand out
      </h2>
      {data.map((d) => {
        return (
          <Feature
            key={d.id}
            img={d.image}
            title={d.title}
            content={d.content}
            reverse={d.reverse}
          />
        );
      })}
    </section>
  );
};

export default Features;
