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
		


		console.log('Searching for', formData)
		fetch(`/api/udemy/${formData}`)
			.then(result => result.json())
			.then(result => console.log(result));

		setFormData('');
	};


	return (
		<>
			<Typography variant="h2" sx={{
				textAlign: 'center',
				p: 10
				}}>
				Udemize
			</Typography>

			<Box
				className="dashboard"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					width: '40%',
					margin: '0 auto',
				}}
			>
				<TextField
					id="outlined-basic"
					label="Search for a technology"
					variant="outlined"
					sx={{ width: '100%' }}
					onChange={(e) => setFormData(e.target.value)}
					onKeyUp={(e) => {
						if (e.key === "Enter") {
							onSubmit(e);
						}
					}}
				/>
			</Box>
			<TechTable />
		</>
	);
};

export default Dashboard;
