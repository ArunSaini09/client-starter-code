/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

// Define styling for the header
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'sans-serif', 
    fontSize: '35px', 
    color: 'darkblue'
  },
  appBar:{
    backgroundColor: 'white',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }
}));

const HomePageView = () => {
  const classes = useStyles();
  // Render Home page view
  return (
    <div>
      <h1>Home Page</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card-body">
              <h1>Campuses</h1>
              <img  className = "mb-3" src="https://www.slashfilm.com/wp/wp-content/images/ZZ48055A88.jpg" alt="students" height = "400px" width="400px"/>
              <Link className={classes.links} to={'/campuses'} >
                <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
                  View Campuses
                </Button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <h1>Students</h1>
              <img  className = "mb-3" src="https://ichef.bbci.co.uk/images/ic/640x360/p0915n36.jpg" alt="students" height = "400px" width="400px"/>
              <Link className={classes.links} to={'/students'} >
                <Button variant="contained" color="primary">
                  View Students
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );    
}

export default HomePageView;