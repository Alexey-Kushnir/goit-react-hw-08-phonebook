import { useSelector } from 'react-redux';
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from 'reduxFiles';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
