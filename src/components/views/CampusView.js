/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link, useHistory } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  const history = useHistory();
  
  if(!campus)
  {
    return <h1>No campus with this id found!</h1>
  }
  
  // Render a single Campus view with list of its students
  return (
    <div className="mt-3">
      <img src={campus.imageUrl} alt={campus.name} height="200px"/>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <button className="btn btn-secondary" onClick={() => {history.push(`/campus/${campus.id}/edit`)}}>Edit</button>
      <Link to={`/campuses`}>
        <button className="btn btn-danger" onClick={() => props.deleteCampus(campus.id)}>Delete</button>
      </Link>
      <h3>Students:</h3>
      {campus.students.length===0 ? (<h1>No students enrolled in campus!</h1>) : (campus.students.map( (student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id} className ="row">
            <div className="col">
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
            </div>
            <div className="col">
              <button className="btn btn-danger" onClick={() => {props.removeStudent(student.id)}}>Unenroll</button>   
            </div>        
          </div>
        );
      })
      )}
      <button className="btn btn-primary" onClick={() => {history.push('/newstudent',{campusId:campus.id})}}>Enroll students</button>
    </div>
  );
};

export default CampusView;