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
			summary: 'Angular is a TypeScript-based open-source web application framework led by Google and the Angular team at Google. It is used to build single-page applications (SPAs) that are dynamic and interactive. Angular is based on MVC (Model-View-Controller) architecture and uses TypeScript to provide type safety. It also uses a component-based architecture, which makes it easy to build reusable and maintainable code.',
      threePros: {
        1: 'Type safety: Angular uses TypeScript, which provides type safety. This means that the compiler can check the types of variables and expressions, which can help to prevent errors.',
        2: 'Component-based architecture: Angular uses a component-based architecture. This means that applications are built from small, reusable components. This makes it easy to build maintainable and scalable applications.',
        3: 'MVC architecture: Angular is based on the MVC (Model-View-Controller) architecture. This means that the application is divided into three parts: the model, the view, and the controller. This makes it easy to separate the concerns of the application.',
      },
      threeCons: {
        1: 'Learning curve: Angular can have a steep learning curve, especially for developers who are not familiar with TypeScript or MVC architecture.',
        2: 'Complexity: Angular can be complex, especially for large applications. This can make it difficult to maintain and debug applications.',
        3: 'Not as widely used as other frameworks: Angular is not as widely used as other web frameworks, such as React or Vue.js. This means that there are fewer resources available, such as tutorials, libraries, and experts.',
      },
      threeAlternatives: {
        1: 'React',
        2: 'Vue',
        3: 'Polymer',
      },
      threeUdemy: {
        1: {
          link: '/course/the-complete-guide-to-angular-2/',
          title: 'Angular - The Complete Guide (2023 Edition)',
          thumbnail: 'https://img-c.udemycdn.com/course/480x270/756150_c033_2.jpg',
        },
        2: {
          link: '/course/the-modern-angular-bootcamp/',
          title: 'The Modern Angular Bootcamp',
          thumbnail: 'https://img-c.udemycdn.com/course/480x270/2685124_37c5_3.jpg',
        },
        3: {
          link: '/course/complete-angular-developer-zero-to-mastery/',
          title: 'Complete Angular Developer in 2023: Zero to Mastery',
          thumbnail: 'https://img-c.udemycdn.com/course/480x270/4403121_33c8_4.jpg',
        },
      },
    },
    {
      techName: 'React',
			summary: 'React is an open-source JavaScript library for building user interfaces. It is used to build single-page applications (SPAs) that are dynamic and interactive. React is based on a component-based architecture, which makes it easy to build reusable and maintainable code.',
      threePros: {
        1: 'Component-based architecture: React uses a component-based architecture. This means that applications are built from small, reusable components. This makes it easy to build maintainable and scalable applications.',
        2: 'Virtual DOM: React uses a virtual DOM. This means that the DOM is not updated directly. Instead, React creates a virtual DOM and then compares it to the real DOM. This makes it efficient to update the DOM.',
        3: 'JSX: React uses JSX. This is a syntax extension that allows you to write HTML in JavaScript. This makes it easy to create dynamic and interactive user interfaces.',
      },
      threeCons: {
        1: 'Learning curve: React can have a steep learning curve, especially for developers who are not familiar with JavaScript or component-based architecture.',
        2: 'Complexity: React can be complex, especially for large applications. This can make it difficult to maintain and debug applications.',
        3: 'Not as widely used as other frameworks: React is not as widely used as other web frameworks, such as Angular or Vue.js. This means that there are fewer resources available, such as tutorials, libraries, and experts.',
      },
      threeAlternatives: {
        1: 'Angular',
        2: 'Vue',
        3: 'Polymer',
      },
      threeUdemy: {
        1: {
          link: '/course/react-the-complete-guide-incl-redux/',
          title: 'React - The Complete Guide 2023 (incl. React Router & Redux)',
          thumbnail: 'https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg',
        },
        2: {
          link: '/course/the-ultimate-react-course/',
          title: 'The Ultimate React Course 2023: React, Redux & More',
          thumbnail: 'https://img-c.udemycdn.com/course/480x270/4471614_361e_5.jpg',
        },
        3: {
          link: '/course/react-tutorial-and-projects-course/',
          title: 'React 18 Tutorial and Projects Course (2023)',
          thumbnail: 'https://img-c.udemycdn.com/course/480x270/2018828_41a9_3.jpg',
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
    <TableContainer component={Paper} sx={{ width: '40%', margin: '2em auto' }} elevation={4}>
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
