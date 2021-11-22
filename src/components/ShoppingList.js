import { Button, Container, Divider, List, ListItem, TextField, Typography, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import Title from "./ComponentTitle";
import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import capitalizeFirstLetter from './functionalComponents/stringModifications';

const ShoppingList = (shopping) => {

  let shoppingArr = shopping.shopping

  const [unitType, setUnit] = useState('g');

  const [newItem, setNewItem] = useState({
    "id": 9999,
    "name": "",
    "count": "",
    "status": false
  })

  const changeUnit = (event) => {
    if (event.target.value !== "u") setUnit(event.target.value);
    else setUnit("");
  };

  const handleName = (e) => {
    e.preventDefault()

  }

  const handleCount = (e) => {
    e.preventDefault()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  const handleDelete = (id) => {
    // setTasksList(tasksList.filter(task => {
    //   return id !== task.id
    // }))
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
              <ListItem key={item.id} sx={{
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
              // value={shoppingItem.name}
            />
            <Select
              labelId="newRecipe-ingredient-unitCount-label"
              id="newRecipe-ingredient-unitCount"
              label="Units"
              defaultValue="g"
              value={unitType}
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