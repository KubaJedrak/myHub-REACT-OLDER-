import { Button, Container, Divider, List, ListItem, TextField, Typography, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import capitalizeFirstLetter from './functionalComponents/stringModifications';

const ShoppingList = ({shopping}) => {

  const [unit, setUnit] = useState('g');
  const [name, setName] = useState('')
  const [count, setCount] = useState("")
  const [shoppingArr, setShoppingArr] = useState(shopping)

  let newItem = {
    "id": 9999,
    "name": name,
    "count": count,
    "status": false
  }

  const changeUnit = (event) => {
    if (event.target.value !== "u") setUnit(event.target.value);
    else setUnit("");
  };

  const handleName = (event) => {
    event.preventDefault()
    if (event.target.value !== "") {
      setName(event.target.value)
    }
  }

  const handleCount = (event) => {
    event.preventDefault()
    if (event.target.value !== 0) {
      setCount(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    newItem = {
      "id": Math.round(Math.random() * 10000),
      "name": name,
      "count": `${count}${unit}`,
      "status": false
    }
    setShoppingArr([...shoppingArr, newItem])
    setName("")
    setCount("")
    console.log(shoppingArr)
  }

  const handleDelete = (id) => {
    setShoppingArr(shoppingArr.filter(task => {
      return id !== task.id
    }))
  }

  return (

    <Container sx={{width: 1, minHeight: "91vh", justifyContent: "center"}}>

      <Box sx={{minHeight: "85vh"}}>
        <Box 
          sx={{ 
            width: 1, 
            height: "50vh",
            margin: 0,
            alignSelf: "center", 
            display: "flex", 
            flexWrap: "wrap", 
            border: "1px solid lightgray",
            borderRadius: 4,
            backgroundColor: "#fff"
          }}
        >
          <List sx={{width: "100%"}}>
            { shoppingArr.map( (item, index) => (
              <ListItem key={index} sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                padding: "2px 0px"
              }}
              >
                <Typography sx={{padding: "6px 16px"}}>
                  {capitalizeFirstLetter(item.name)} ({item.count})
                  {/* remove the weight later?     */}
                </Typography>
                <Button sx={{borderRadius: "50%"}} onClick={() => handleDelete(item.id)}><DeleteIcon /></Button>
                <Divider sx={{width: "100%", display: "block"}} />
              </ListItem>
            ))}
          </List>  

        </Box>
        <Box 
          onSubmit={handleSubmit} 
          component="form" 
          autoComplete="off" 
          noValidate 
        >
          <TextField 
            label="Item to buy" 
            variant="standard" 
            sx={{
              width: 8/10,
              margin: "20px auto"
            }} 
            onChange={handleName}
            value={name}
            // value={shoppingItem.name}
          />
          <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            <TextField 
              label="Number" 
              variant="standard" 
              sx={{
                width: 30/100,
                margin: "10px auto"
              }} 
              onChange={handleCount}
              value={count}
              // value={shoppingItem.name}
            />
            <Select
              labelId="newRecipe-ingredient-unitCount-label"
              id="newRecipe-ingredient-unitCount"
              label="Units"
              defaultValue="g"
              value={unit}
              onChange={changeUnit}
              sx={{width: 35/100, margin: "10px auto"}}
            >
              <MenuItem value="g">Grams</MenuItem>
              <MenuItem value="ml">Milliliters</MenuItem>
              <MenuItem value="u">Item Count</MenuItem>
            </Select>
          </Box>

          <Button 
            size="large" 
            variant="contained" 
            sx={{
              width: 70, 
              height: 70, 
              borderRadius: "35px", 
              display: "block",
              margin: "20px auto 180px"
            }} 
            color="secondary" 
            type="submit"
          >
            <AddIcon color="#fff" />
          </Button>
        </Box>
      </Box>  
    </Container>

  )
}

export default ShoppingList