import './App.css';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material/Box';

const useStyles = makeStyles({
  AppBar: {
    backgroundColor: "#fff"
  
  },
  hero: {
    backgroundImage:  'linear-gradient(rgba(0,0,0,0.5)'
  }
});


function App() {
  const classes = useStyles();

  return (
    <div className="App">
       <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          <Typography variant="h6" color='primary' >
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
