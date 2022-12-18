/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import {Link, useHistory} from "react-router-dom"

const StudentView = (props) => {
  const { student } = props;

  if(!student)
  {
    return (<h1>No students found</h1>)
  }

  // Render a single Student view 
  return (
    <div className = "mt-3">
      <img src={student.imageUrl} alt = "student" height="200px"/>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>{student.email}</h3>
      {student.campus ? (<Link to ={`/campus/${student.campus.id}`}>{student.campus.name}</Link>) :
      (<h3>No affiliated campus</h3>)}
      {student.gpa ? (<h3>GPA: {student.gpa}</h3>):(<h3>GPA: N/A</h3>)}
    </div>
  );

};

export default StudentView;