import { useDispatch } from 'react-redux';
import { logOutUser } from 'reduxFiles';
import { useAuth } from 'hooks';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <p style={{ fontWeight: 700 }}>Welcome, {user.name}</p>
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
    </div>
  );
};
