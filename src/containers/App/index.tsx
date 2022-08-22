import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { Report } from "notiflix/build/notiflix-report-aio";

import Loader from "../../components/Loader";
import Header from "../../components/Header";
import { RootState } from "../../store";
import { getStories } from "../../store/stories/actions";
import { StoryCategories } from "../../store/stories/types";
import Stories from "../Stories";
import PaginationBtn from "../../components/Pagination";

const PAGE_NUMBER = 1;

function App() {
  const dispatch = useDispatch();

  const { stories, fetchingStories, error } = useSelector(
    (state: RootState) => state.stories
  );

  const [selectedCategory, setSelectedCategory] = useState<StoryCategories>(
    StoryCategories.TopHeadlines
  );

  const [currentPageNumber, setCurrentPageNumber] =
    useState<number>(PAGE_NUMBER);

  const fetchStories = useCallback(
    async (category: StoryCategories, page: number) => {
      await dispatch(getStories(category, page) as unknown as AnyAction);
    },
    [dispatch]
  );

  const handleClick = (val: StoryCategories) => {
    setSelectedCategory(val);
    setCurrentPageNumber(PAGE_NUMBER);
  };

  const increasePageCount = () => {
    const newPageNumber = currentPageNumber + PAGE_NUMBER;
    setCurrentPageNumber(newPageNumber);
  };

  useEffect(() => {
    fetchStories(selectedCategory, currentPageNumber);
  }, [fetchStories, selectedCategory, currentPageNumber]);

  useEffect(() => {
    if (error) {
      Report.failure("Error", error, "Close");
    }
  }, [error]);

  const hideLoader = !fetchingStories && stories && stories.length;

  return (
    <div className="Container">
      <Header selectedCategory={selectedCategory} handleClick={handleClick} />
      {hideLoader ? (
        <main>
          <Stories
            stories={stories}
            topStory={stories[0]}
            selectedCategory={selectedCategory}
          />
          <PaginationBtn handleClick={increasePageCount} />
        </main>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
