import { FC, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import OverlayCard from './OverlayCard';

const TechTable: FC = () => {
  //placeholder for the user's saved tech, which we'll get from redux or usecontext
  const rows = [
    {
      techName: 'Angular',
			summary: 'Angular is cool',
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
    {
      techName: 'React',
			summary: 'React is cool',
      threePros: {
        1: 'sample pro react',
        2: 'sample pro react',
        3: 'sample pro react',
      },
      threeCons: {
        1: 'sample con react',
        2: 'sample con react',
        3: 'sample con react',
      },
      threeAlternatives: {
        1: 'Angular',
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
		{
      techName: 'Docker',
			summary: 'Docker is cool',
      threePros: {
        1: 'sample pro Docker',
        2: 'sample pro Docker',
        3: 'sample pro Docker',
      },
      threeCons: {
        1: 'sample con Docker',
        2: 'sample con Docker',
        3: 'sample con Docker',
      },
      threeAlternatives: {
        1: '',
        2: '',
        3: '',
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
  const rowElements = rows.map((ele, ind) => (
    <TableRow
      key={ele.techName}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component='th' scope='row'>
        {/* {ele.techName} */}
				<OverlayCard element={ele} index={ind}></OverlayCard>
      </TableCell>
    </TableRow>
  ));

  // console.log(rows, rowElements);

  return (
    <TableContainer component={Paper} sx={{ width: '50%', margin: '2em auto' }}>
      <Table sx={{ width: '100%' }} aria-label='simple-table'>
        {/* <TableHead>
					<TableRow>
						<TableCell>Tech Name</TableCell>
					</TableRow>
				</TableHead> */}
        <TableBody>{rowElements}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TechTable;
