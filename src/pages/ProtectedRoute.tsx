import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../hooks/StoreHook'

const isAuthenticated = () => {
   const { user } = useAppSelector((state) => state.account)
   return user !== null
}

const ProtectedRoute = () => {
   return (
      isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
   )
}

export default ProtectedRoute