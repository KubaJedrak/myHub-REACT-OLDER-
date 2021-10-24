import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import WeatherBar from './components/WeatherBar';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes'
import RecipeDetails from './components/RecipeDetails'
import CreateRecipe from './components/CreateRecipe'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';
import { Container, Typography } from '@mui/material';


const theme = createTheme({
  palette: {
    type: light,
    primary: {
      main: '#00d4a4',
    },
    secondary: {
      main: '#ffd600',
    },
    info: {
      main: '#98b0a9',
    },
    warning: {
      main: '#ffd800',
    },    
  },
  typography: {
    fontFamily: 'Quicksand',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffd600"
        }
      }
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#00d4a4"
        }
      }
    },
    // `&.Mui-selected`: {
    //   styleOverrides: {
    //     root: {
    //       color: "#ffd600"
    //     }
    //   }
    // }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container sx={{minHeight: "100vh", margin: 0, display: "flex", justifyContent: "center"}} className="App">

            {/* <WeatherBar />     */}

            <Container sx={{width: 0.9, height: 0.9}} align="center">
              <Switch>
                <Route exact path="/">
                  <Typography variant="h2" sx={{margin: 0}}>Home</Typography>
                </Route>
                <Route path="/recipes">
                  <Recipes />
                </Route>
                <Route path="/recipes/:id">
                    <RecipeDetails />
                </Route>
                <Route path="/create-recipe">
                    <CreateRecipe />
                </Route>
                <Route path="/shopping">
                  <Typography variant="h2" sx={{margin: 0}}>Shopping List</Typography>
                </Route>
                <Route path="/todo-list">
                  <Typography variant="h2" sx={{margin: 0}}>To-Do List</Typography>
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
