import { Typography, Container } from "@mui/material";
import useFetch from "../hooks/useFetch";
import RecipesList from "./RecipesList";
import Loader from './Loader'

const Recipes = () => {

  const { error, isPending, data: recipes} = useFetch("http://localhost:8000/recipes")
  
  return (
    <Container sx={{width: 1, justifyContent: "center"}}>

      <Typography variant="h3" align="center" >
        Recipes
      </Typography>
      
      { error && <Typography variant="h5" align="center" margin="20px">{ error }</Typography> }
      { isPending && <Loader /> }
      { recipes && <RecipesList recipes={recipes} /> }    
    
    </Container>
  )
}



export default Recipes