import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Box } from "@mui/system"

const RecipesList = ({ recipes }) => {

  return (
    <Box sx={{ width: 1, margin: 0, alignSelf: "center", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center"}}>
      {recipes.map( recipe => (
        <Card key={recipe.id} component={Link} to={`/recipes/${recipe.id}`} sx={{margin: "10px auto 20px", textDecoration: "none"}}>
          <CardMedia
            component="img"
            alt="image of food"
            image={`${recipe.imgURL}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {recipe.description}
            </Typography>
          </CardContent>

        </Card>
      ))}
      <Button 
        variant="contained" 
        color="secondary" 
        component={Link}
        to="/create-recipe"
        sx={{alignSelf: "center", justifySelf: "center", marginBottom: "100px"}}>Add a Recipe</Button>
    </Box>
  )
}

export default RecipesList