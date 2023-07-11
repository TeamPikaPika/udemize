import { FC, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material'


const Dashboard: FC = () => {

  //state to store users' input
  const [formData, setFormData] = useState('')

  //save current input in state, before user submits
  const onChange = (e: any )=> {
    setFormData(e.target.value)
  }

  //handle what happens to input when user submits
  const onSubmit = (e: any) => {
    e.preventDefault()
    if (!formData) return;
    //insert call to backend
    //reset formData
    setFormData('')

  }

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