import SearchIcon from "../../../assets/Union.svg";
import Logo from "../../../assets/logo.svg";
import Hamburger from "../../Hamburger";

import "./index.scss";

const TopSection = () => {
  return (
    <div className="TopSection">
      <div className="Logo">
        <img src={Logo} alt="Anderson Post Icon" />
      </div>
      <Hamburger />
      <nav className="Nav">
        <ul className="Nav_Item">
          <li className="Actions">
            <button className="Actions_Item Btn Hide_Sm">NewsLetter</button>
            <button className="Actions_Item Btn Hide_Sm">Sign In</button>
            <button className="Subscribe Btn Hide_Sm">Subscribe</button>
            <button className="Search_Icon Btn">
              <img src={SearchIcon} alt="Search Icon" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopSection;
