import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import Divider from "../Divider";
import { StoryCategories } from "../../store/stories/types";

export interface HeaderProps {
  selectedCategory: StoryCategories;
  handleClick: (val: StoryCategories) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedCategory, handleClick }) => {
  return (
    <>
      <TopSection />
      <Divider />
      <BottomSection
        selectedCategory={selectedCategory}
        handleClick={handleClick}
      ></BottomSection>
      <Divider />
    </>
  );
};

export default Header;
