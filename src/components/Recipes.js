import { Typography, Container, LinearProgress  } from "@mui/material";
import useFetch from "../hooks/useFetch";
import RecipesList from "./RecipesList";
import { useState, useEffect } from "react";
import Loader from './Loader'

const Recipes = () => {

  // const [data, setData] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  const { error, isPending, data: recipes} = useFetch("http://localhost:8000/recipes")
  
  // fetch("http://localhost:8000/recipes")
  // .then(res => res.json())
  // .then(data => {
  //   setData(data)
  //   setIsPending(false)
  //   setError(null)
  // })
  
  return (
    <Container sx={{minHeight: "100vh", width: 1, height: 1}}>

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