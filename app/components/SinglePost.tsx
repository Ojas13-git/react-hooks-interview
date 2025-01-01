"use client"
import React, {useContext} from 'react'
import { LoginContext } from '../ContextHook/ContextHook'

const SinglePost = () => {
   const login = useContext(LoginContext);
   console.log(login);
  return (
    <div>SinglePost</div>
  )
}

export default SinglePost