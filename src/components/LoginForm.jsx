import { useDispatch } from 'react-redux';
import { logInUser } from 'reduxFiles';
import { Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      style={{
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      <TextField
        type="email"
        name="email"
        label="Email"
        size="small"
        sx={{
          height: 22,
          fontSize: 16,
        }}
        variant="outlined"
        required
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        size="small"
        sx={{
          height: 22,
          fontSize: 16,
        }}
        variant="outlined"
        required
      />
      <Button
        type="submit"
        variant="contained"
        size="medium"
        sx={{
          fontSize: '14px',
          marginLeft: '10px',
          fontWeight: 'bold',
          width: '150px',
          ml: 0,
        }}
      >
        Log in
      </Button>
    </form>
  );
};
