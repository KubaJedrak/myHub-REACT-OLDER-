import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar';
import Recipes from './components/Recipes'
import RecipeDetails from './components/RecipeDetails'
import ToDo from './components/ToDo'
import CreateRecipe from './components/CreateRecipe'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import TopBar from './components/TopBar';
import Home from './components/Home';

import Leaves from './images/leaves.jpeg'
import Shopping from './components/Shopping';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#66CC33',
    },
    secondary: {
      main: '#666666',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
  },
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#000',
        color: '#fff',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#66CC33",
          color: "#fff"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          margin: "20px auto"
        },
        h2: {
          margin: "20px auto"
        },
        h3: {
          margin: "20px auto"
        },
        h4: {
          margin: "20px auto"
        },
        h5: {
          margin: "10px auto"
        },
        h6: {
          margin: "10px auto"
        }
      }
    }
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container 
          sx={{
            minWidth: 1, 
            minHeight: 1, 
            margin: 0, 
            display: "flex", 
            justifyContent: "center", 
            backgroundColor: "#dedede"
          }} 
          className="App"
        >

          <TopBar /> 

          <Container align="center">
            <Switch>
              <Route exact path="/">
                <Home componentTitle="Home" />
              </Route>
              <Route exact path="/recipes">
                <Recipes componentTitle="Recipes" />
              </Route>
              <Route path="/recipes/:id">
                  <RecipeDetails />
              </Route>
              <Route path="/create-recipe">
                  <CreateRecipe />
              </Route>
              <Route path="/shopping">
                <Shopping componentTitle="Shopping List" />
              </Route>
              <Route path="/todo-list">
                <ToDo componentTitle="To-Do List" />
              </Route>
            </Switch>  
          </Container>  
          <Navbar  />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
