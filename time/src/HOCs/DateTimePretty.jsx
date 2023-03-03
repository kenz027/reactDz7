import moment from "moment";
import "moment/locale/ru";

export const dateTimePrettyHOC = (Component) => {
  const HOCDate = (props) => {
    const { date } = props;
    const prettyDate = moment(date).fromNow();
    return <Component {...props} date={prettyDate} />;
  };
  return HOCDate;
};
