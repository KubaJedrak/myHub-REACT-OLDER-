import { Container, TextField, Typography, List, ListItem, ListItemText, InputLabel, Select, MenuItem, Button, Divider } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from 'react'
import capitalizeFirstLetter from './functionalComponents/stringModifications'

const CreateRecipe = () => {

  let newRecipe = {
    name: "",
    imgURL: "",
    description: "",
    ingredients: [],
    instructions: []
  }

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [url, setURL] = useState("")
  const [ingredient, setIngredient] = useState("")
  const [weight, setWeight] = useState(0)
  const [unitType, setUnit] = useState('g');
  const [ingredients, setIngredients] = useState([])
  const [instruction, setInstruction] = useState("")
  const [instructions, setInstructions] = useState([])

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleURL = (event) => {
    setURL(event.target.value);
  };

  const changeUnit = (event) => {
    if (event.target.value !== "u") setUnit(event.target.value);
    else setUnit("");
  };

  const handleIngredient = (event) => {
    setIngredient(event.target.value)
  }

  const handleWeight = (event) => {
    setWeight(event.target.value)
  }

  const addIngredient = (event) => {
    event.preventDefault()
    setIngredients([...ingredients, {
      ingredName: ingredient.toLowerCase(),
      count: `${weight}${unitType}`,
      id: Math.round(Math.random() * 1000)
    }])
    event.target.reset()
  }

  const addInstruction = (event) => {
    setInstruction(capitalizeFirstLetter(event.target.value))
  }

  const addInstructions = (event) => {
    event.preventDefault()
    setInstructions([...instructions, instruction])
    event.target.reset()
  }

  const submitRecipe = () => {

    newRecipe = {
      name: name,
      imgURL: url,
      description: description,
      ingredients: ingredients,
      instructions: instructions
    }
    // fetch("http://localhost:8000/recipes", {
    //   method: "PUT",
    //   body: newRecipe
    // })

    console.log(newRecipe)

    setName("")
    setWeight(0)
    setUnit('g')
    setIngredients([])
    setInstruction("")
    setInstructions([])

    newRecipe = {
      name: "",
      imgURL: "",
      description: "",
      ingredients: [],
      instructions: []
    }
  }

  return (
    <Container sx={{padding: "20px 0px", minHeight: "94vh", marginBottom: "70px"}}>
      <Typography variant="h5" margin="0px 0px 20px">
        Create a new recipe
      </Typography>

      {/* Main Info Form */}
      <Box 
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <Typography variant="body1">Add Name and Picture</Typography>
        <TextField id="newRecipe-name" label="Recipe Name" variant="outlined" onChange={handleName} value={name} sx={{
          width: "50vw",
          margin: "10px auto",

        }} required />
        <TextField id="newRecipe-description" label="Description" variant="outlined" onChange={handleDescription} value={description} sx={{
          width: "50vw",
          margin: "10px auto",

        }} required />
        <TextField id="newRecipe-img-url" label="Recipe Image Address" onChange={handleURL} value={url} variant="outlined" sx={{
          width: "50vw",
          margin: "10px auto"
        }} required />             
      </Box>
      <Divider sx={{width: "80%"}} />

      <Box 
        sx={{
            display: "block", 
            width: "60%", 
            margin: "20px 0px", 
            padding: "0px 8px" , 
            border: "1px solid #9EADBD", 
            borderRadius: "4px", 
            textAlign: "left", 
            boxSizing: "border-box",
            backgroundColor: "#fff"
          }}
        >
          {(ingredients.length === 0) && <Typography sx={{margin: "20px 0px"}}>Start adding ingredients below</Typography>}
          {ingredients.map( ingredient => (

            <Box key={ingredient.id}>
              <Typography>{ingredient.ingredName} ({ingredient.count})</Typography>
              <Divider sx={{width: "100%"}} />
            </Box>
          ))}
      </Box>
  
      {/* Ingredients Form */}
      <Box sx={{alignSelf: "center"}} component="form" onSubmit={addIngredient} >
        <Typography variant="body1">Add ingredients (one at a time)</Typography>
        <TextField id="newRecipe-ingredient" onChange={handleIngredient} label="Add one ingredient at a time" variant="outlined" sx={{width: "50vw", margin: "10px auto"}} required />    
        <TextField id="newRecipe-ingredient" onChange={handleWeight} label="How much?" variant="outlined" sx={{width: "50vw", margin: "10px auto"}} required />    
        <Select
          labelId="newRecipe-ingredient-unitCount-label"
          id="newRecipe-ingredient-unitCount"
          label="Units"
          defaultValue="g"
          value={unitType}
          onChange={changeUnit}
          sx={{width: "50vw", margin: "10px auto"}}
        >
          <MenuItem value="g">Grams</MenuItem>
          <MenuItem value="ml">Milliliters</MenuItem>
          <MenuItem value="u">Item Count</MenuItem>
        </Select>
        <Button 
          variant="outlined" 
          color="primary" 
          sx={{alignSelf: "center", justifySelf: "center", margin: "20px", display: "block"}}
          type="submit"
        >
        Add Ingredient
        </Button>
      </Box>

      <Divider sx={{width: "80%"}} />

      <Box sx={{
            display: "block", 
            width: "60%", 
            margin: "20px 0px", 
            padding: "0px 8px" , 
            border: "1px solid #9EADBD", 
            borderRadius: "4px", 
            textAlign: "left", 
            boxSizing: "border-box",
            backgroundColor: "#fff"
          }}
        >
          {(instructions.length === 0) && <Typography sx={{margin: "20px 0px"}}>Start adding instructions below</Typography>}
          
          {instructions.map( (instruction, index) => (
            <Box key={index}>
              <Typography >{instruction}</Typography>
              <Divider sx={{width: "100%"}} />
            </Box>
          ))}
      </Box>

      {/* Instructions Form */}
      <Box sx={{alignSelf: "center"}} component="form" onSubmit={addInstructions}>
        <Typography variant="body1">Add instructions (one at a time)</Typography>
        <TextField id="newRecipe-instructions" label="What do I do?!" onChange={addInstruction} variant="outlined" sx={{width: "50vw", margin: "10px auto"}} required />    
        <Button 
          variant="outlined" 
          color="primary" 
          sx={{alignSelf: "center", justifySelf: "center", margin: "20px", display: "block"}}
          type="submit"
        >
        Add Instruction
        </Button>
      </Box>

      <Button 
        variant="contained" 
        color="secondary" 
        onClick={submitRecipe}
        sx={{
          width: "60%",
          font: "24px"
        }}
      >
        Add recipe!
      </Button>
    </Container>
  )
}

export default CreateRecipe


