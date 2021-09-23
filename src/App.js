import './App.css';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { theme } from './theme';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  
  },
  hero: {
    backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    }
  }));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
       <AppBar className={classes.appBar} position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color='primary' >
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
     <Box className={classes.hero}>
        <Box>React Blog</Box>
    </Box> 
  </div>

  );
}

export default App;
