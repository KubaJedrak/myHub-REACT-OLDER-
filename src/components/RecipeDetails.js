import useFetch from '../hooks/useFetch'
import { useHistory, useParams } from 'react-router-dom'
import { Container, Card, CardMedia, CircularProgress, CardContent, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import capitalizeFirstLetter from './functionalComponents/stringModifications';

import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const RecipeDetails = () => {
  const { id } = useParams();
  const { error, isPending, data: recipe } = useFetch(`http://localhost:8000/recipes/${id}`)

  return (

    <Container sx={{display: "flex", justifyContent: "center"}}>
      { error && <Container> { error } </Container> }
      { isPending && <CircularProgress sx={{margin: 20}} />}
      { recipe && (
        <Card sx={{width: 1, margin: "30px auto 100px", textDecoration: "none"}} >        
          <CardMedia
            component="img"
            alt={`Image of ${recipe.name}`}
            image={`${recipe.imgURL}`}
          />
          <CardContent >
            <Typography variant="h4" gutterBottom>{recipe.name }</Typography>

            <Container sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
              <Button size="small" sx={{display: "flex", flexDirection: "column", fontSize: 11}} disabled> <DeleteIcon /> Remove Recipe </Button>
              <Button size="small" sx={{display: "flex", flexDirection: "column", fontSize: 11}} disabled > <AddShoppingCartIcon /> Add Items to List </Button>
            </Container>

            <Typography variant="h6" gutterBottom>Ingredients</Typography>
            <List dense sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row", marginRight: "auto"}} disablePadding>
              {recipe.ingredients.map( ingredient => (
                <ListItem disablePadding>
                  <ListItemText key={ingredient.id} primary={`${capitalizeFirstLetter(ingredient.ingredName)} (${ingredient.count})`} sx={{fontSize: 0.75}} />
                </ListItem>
              ))}
            </List>

            <Typography variant="h6">Instructions</Typography>       
            <List dense sx={{ display: "flex", flexWrap: "wrap", flexDirection: "row", marginRight: "auto"}} disablePadding>  
              {recipe.instructions.map( instruction => (
                <ListItem disablePadding>
                  <ListItemText primary={instruction} sx={{fontSize: 0.75}} />
                </ListItem>
              ))}       
            </List>
          </CardContent>
        </Card>
      )}
    </Container>
  )
}

export default RecipeDetails