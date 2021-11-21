import { Container, Typography } from '@mui/material';
import Title from "./ComponentTitle";

const ShoppingList = (title) => {


  return (
    <Container sx={{width: 1, minHeight: "91vh", justifyContent: "center"}}>

    <Title title={title.componentTitle} />
    

  
  </Container>
  )

}

export default ShoppingList