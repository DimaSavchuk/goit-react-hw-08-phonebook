import { ROUTER } from 'Routers/Routes';
import { useAuth } from 'hooks';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to={ROUTER.HOME}>Home</NavLink>
      {isLoggedIn && <NavLink to={ROUTER.CONTACTS}>Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
