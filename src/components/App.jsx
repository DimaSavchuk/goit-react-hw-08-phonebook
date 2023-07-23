import { ROUTER } from 'Routers/Routes';
import { useAuth } from 'hooks';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import Layout from './Layout';
import Home from 'pages/Home';
import { RestrictedRoute } from 'Routers/RestrictedRoute';
import Register from 'pages/Register';
import Login from 'pages/Login';
import { PrivateRoute } from 'Routers/PrivateRoute';
import Contacts from 'pages/Contacts';
import NotFound from 'pages/NotFound';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path={ROUTER.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={ROUTER.REGISTER}
            element={
              <RestrictedRoute
                redirectTo={ROUTER.CONTACTS}
                component={<Register />}
              />
            }
          />

          <Route
            path={ROUTER.LOGIN}
            element={
              <RestrictedRoute
                redirectTo={ROUTER.CONTACTS}
                component={<Login />}
              />
            }
          />

          <Route
            path={ROUTER.CONTACTS}
            element={
              <PrivateRoute
                redirectTo={ROUTER.LOGIN}
                component={<Contacts />}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
