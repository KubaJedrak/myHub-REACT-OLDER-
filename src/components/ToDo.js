import { Typography, Container } from "@mui/material";
import useFetch from "../hooks/useFetch";
import Loader from './Loader'
import TaskList from './TasksList'
import Title from './ComponentTitle'

const ToDo = (title) => {

  const { error, isPending, data: tasks} = useFetch("http://localhost:8000/to-do")
  
  return (
    <Container sx={{width: 1, justifyContent: "center"}}>

    <Title title={title.componentTitle} />
      
      { error && <Typography variant="h5" align="center" margin="20px">{ error }</Typography> }
      { isPending && <Loader /> }
      { tasks && <TaskList tasks={tasks} />}
    
    </Container>
  )
}



export default ToDo