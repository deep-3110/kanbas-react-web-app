import React from 'react';
import { FaBullhorn, FaBullseye, FaChartBar, FaChevronCircleRight, FaCross, FaFileImport, FaRegBell, FaRemoveFormat } from 'react-icons/fa';
import { redirect } from 'react-router';

const CourseStatus: React.FC = () => {
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', width: 240}}>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaFileImport/> Import Existing Content</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaChevronCircleRight/> Import From Commons</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaBullseye/> Choose Home Page</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaChartBar/> View Course Stream</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaBullhorn/> New Announcement</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaChartBar/> New Analytics</a>
        <a href="#" className="btn btn-outline-secondary" style={{textAlign: 'left', margin: 5}}><FaRegBell/> View Course Notificatons</a>
    </div>

                    
      <h3>To Do</h3>
      <hr/>
      <ul>
    <li><a style={{color: 'red'}} href="#">Lecture CS1234.56789.2023 Sep 14 at 1:30pm</a></li>
    <li><a style={{color: 'red'}} href="#">Lecture CS1234.56789.2023 Sep 18 at 1:30pm</a></li>
    <li><a style={{color: 'red'}} href="#">CS 5678 09 FA24 Lecture Sep 18 at 4pm</a></li>
</ul>

    </div>
  );
};

export default CourseStatus;
