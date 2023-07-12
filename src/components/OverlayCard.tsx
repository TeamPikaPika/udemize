import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Tooltip, Typography } from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type Tech = 'angular' | 'react' | string;

export default function OverlayCard(props: any) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (tech: Tech, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [tech]: open });
    };

  const card = (anchor: Anchor) => (
    <Box
      sx={{
        width: 800,
        p: 10,
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        variant='h3'
        sx={{
          textAlign: 'center',
          py: 5,
        }}
      >
        {props.element.techName}
      </Typography>

      <Box
        sx={{
          py: 2,
        }}
      >
        <Typography variant='h4' sx={{ py: 2 }}>
          Summary:
        </Typography>
        <Typography variant='body1'>{props.element.summary}</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ color: 'success.main' }}>
          <Typography variant='h4' sx={{ py: 2 }}>
            Pros:
          </Typography>
          <Typography variant='body1'>
            {Object.values(props.element.threePros).map(
              (ele: string, ind: number) => (
                <li key={ele + ind}>{ele}</li>
              ),
            )}
          </Typography>
        </Box>
        <Box sx={{ color: 'error.main' }}>
          <Typography variant='h4' sx={{ py: 2 }}>
            Cons:
          </Typography>
          <Typography variant='body1'>
            {Object.values(props.element.threeCons).map(
              (ele: string, ind: number) => (
                <li key={ele + ind}>{ele}</li>
              ),
            )}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ py: 2 }}>
        <Typography variant='h4' sx={{ py: 2 }}>
          Alternatives:
        </Typography>
        <Typography variant='body1'>
          {Object.values(props.element.threeAlternatives).map(
            (ele: string, ind: number) => (
              <li key={ele + ind}>{ele}</li>
            ),
          )}
        </Typography>
      </Box>

      <Divider sx={{ py: 2 }} />
      <Typography
        variant='h4'
        sx={{
          py: 4,
        }}
      >
        Related Courses:
      </Typography>
      <Box>
        {/* {Object.values(props.element.threeVideos).map(
              (ele: string, ind: number) => (
                <iframe key={ele + ind} width="600" height="400" src="https://www.youtube.com/embed/H2I6V0NlaHg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              ),
            )} */}
        <iframe
          width='600'
          height='400'
          src='https://www.youtube.com/embed/H2I6V0NlaHg'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <iframe
          width='600'
          height='400'
          src='https://www.youtube.com/embed/H2I6V0NlaHg'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <iframe
          width='600'
          height='400'
          src='https://www.youtube.com/embed/H2I6V0NlaHg'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map(anchor => (
        <React.Fragment key={props.element.techName}>
          <Tooltip title={props.element.techName + ' Notes'} arrow>
            <Button onClick={toggleDrawer(anchor, true)}>
              {props.element.techName}
            </Button>
          </Tooltip>

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
