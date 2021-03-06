import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute({ children, ...rest }) {
  console.log(rest)

  return (
    <Route
      {...rest}
      render={() =>
        true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}