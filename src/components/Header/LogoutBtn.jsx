import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch() // 1 pehle yeh bnayege
    const logoutHandler = () =>{ // 2 
          authService.logout().then(()=>{ // appwrite mai logout ek promise jo apko .then se handle krna padega
            dispatch(logout()) // agr logout successful ho gya to usse dispatch kr denge taki store k andr jo imp. info hai vo updated rhe
          })
    }
  return (
    <button
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn