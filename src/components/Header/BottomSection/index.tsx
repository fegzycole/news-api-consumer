import { v4 as uuidv4 } from "uuid";

import { HeaderProps } from "../index";
import { StoryCategories } from "../../../store/stories/types";
import "./index.scss";

const categories = Object.values(StoryCategories).map((val) => val);

const BottomSection: React.FC<HeaderProps> = ({
  selectedCategory,
  handleClick,
}) => {
  return (
    <nav className="Categories_Container">
      <ul className="Categories">
        {categories.map((category) => (
          <li className="Category" key={uuidv4()}>
            <button
              onClick={() => handleClick(category)}
              className={`Category_Btn ${
                category === selectedCategory && `Selected`
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomSection;
