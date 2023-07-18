import { ROUTER } from 'Routers/Routes';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to={ROUTER.REGISTER}>Register</NavLink>
      <NavLink to={ROUTER.LOGIN}>Log In</NavLink>
    </div>
  );
};

export default AuthNav;
