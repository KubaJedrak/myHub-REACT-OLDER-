import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Loader from './Loader'
import { Container } from '@mui/material';
import ShoppingList from './ShoppingList';
import Title from './ComponentTitle';

const Shopping = (title) => {

  const {error, isPending, data} = useFetch("http://localhost:8000/shopping/")



  return (
    <>
      <Title title={title.componentTitle} sx={{font: "24px"}} />
      { error && <Container> { error } </Container> }
      { isPending && <Loader sx={{margin: 20}} />}
      { data && <ShoppingList shopping={data} /> }

    </>

  )
}

export default Shopping