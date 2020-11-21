import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import auth from '../Auth';
import Cookies from "js-cookie"
export const ProtectedRoute1=({component:Component,...rest})=>{
  return(
    <Route 
    {...rest}
    render={props => {
      if(auth.isAuthenticated()||Cookies.get('staffname'))
      {
      return <Component {...props} />
      }
      else
      {
        return <Redirect to={
          {
            pathname:"/login1",
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