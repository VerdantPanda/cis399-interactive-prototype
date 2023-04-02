import { useState } from 'react';
// import Box from '@mui/material/Box';
import {
  TextField,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
  Grid,
  Button,
} from '@mui/material/';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Container } from '@mui/system';

export default function Login() {
  return (
    <Container>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Container maxWidth="50px">
              <img
                width="100%"
                height="parent"
                alt="doctor img"
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
              />
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Inputs />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

function Inputs() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div>
      <div>
        [Comapss Care Logo]
        <InputLabel htmlFor="filled-adornment-password">
          Doctor Email
        </InputLabel>
        <TextField label="Email" variant="filled" />

        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>

      <Button variant="contained">Login</Button>
      <br />
      <Button variant="contained">Forgot Password</Button>
    </div>
  );
}

