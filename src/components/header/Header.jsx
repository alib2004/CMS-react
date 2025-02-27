import "./Header.css";
import { CiBellOn } from "react-icons/ci";
import { CiBrightnessDown } from "react-icons/ci";

const Header = () => {
  return (
    <div className="header">
      <div className="admin-profile">
        <img src="/img/saeedi.jpeg" alt="" />
        <div>
          <h1>علی بیغوله</h1>
          <h3>فرانت اند دولوپر</h3>
        </div>
      </div>
      <div className="header-left">
        <div className="searchbox">
          <input type="text" placeholder="جستجو کنید .." />
          <button>جستجو</button>
        </div>
        <button className="header-left-icons">
          <CiBellOn size={'40px'}/>
        </button>
        <button className="header-left-icons">
          <CiBrightnessDown size={'40px'}/>
        </button>
      </div>
    </div>
  );
};

export default Header;
