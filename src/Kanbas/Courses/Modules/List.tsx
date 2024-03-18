import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaArrowDown, FaCaretDown, FaCaretRight, FaLink } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  type Module = {
    _id: string;
    name: string;
    lessons?: { _id: string; name: string }[];
    course: string;
  };
  const [selectedModule, setSelectedModule] = useState<Module | null>(moduleList[0]);

  const toggleModule = (module: Module) => {
    dispatch(setModule(module));
    setSelectedModule((prevModule) => (prevModule === module ? null : module));
  };



  return (
    <>
        <div>
        <button className="btn btn-outline-secondary">Collapse All</button>
        <button className="btn btn-outline-secondary">View Progress</button>
        <button className="btn btn-outline-secondary"><FaCheckCircle className="text-success"/>
        <select style={{border: 0}}>
            <option>Publish All</option>
            <option>Unpublish All</option>
            <option>Unpublish All</option>
        </select>
        </button>
        <button className="btn btn-danger"> + Module</button>
        <button className="btn btn-outline-secondary"><FaEllipsisV/></button>
      </div>
      <hr/>

      
      <div className="flex-fill" >
        <div className="mb-3">
          
  <div style={{ display: 'flex', gap: '10px' }}> 
 
          <input className="form-control mb-1"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }/><br/>
          <textarea className="form-control mb-1"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
         
        </div>
        <br></br>
        <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
            <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
        </div>
      </div>
      <ul className="list-group wd-modules">
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => toggleModule(module)}>
            <span className="float-end">
              
              </span>
            <div>
              <FaEllipsisV className="me-2" />
              {selectedModule === module ? (
                <FaCaretDown className="me-2" />
              ) : (
                <FaCaretRight className="me-2" />
              )}
              
              {module.name}
              <br/>
              {module.description}
              <span className="float-end">

                <FaCheckCircle className="text-success" />
                <FaCaretDown className="ms-2" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              &nbsp;
                <button className="btn btn-primary"
               
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button className="btn btn-danger"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
              </span>
            </div>
            {selectedModule === module && (
              <ul className="list-group">
                {module.lessons?.map((lesson: { _id: string; name: string }) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    <FaLink className="me-2"/>
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;