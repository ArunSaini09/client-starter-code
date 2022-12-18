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
      <div><button onClick={() => {history.push(`/campus/${campus.id}/edit`)}}>Edit</button></div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      {campus.students.length===0 ? (<h1>No students enrolled in campus!</h1>) : (campus.students.map( (student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>             
          </div>
        );
      })
      )}
    </div>
  );
};

export default CampusView;