import { FC, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import { Link as MuiLink } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getGoogleUrl } from '../utilities/getGoogleUrls';

/* 
Copyright Component
*/

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://udemize.com/">
        Udemize
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/* 
Login component 
*/

const Login: FC = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = ((location.state as any)?.from?.pathname as string) || '/';

  useEffect(() => {}, [user.loggedIn]);

  /* 
  Submit handler, shoots a request to backend to verify user
*/
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email = data.get('email');
    const password = data.get('password');

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response);

      if (response.ok) {
        navigate('/dashboard');
      } else {
        navigate('/signup');
      }
    } catch (error) {
      console.log('An error occurred', error);
    }
    /* 
    TODO fetch request to back end to confirm user id
    */

    /* 
		CHANGE THIS.  Right now it logs in everyone, only login someone after they pass authentication
    */

    // setUser((prev) => ({
    //   ...prev,
    //   loggedIn: true,
    // }));
    // console.log(user);
  };

  return (
    <div>
      {/* {user.loggedIn && <Navigate to="/dashboard" replace={true} />} */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2"> */}
                <MuiLink href={getGoogleUrl(from)}>Link</MuiLink>
                <Link to="signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  );
};

export default Login;
