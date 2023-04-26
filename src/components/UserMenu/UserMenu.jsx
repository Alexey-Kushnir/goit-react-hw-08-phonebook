import { useDispatch } from 'react-redux';
import { logOutUser } from 'reduxFiles';
import { useAuth } from 'hooks';
import { Username, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </Wrapper>
  );
};
