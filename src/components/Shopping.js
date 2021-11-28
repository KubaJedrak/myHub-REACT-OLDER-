import useFetch from '../hooks/useFetch';
import Loader from './Loader'
import { Container } from '@mui/material';
import ShoppingList from './ShoppingList';
import Title from './ComponentTitle';

const Shopping = (title) => {

  const {error, isPending, data: shopping} = useFetch("http://localhost:8000/shopping/")



  return (
    <>
      <Title title={title.componentTitle} sx={{font: "24px"}} />
      { error && <Container> { error } </Container> }
      { isPending && <Loader sx={{margin: 20}} />}
      { shopping && <ShoppingList shopping={shopping} /> }

    </>

  )
}

export default Shopping