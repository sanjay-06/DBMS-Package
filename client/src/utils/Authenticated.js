import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import auth from '../Auth';
import Cookies from 'js-cookie'
export const ProtectedRoute=({component:Component,...rest})=>{
  return(
    <Route 
    {...rest}
    render={props => {
      if(Cookies.get('name')||auth.isAuthenticated())
      {
      return <Component {...props} />
      }
      else
      {
        return <Redirect to={
          {
            pathname:"/login",
            state:{
              from:props.location
            }
          }
        }/>
      }
    }}
    />
  )
};