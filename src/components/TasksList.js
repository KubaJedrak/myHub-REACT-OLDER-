
import { Button, Divider, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = ({ tasks }) => {

  // const [taskList, setTaskList] = useState(tasks)
  // const [newTask, setNewTask] = useState("")

  // const tasksInProgress = taskList.filter ( task => task.status === true )
  // const tasksFinished = taskList.filter ( task => task.status === false )
  const [tasksList, setTasksList] = useState(tasks)
  const [newTask, setNewTask] = useState({
    id: 9999,
    name: "",
    status: false
  })

  const handleChange = (e) => {
    e.preventDefault()
    setNewTask({
      id: Math.round(Math.random() * 10000),
      name: e.target.value,
      status: true
    })
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    if (newTask.name !== "") {
      setTasksList([...tasksList, newTask])
      setNewTask({
        id: 9999,
        name: "",
        status: false
      })
    }

  }

  const handleDelete = (id) => {
    setTasksList(tasksList.filter(task => {
      return id !== task.id
    }))
  }

  return(
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
          {tasksList.map( (task, index) => (
            <ListItem key={task.id} sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              padding: "2px 0px"
            }}
            >
              <Typography sx={{padding: "6px 16px"}}>
                {task.name}
              </Typography>
              <Button sx={{borderRadius: "50%"}} onClick={() => handleDelete(task.id)}><DeleteIcon /></Button>
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
          label="Add new task" 
          variant="standard" 
          sx={{
            width: 8/10,
            margin: "20px auto"
          }} 
          onChange={handleChange}
          value={newTask.name}
        />
        <Button 
          size="large" 
          variant="contained" 
          sx={{
            width: 70, 
            height: 70, 
            borderRadius: "35px", 
            display: "block"
          }} 
          color="secondary" 
          type="submit"
        >
          <AddIcon color="#fff" />
        </Button>
      </Box>

    </Box>

  )
} 

export default TaskList
