import { useDispatch } from 'react-redux';
import { logOutUser } from 'reduxFiles';
import { useAuth } from 'hooks';
import { Username, Wrapper } from './UserMenu.styled';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      {/* <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button> */}
      <Button
        onClick={() => dispatch(logOutUser())}
        variant="contained"
        size="small"
        color="primary"
        sx={{
          fontSize: '10px',
          marginLeft: '10px',
          fontWeight: 'bold',
          float: 'right',
        }}
      >
        Logout
      </Button>
    </Wrapper>
  );
};
