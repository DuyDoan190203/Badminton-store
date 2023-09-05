import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import agent from '../../app/api/agent';
import { toast } from 'react-toastify';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/">
        SmashIt
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const {register, handleSubmit, setError, formState: {isSubmitting, errors, isValid}} = useForm({
    mode:'all'
  });

  function handleApiErrors(errors: any) {
    if(errors) {
      errors.forEach((error: string) => {
        if(error.includes('Password')) {
          setError('password', {message: error})
        } else if(error.includes('Email')){
          setError('email', {message: error})
        } else if(error.includes('Username')) {
          setError('username', {message: error})
        }
      });
    }
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box 
              component="form" 
              onSubmit={handleSubmit((data) => agent.Account.register(data)
              .then(() => {
                toast.success('Registration successful - you can login');
                navigate('/login')
              })
              .catch(error => handleApiErrors(error)))}
              noValidate  
              sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                autoFocus
                {...register('username', {required: 'Username is required!'})}
                error={!!errors.username}
                helperText={errors?.username?.message as string}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email"
                {...register('email', {
                  required: 'Email is required!',
                  pattern: {
                    value: /^\w+[\w-\.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/,
                    message: 'Not a valid email address'
                  }
                })}
                error={!!errors.email}
                helperText={errors?.email?.message as string}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                {...register('password', {
                  required: 'Password is required!',
                  pattern: {
                    value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
                    message: 'password is too WEAK and not complex!'
                  }
                })}
                error={!!errors.password}
                helperText={errors?.password?.message as string}
              />
              <LoadingButton
                loading={isSubmitting}
                disabled={!isValid}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </LoadingButton>
              <Grid container>
                <Grid item>
                  <Link to='/register'>
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


