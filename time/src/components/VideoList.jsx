import Video from "./Video";

export default function VideoList(props){
    const randId = () => {return self.crypto.randomUUID()};
    return props.list.map(item => <Video url={item.url} date={item.date} key={`${randId()}`} />);
}