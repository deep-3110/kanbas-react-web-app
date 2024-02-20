import { Link, useLocation } from "react-router-dom";
import {FaRegEyeSlash} from "react-icons/fa";
import "./index.css"; 
function CourseNavigation() {
  const links = [{label:"Home"}, {label:"Modules"}, {label:"Piazza"}, 
  {label:"Zoom Meetings"},
  {label:"Assignments"}, 
   {label:"Quizzes"}, {label:"Grades"}, {label:"People"},
   {label: "Panapto Video", icon: <FaRegEyeSlash className="fs-1" />} ,
   {label: "Discussions", icon: <FaRegEyeSlash className="fs-1" />},
   {label: "Announcements", icon: <FaRegEyeSlash className="fs-1" />}, 
   {label: "Pages", icon: <FaRegEyeSlash className="fs-1" />}, 
   {label: "Files", icon: <FaRegEyeSlash className="fs-1" />}];
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={link.label}><div>{link.label}{link.icon}</div></Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;