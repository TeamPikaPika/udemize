import { FC } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material'


const Dashboard: FC = () => {
  return (
    <>
    <Typography variant = "h2" sx = {{textAlign: 'center'}}>
      Udemize
    </Typography>
    <Box className="dashboard" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50%', margin: '0 auto'}}>
      <TextField
        id="outlined-basic"
        label="new tech"
        variant="outlined"
        sx = {{width: "100%"}}
      />
    </Box>
    </>
  )
}

export default Dashboard