import { Link } from "react-router-dom";
import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { FaGlasses } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <div>
      <span className="float-end"><button className="btn btn-outline-secondary"><FaGlasses/> Student View</button></span>
      <nav aria-label="breadcrumb">
      <ol className="breadcrumb" style={{marginLeft:80}}>
          <li className="breadcrumb-item"><Link to="" style={{ color: "red"  , textDecoration: "none" }}><HiMiniBars3 /> &nbsp;  Course : {course?.name} </Link></li>
          <Routes>
            <Route path="Home" element={<li className="breadcrumb-item active " aria-current="page"><Link to="" style={{ color: "black"  , textDecoration: "none" }} >Home</Link></li>} />
            <Route path="Modules" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black" , textDecoration: "none" }}>Modules</Link></li>} />
            <Route path="Piazza" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black" , textDecoration: "none" }}>Piazza</Link></li>} />
            <Route path="Zoom Meetings" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black", textDecoration: "none"  }}>Zoom Meetings</Link></li>} />
            <Route path="Assignments" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black" , textDecoration: "none" }}>Assignments</Link></li>} />
            <Route path="Assignments/:assignmentId" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black", textDecoration: "none"  }}>Assignment Editor</Link></li>} />
            <Route path="Quizzes" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black" , textDecoration: "none" }}>Quizzes</Link></li>} />
            <Route path="Grades" element={<li className="breadcrumb-item active" aria-current="page"><Link to=""style={{ color: "black", textDecoration: "none"  }}>Grades</Link></li>} />
            <Route path="People" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black", textDecoration: "none"  }}>People</Link></li>} />
            <Route path="Panapto Video" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black", textDecoration: "none"  }}>Panapto Video</Link></li>} />
            <Route path="Discussions" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black" , textDecoration: "none" }}>Discussions</Link></li>} />
            <Route path="Announcements" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black", textDecoration: "none"  }}>Announcements</Link></li>} />
            <Route path="Pages" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black" , textDecoration: "none" }}>Pages</Link></li>} />
            <Route path="Files" element={<li className="breadcrumb-item active" aria-current="page"><Link to="" style={{ color: "black" , textDecoration: "none" }}>Files</Link></li>} />

          </Routes>
        </ol>
        <hr/>
      </nav>
      <h6 style={{marginLeft: 80}}>CS {course?._id} {course?.number}</h6>
      </div>
      <CourseNavigation />
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "300px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="Grades" element={<Grades/>} />
            <Route path="People" element={<h1>People</h1>} />
            <Route path="Panapto Video" element={<h1>Panapto Video</h1>} />
            <Route path="Discussions" element={<h1>Discussions</h1>} />
            <Route path="Announcements" element={<h1>Announcements</h1>} />
            <Route path="Pages" element={<h1>Pages</h1>} />
            <Route path="Files" element={<h1>Files</h1>} />
          </Routes>
        </div>
    </div>
  );
}
export default Courses