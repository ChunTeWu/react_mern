import logo from './logo.svg';
import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import DisplayItem from './components/displayItem/displayItem.js';
import CreateItem from './components/createItem/createItem.js';
import useStyles from './styles.js';
function App() {
  // set the classes to what is setted in styles.js
  const classes = useStyles();
  return (
    <div className="App">
    {/* element from materialUI */}
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Create Item</Typography>
      </AppBar>

      {/* grow in show the component; triggers the enter or exit animation. */}
      <Grow in>
        {/* container = flexbox container */}
        <Grid container justify='space-between' alignItems='strect'>
          {/* item = display in flex, number/screen size grid setting */}
          {/* set the grid size of display area */}
          <Grid item xs={12} sm={7}>
            {/* warp with app bar */}
            <AppBar className={classes.appBar} position='static' color='inherit'>
              {/* display function from displayitem folder */}
              <DisplayItem />
            </AppBar>
          </Grid>
          {/* set size of creation area */}
          <Grid item xs={12} sm={4}>
            <AppBar className={classes.appBar} position='static' color='inherit'>
              {/* create function from createitem folder */}
              <CreateItem />
            </AppBar>
          </Grid>
        </Grid>
      </Grow>
    </Container>
    </div>
  );
}

export default App;
