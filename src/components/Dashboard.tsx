import { FC, useState, SyntheticEvent } from 'react';
import TechTable from './TechTable';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

const Dashboard: FC = () => {
	//state to store users' input
	const [formData, setFormData] = useState('');

	// save current input in state, before user submits
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
	};

	//handle what happens to input when user submits
	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		if (!formData) return;
		//TODO: insert call to backend
    //TODO: update the user's saved techstack with the new tech
		//reset formData
		setFormData('');
	};


	return (
		<>
			<Typography variant="h2" sx={{ textAlign: 'center' }}>
				Udemize
			</Typography>

			<Box
				className="dashboard"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '50%',
					margin: '0 auto',
				}}
			>
				<TextField
					id="outlined-basic"
					label="new tech"
					variant="outlined"
					sx={{ width: '100%' }}
					onChange={(e) => setFormData(e.target.value)}
				/>
			</Box>
			<TechTable />
		</>
	);
};

export default Dashboard;
