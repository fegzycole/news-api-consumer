import React from "react";

import './index.scss';

export interface PaginationBtnProps {
  handleClick: () => void;
}

const PaginationBtn: React.FC<PaginationBtnProps> = ({ handleClick }) => {
  return (
    <section className="Pagination_Section">
      <button className="Pagination_Btn" onClick={handleClick}>
        Load More
      </button>
    </section>
  );
};

export default PaginationBtn;
