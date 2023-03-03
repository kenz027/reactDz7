import Article from "./Article";
import Video from "./Video";
import { statusConverter } from "../HOCs/HOCStatus";
const VideoStatus = statusConverter(Video);
const ArticleStatus = statusConverter(Article);
export default function List(props) {
    const getRandId = ()=> {return self.crypto.randomUUID()}
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoStatus {...item} key={getRandId()} />
                );

            case 'article':
                return (
                    <ArticleStatus {...item} key={getRandId()} />
                );
        }
    });
};