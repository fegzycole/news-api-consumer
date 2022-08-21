import { v4 as uuidv4 } from "uuid";
import Story from "../../components/Story";

import { StoryCategories, StoryData } from "../../store/stories/types";
import './index.scss';

export interface StoriesProps {
  topStory: StoryData;
  selectedCategory: StoryCategories;
  stories: StoryData[];
}

const Stories: React.FC<StoriesProps> = ({
  topStory,
  selectedCategory,
  stories,
}) => {
  return (
    <section className="Stories_Container">
      <Story story={topStory} selectedCategory={selectedCategory} topStory />
      {stories.map((story, idx) => (
        <Story
          key={uuidv4()}
          story={story}
          selectedCategory={selectedCategory}
          reverse={idx % 2 === 0}
        />
      ))}
    </section>
  );
};

export default Stories;
