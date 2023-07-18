import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { ROUTER } from './Routes';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = ROUTER.HOME,
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
