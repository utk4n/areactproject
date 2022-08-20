import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn";

const AuthLayout = () => {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) {
    return <h1>Loading...</h1>;
  } else if (isLoggedIn) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
