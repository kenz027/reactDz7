import DateTime from "./DateTime";
import { dateTimePrettyHOC } from "../HOCs/DateTimePretty";
const DateTimePretty = dateTimePrettyHOC(DateTime);
export default function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty {...props} date={props.date} />
        </div>
    )
}