import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = ({ Component, authedUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={ props => {
        if (authedUser === '') {
          return <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location
              }
            }
          }/>
        } else {
          return <Component {...props} />
        }
    }} />
  )
}
