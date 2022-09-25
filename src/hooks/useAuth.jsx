import { useSelector } from "react-redux"
import authSelector from "redux/auth/auth-selector"

export const useAuth = () =>{
    const isLoggedIn = useSelector(authSelector.getIsLoggedIn)
    const isRefreshing = useSelector(authSelector.getIsRefreshing)
    const user = useSelector(authSelector.getUser)
    return {
        isLoggedIn,
        isRefreshing,
        user,
      };
} 