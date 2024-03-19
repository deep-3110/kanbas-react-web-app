import React from "react";
import { FaCaretDown, FaCheckCircle, FaEdit, FaEllipsisV, FaList, FaListAlt, FaPlus, FaPlusCircle, FaRegPlusSquare } from "react-icons/fa";
import { useNavigate, useParams, Link } from "react-router-dom";
import { KanbasState } from "../../store";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    selectAssignment,
  } from "./assignmentReducer";
  

import { useSelector, useDispatch } from "react-redux";
function Assignments() {
  const assignmentList = useSelector((state: KanbasState) => 
  state.assignmentsReducer.assignments);
const assignment = useSelector((state: KanbasState) => 
  state.assignmentsReducer.assignment);
const dispatch = useDispatch();  
const navigate = useNavigate();
const randomID = generateUniqueId();
const initialState = {
  assignment: {
    title: "New Assignment",
    dueDate: "09/01/2020",
    availableUntilDate: "10/09/2020",
    availableFromDate: "10/09/2021",
    description: "This is a Assignment",
    course: "RS101",
    module: "Multiple Modules",
    due: "Due Feb 15 at 11:59pm",
    points: "100"
  }
};
const handleNewAssignments = () => {
  navigate(`/Kanbas/Courses/${courseId}/Assignments/NewEditor`);
};
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}
const handleDelete = (assignment: { _id: any; }) => {
  const isConfirmed = window.confirm('Are you sure you want to delete?');
  if (isConfirmed) {
    console.log(assignment._id);
    dispatch(deleteAssignment(assignment._id))
  }
};
  const { courseId } = useParams();
  
  return (
    <>
    <div className="d-flex">
    <div className="flex-fill">
      <span>
        <span className="float-end">
          <button className="btn btn-outline-secondary"><FaPlus/> Group</button>
          <Link  to={`/Kanbas/Courses/${courseId}/Assignments/Editor`}  onClick={() => dispatch(selectAssignment(initialState.assignment))} ><FaPlus/> Assignment</Link>
          <button className="btn btn-outline-secondary"><FaEllipsisV/></button>

        </span>
        <input type="text" className="form-control w-50" id="assignmentSearch" placeholder="Search for Assignment"/>
      </span>
      <hr/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> <FaCaretDown className="me-2"/> ASSIGNMENTS
            <span className="float-end">
              <span className="border me-3" style={{borderRadius: 40, width: 120, textAlign: "center"}}>40% of Total</span>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.filter((assignment) => assignment.course === courseId).map((assignment,index) => (
              <li key ={index} className="list-group-item" >
                <FaEllipsisV className="me-2" />
                <FaEdit className="me-2"/>
                <Link
                  key={assignment._id}
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} 
                   onClick={() => dispatch(selectAssignment(assignment))}>
                    {assignment.title}
                    </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />  <button className="btn btn-danger"
           onClick={() => handleDelete(assignment)}>
          Delete
        </button>
</span><br/>
                <span style={{fontSize: 10}}><a style={{color:"red"}}>{assignment.module}</a> | {assignment.dueDate} | {assignment.points}</span>
              
              </li>))}
          </ul>
        </li>
      </ul>
      </div>
      </div>
    </>
);}
export default Assignments;