import { Typography } from "@mui/material"

const Title = (title) => {
  return(
    <Typography variant="h3" align="center" >
      {title.title}
    </Typography>
  )
}

export default Title