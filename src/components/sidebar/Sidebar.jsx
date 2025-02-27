import "./Sidebar.css";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
      <ul className="sibar-links">
        <li>
          <Link to={'/'}>
            <IoHomeOutline />
            صفحه اصلی
          </Link>
        </li>
        <li className="active">
          <Link to={'/products'}>
            <MdOutlineProductionQuantityLimits />
            محصولات
          </Link>
        </li>
        <li>
          <Link to={'/comment'}>
            <BiCommentDetail />
            کامنت ها
          </Link>
        </li>
        <li>
          <Link to={'/users'}>
            <FiUsers />
            کاربران
          </Link>
        </li>
        <li>
          <Link to={'/orders'}>
            <IoBagCheckOutline />
            سفارشات
          </Link>
        </li>
        <li>
          <Link to={'/offs'}>
            <CiDollar />
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
