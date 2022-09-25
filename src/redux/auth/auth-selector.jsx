const getIsLoggedIn = state => state.auth.isLoggedIn
const getUser = state => state.auth.user
const getToken = state => state.auth.token
const getIsRefreshing = state => state.auth.isRefreshingUser

const authSelector = {
    getIsLoggedIn, 
    getUser,
    getToken,
    getIsRefreshing
}

export default authSelector