import { Navigate, Outlet } from "react-router-dom"

// currentUser được truyền từ props và sẽ có giá trị là:
// null: nếu chưa đăng nhập
// object: nếu đã đăng nhập
export default function ProtectedRoute({currentUser}) {

    const isAuthenticated = !!currentUser

    if (!isAuthenticated) {
        // chưa đăng nhập thì chuyển về trang login
        return <Navigate to={'/login'} />
    }

    return <Outlet />
}