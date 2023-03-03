import New from "../components/New";
import Popular from "../components/Popular";
export const statusConverter = (Component) => {
  const HOCStatus = (props) => {
    const { views } = props;
    if (views < 100) {
      return (
        <New>
          <Component {...props} views={views} />
        </New>
      )
    } else if (views > 1000) {
      return (
        <Popular>
          <Component {...props} views={views} />
        </Popular>
      );
    }
  };
  return HOCStatus;
};
