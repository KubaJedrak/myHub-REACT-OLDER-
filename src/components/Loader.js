import { Container, LinearProgress } from "@mui/material";

const Loader = () => {
  return (
    <Container sx={{width: 1, height: 1, padding: "50px"}}>
      <LinearProgress  color="secondary" />
    </Container>
  )
}

export default Loader