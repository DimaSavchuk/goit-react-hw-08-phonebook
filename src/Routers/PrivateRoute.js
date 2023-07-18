import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { ROUTER } from './Routes';

export const PrivateRoute = ({
  component: Component,
  redirectTo = ROUTER.HOME,
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
