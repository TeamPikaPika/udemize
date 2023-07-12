import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TechTable: FC = () => {
	//placeholder for the user's saved tech, which we'll get from redux or usecontext
	const rows = [
		{
			techName: 'Angular',
			threePros: {
				1: 'sample pro',
				2: 'sample pro',
				3: 'sample pro',
			},
			threeCons: {
				1: 'sample con',
				2: 'sample con',
				3: 'sample con',
			},
			threeAlternatives: {
				1: 'React',
				2: 'Vue',
				3: 'Polymer',
			},
			threeUdemy: {
				1: {
					link: '',
					title: '',
					thumbnail: '',
				},
				2: {
					link: '',
					title: '',
					thumbnail: '',
				},
				3: {
					link: '',
					title: '',
					thumbnail: '',
				},
			},
		},
	];

	//create a row for our table for every object in the rows constant
	const rowElements = rows.map((ele) => (
		<TableRow
			key={ele.techName}
			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
		>
			<TableCell component="th" scope="row">
				{ele.techName}
			</TableCell>
			
		</TableRow>
  ));
  
  console.log(rows, rowElements)

	return (
		<TableContainer component={Paper} sx = {{width: "50%", margin: "2em auto"}}>
			<Table sx={{ width: "50%" }} aria-label="simple-table">
				{/* <TableHead>
					<TableRow>
						<TableCell>Tech Name</TableCell>
					</TableRow>
				</TableHead> */}
        <TableBody>
          {rowElements}
        </TableBody>
			</Table>
		</TableContainer>
	);
};

export default TechTable;
