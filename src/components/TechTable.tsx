import { FC, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import React from 'react';

import TemporaryDrawer from './OverlayCard';

// *SAMPLE*
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import OverlayCard from './OverlayCard';

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
    {
      techName: 'React',
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
  ];

  // *********************DRAWER LOGIC*******************************

  // type Anchor = 'top' | 'left' | 'bottom' | 'right';

	// type Tech = 'angular' | 'react'

  // const [state, setState] = React.useState({
  //   // top: false,
  //   // left: false,
  //   // bottom: false,
  //   right: false,
  // });

  // const toggleDrawer =
  //   // (anchor: Anchor, open: boolean) =>
	// 	(anchor: Anchor, open: boolean) =>

  //   (event: React.KeyboardEvent | React.MouseEvent) => {
  //     if (
  //       event.type === 'keydown' &&
  //       ((event as React.KeyboardEvent).key === 'Tab' ||
  //         (event as React.KeyboardEvent).key === 'Shift')
  //     ) {
  //       return;
  //     }

  //     setState({ ...state, [anchor]: open });
  //   };

  // const card = (ele: any) => (
  //   <Box
  //     sx={{
  //       width: 1000,
  //       // width: '100%',
  //       padding: 10,
  //     }}
  //     role='presentation'
	// 		onClick={toggleDrawer('right', false)}
  //     onKeyDown={toggleDrawer('right', false)}
  //   >
  //     <Typography
  //       variant='h3'
  //       sx={{
  //         textAlign: 'center',
  //         paddingBottom: 5,
  //       }}
  //     >
  //       {ele.techName}
  //     </Typography>

  //     <Box
  //       sx={{
  //         paddingTop: 2,
  //         paddingBottom: 2,
  //       }}
  //     >
  //       <Typography variant='h4' sx={{}}>
  //         Summary:
  //       </Typography>
  //       <Typography variant='body1'>***SUMMARY TEXT HERE***</Typography>
  //     </Box>

  //     <Box
  //       sx={{
  //         display: 'flex',
  //         justifyContent: 'space-around',
  //       }}
  //     >
  //       <Box>
  //         <Typography variant='h4'>Pros:</Typography>
  //         <Typography variant='body1'>***PROS TEXT HERE***</Typography>
	// 				{/* <Typography variant='body1'>{ele.threePros}</Typography> */}

  //       </Box>
  //       <Box>
  //         <Typography variant='h4'>Cons:</Typography>
  //         <Typography variant='body1'>***CONS TEXT HERE***</Typography>
  //       </Box>
  //     </Box>

  //     <Box
  //       sx={{
  //         paddingTop: 2,
  //         paddingBottom: 2,
  //       }}
  //     >
  //       <Typography variant='h4'>Alternatives</Typography>
  //       <Typography variant='body1'>***ALTERNATIVES TEXT HERE***</Typography>
  //     </Box>

  //     <Divider />
  //     <Typography variant='h4'>Related Courses</Typography>

  //   </Box>
  // );

  // *********************END DRAWER LOGIC*******************************

  //create a row for our table for every object in the rows constant
  const rowElements = rows.map((ele, ind) => (
    <TableRow
      key={ele.techName}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component='th' scope='row'>
        {ele.techName}

        {/* DRAWER ELEMENT */}
        {/* <React.Fragment key={ele.techName}>
          <Button onClick={toggleDrawer('right', true)}>{ele.techName}</Button>
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {card(ele)}
          </Drawer>
        </React.Fragment> */}
        {/* *END DRAWER ELEMENT* */}

				<OverlayCard element={ele} index={ind}></OverlayCard>
      </TableCell>
    </TableRow>
  ));

  console.log(rows, rowElements);

  return (
    <TableContainer component={Paper} sx={{ width: '50%', margin: '2em auto' }}>
      <Table sx={{ width: '50%' }} aria-label='simple-table'>
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
