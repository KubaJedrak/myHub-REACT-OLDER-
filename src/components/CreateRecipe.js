import { Container, TextField, Typography, List, ListItem, ListItemText, InputLabel, Select, MenuItem, Button } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

const CreateRecipe = () => {

  let newRecipe = {
    name: "",
    imgURL: "",
    description: "",
    ingredients: [    // array of objects
      {
        ingredName: "",
        count: 0,
        id: 1
      }
    ],
    instructions: [   // array of strings

    ]
  }

  const [name, setName] = useState("")
  const [weight, setWeight] = useState(0)
  const [unitType, setUnit] = useState('g');
  const [ingredients, setIngredients] = useState([])
  // const [ingredient, setIngredient] = useState({
  //   ingredName: "",
  //   count: 0,
  //   id: 9999
  // })



  const changeUnit = (event) => {
    setUnit(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleWeight = (event) => {
    setWeight(event.target.value)
  }

  const addIngredient = (event) => {
    event.preventDefault()
    setIngredients([...ingredients, {
      ingredName: name,
      count: `${weight}${unitType}`,
      id: Math.round(Math.random() * 1000)
    }])
    console.log(ingredients)
  }

  return (
    <Container sx={{padding: "20px 0px", minHeight: "94vh"}}>
      <Typography variant="h5" margin="0px 0px 20px">
        Create a new recipe
      </Typography>

      <Box 
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >

        <TextField id="newRecipe-name" label="Recipe Name" variant="outlined" sx={{
          width: "50vw",
          margin: "20px auto",

        }} required />
        <TextField id="newRecipe-img-url" label="Recipe Image Address" variant="outlined" sx={{
          width: "50vw",
          margin: "20px auto"
        }} required />        
        {/* {(ingredientList.length === 0) && <Typography sx={{margin: "20px 0px", border: "1px solid #9EADBD", borderRadius: "4px" }}>Start adding ingredients below</Typography>} */}


      
      </Box>
  
      <Box sx={{alignSelf: "center"}} component="form" >

        <TextField id="newRecipe-ingredient" onChange={handleName} label="Add one ingredient at a time" variant="outlined" sx={{width: "50vw", margin: "20px auto"}} required />    
        <TextField id="newRecipe-ingredient" onChange={handleWeight} label="How much?" variant="outlined" sx={{width: "50vw", margin: "20px auto"}} required />    
        <InputLabel id="newRecipe-ingredient-unitCount-label">Units</InputLabel>
        <Select
          labelId="newRecipe-ingredient-unitCount-label"
          id="newRecipe-ingredient-unitCount"
          label="Unit Type"
          defaultValue="g"
          value={unitType}
          onChange={changeUnit}
          sx={{width: "50vw"}}
        >
          <MenuItem value="g">Grams</MenuItem>
          <MenuItem value="ml">Milliliters</MenuItem>
          <MenuItem value="units">Item Count</MenuItem>
        </Select>
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{alignSelf: "center", justifySelf: "center", margin: "20px", display: "block"}}
          onClick={addIngredient}
          type="submit"
        >
        Add Ingredient
        </Button>

        

        <Box className="listBox">
          <List>
            {ingredients.map( ingredient => (
              <ListItem key={ingredient.id}>
                <ListItemText primary={ingredient.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>




    </Container>





  )

}

export default CreateRecipe


