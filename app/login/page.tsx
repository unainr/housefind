import LoginForm from '@/components/LoginForm'
import { Metadata } from 'next'
import React from 'react'

const Login = () => {
  return (
   <LoginForm/>
  )
}

export default Login

export const metadata: Metadata = {
  title: "Login",
  description: "Create an account or log in to access your personalized dashboard, save your favorite listings, and receive tailored recommendations. Join the HouseFind community and find your perfect home today.",
};