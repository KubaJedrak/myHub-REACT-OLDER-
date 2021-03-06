import { Typography, Container } from "@mui/material";
import useFetch from "../hooks/useFetch";
import RecipesList from "./RecipesList";
import Loader from './Loader'
import Title from "./ComponentTitle";

const Recipes = (title) => {

  const { error, isPending, data: recipes} = useFetch("http://localhost:8000/recipes")
  
  return (
    <Container sx={{width: 1, minHeight: "91vh", justifyContent: "center"}}>

    <Title title={title.componentTitle} />
      
      { error && <Typography variant="h5" align="center" margin="20px">{ error }</Typography> }
      { isPending && <Loader /> }
      { recipes && <RecipesList recipes={recipes} /> }    
    
    </Container>
  )
}



export default Recipes