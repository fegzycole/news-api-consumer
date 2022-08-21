import moment from "moment";

import { StoryCategories, StoryData } from "../../store/stories/types";
import Divider from "../Divider";
import DefaultIcon from '../../assets/default_news.jpeg';
import "./index.scss";

export interface TopStoryProps {
  story: StoryData;
  selectedCategory: StoryCategories;
  topStory?: boolean;
  reverse?: boolean;
}

const TopStory: React.FC<TopStoryProps> = ({
  story,
  selectedCategory,
  topStory,
  reverse,
}) => {
  let storyHeader, storyTime, classPrefix;

  if (topStory) {
    if (selectedCategory === StoryCategories.TopHeadlines) {
      storyHeader = "breaking news";
    } else {
      storyHeader = `latest ${selectedCategory} news`;
    }

    storyTime = moment(story.publishedAt).fromNow();
    classPrefix = "Top_Story";
  } else {
    storyTime = `${story.author} - ${moment(story.publishedAt).format("LL")}`;
    classPrefix = "Story";
  }

  return (
    <article className="Story">
      <a href={story.url}>
        <h5 className="Story_Header">{storyHeader}</h5>
        <section className={`${classPrefix}_Section ${reverse && "Reverse"}`}>
          <div className={`${classPrefix}_Section_Item`}>
            <img
              src={story.urlToImage || DefaultIcon}
              alt={story.title}
              className="Story_Image"
            />
          </div>
          <div
            className={`${classPrefix}_Section_Item ${classPrefix}_Section_Centered`}
          >
            <h6 className="Story_Source">{story.source.name}</h6>
            <h3 className={`${classPrefix}_Title`}>{story.title}</h3>
            <h4 className={`${classPrefix}_Description`}>
              {story.description}
            </h4>
            <p className={`${classPrefix}_Time`}>{storyTime}</p>
          </div>
        </section>
        <Divider />
        <div className="Story_Util" />
      </a>
    </article>
  );
};

export default TopStory;
