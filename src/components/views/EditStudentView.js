/*==================================================
NewCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new campus page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditStudentView = (props) => {
  const {student, handleChange, handleSubmit } = props;
  const classes = useStyles();


  if(!student.id)
  {
    return (<h1>No student with this id</h1>)
  }

  // Render a New Campus view with an input form
  return (
    <div>
      <h1>Edit Student</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Edit {student.firstname}
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style={{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" onChange={(e) => handleChange(e)} value = {student.firstname} required />
            <br/>
            <br/>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" onChange ={(e) => handleChange(e)}  value = {student.lastname} required />
            <br/>
            <br/>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>ImageURL: </label>
            <input type="text" name="imageUrl" onChange ={(e) => handleChange(e)}  value = {student.imageUrl} required />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
            <input type="text" name="email" onChange={(e) => handleChange(e)} value = {student.email} required/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus ID: </label>
            <input type="number" name="campusId" onChange={(e) => handleChange(e)} value = {student.campusId}  step ="1" min="1"  required />
            <br/>
            <br/>
            
            <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
            <input type="number" name="gpa" onChange={(e) => handleChange(e)} value = {student.gpa}  step=".01" min ="0" max= "4" required />
            <br/>
            <br/>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  )
}

export default EditStudentView;