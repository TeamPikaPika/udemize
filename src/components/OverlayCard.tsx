import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type Tech = 'angular' | 'react' | string;

export default function OverlayCard(props: any) {
  console.log(props)

  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  });

  const toggleDrawer =
    // (anchor: Anchor, open: boolean) =>
    (tech: Tech, open: boolean) =>

    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      // setState({ ...state, [anchor]: open });
      setState({ ...state, [tech]: open });
      // console.log(state)
    };  


  // const card = (anchor: Anchor) => (
  const card = (anchor: Anchor) => (

    <Box
      sx={{ width: 1000 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Typography
        variant='h3'
        sx={{
          textAlign: 'center',
          paddingBottom: 5,
        }}
      >
        {props.element.techName}
      </Typography>

      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Typography variant='h4' sx={{}}>
          Summary:
        </Typography>
        <Typography variant='body1'>***SUMMARY TEXT HERE***</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Box>
          <Typography variant='h4'>Pros:</Typography>
          <Typography variant='body1'>{Object.values(props.element.threePros)}</Typography>
					{/* <Typography variant='body1'>{ele.threePros}</Typography> */}

        </Box>
        <Box>
          <Typography variant='h4'>Cons:</Typography>
          <Typography variant='body1'>***CONS TEXT HERE***</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Typography variant='h4'>Alternatives</Typography>
        <Typography variant='body1'>***ALTERNATIVES TEXT HERE***</Typography>
      </Box>

      <Divider />
      <Typography variant='h4'>Related Courses</Typography>

    </Box>
  );

  return (
    <div>
      {/* {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => ( */}
      {(['right'] as const).map((anchor) => (

        <React.Fragment key={props.element.techName}>
          <Button onClick={toggleDrawer(anchor, true)}>{props.element.techName}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {card(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
