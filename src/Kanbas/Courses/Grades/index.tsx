// Grades.js
import React from "react";
import { FaArrowDown, FaCog, FaEllipsisV, FaFileExport, FaFileImport, FaFilter, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css"; // Import the external CSS file
import { FaKeyboard } from "react-icons/fa6";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <div>
                 <div className="table-responsive">
                <table width="100%">
                    <tbody>
                        <tr>
                            <td>
                            <select style={{ border: 0 ,color: "red"}}>
   <option value="Gradebook">Gradebook</option>
                                        </select>  
                            </td>
                            <td>
                                <div className="float-end">
                                <span style={{ color: "red" }}>  <FaKeyboard />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          
                                    <button className="btn btn-outline-secondary"><FaFileImport />Import</button>
                                    <button className="btn btn-outline-secondary" id="select-export"><FaFileExport />
                                        <select style={{ border: 0 }}>
                                            <option value="Export">Export</option>
                                        </select>
                                    </button>
                                    <button className="btn btn-outline-secondary"><FaCog /></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="text-fields-name"><h3>Student Names</h3></label>
                                <div className="input-group">
                                    <span className="input-group-text"><FaSearch /></span>
                                    <input className="form-control" placeholder="Search Student" />
                                    <span className="input-group-text" style={{ marginRight: 20 }}><FaArrowDown /></span>
                                </div>
                            </td>
                            <td>
                                <label htmlFor="text-fields-assignment"><h3>Assignment Names</h3></label>
                                <div className="input-group">
                                    <span className="input-group-text"><FaSearch /></span>
                                    <input className="form-control" placeholder="Search Assignments" />
                                    <span className="input-group-text" style={{ marginRight: 20 }}><FaArrowDown /></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <button className="btn btn-outline-secondary"><FaFilter />Apply Filters</button><br /><br />
                <table className="table table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th>Student Name</th>
                            {as.map((assignment) => (<th key={assignment._id}>{assignment.title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={enrollment._id}>
                                    <td style={{ color: 'red' }}>{user?.firstName} {user?.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td key={assignment._id}><div className="input-group">
                                            <input type="number" className="form-control" value={grade?.grade || ""} />
                                            <span className="input-group-text">
                                                <FaSignOutAlt />
                                            </span>
                                        </div>
                                        </td>);
                                    })}
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>);
}

export default Grades;
