import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <>
      <div className="mb-3 row align-items-center">
        <label htmlFor="assignmentSearch" className="col-form-label col-sm-auto"></label>
        <div className="col">
          <input type="text" className="form-control w-50" id="assignmentSearch" placeholder="Search for Assignment" />
        </div>
        <div className="col text-end">
          <button className="">Group</button>
          <button className="">Assignment</button>
          <select className="">
            <option>Edit Assignment Dates</option>
            <option>Speed Grader</option>
            <option>Duplicate</option>
            <option>Delete</option>
            <option>Move To...</option>
            <option>Send To...</option>
            <option>Copy To...</option>
            <option>Share to Commons</option>
          </select>
        </div>
      </div>

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Assignments;
