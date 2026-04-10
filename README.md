# Project
Easy user là một dự án cá nhân siêu nhỏ, mục đích dùng để học cơ bản về ReactJS bao gồm:
- State
- Props
- Router (sử dụng react-router-dom)
Dự án này sẽ cho phép chúng ta CRUD với users[].

# Techstack:
- FE lib: react, react-dom
- UI fw: bootstrap (CDN hoặc install đều được).
- Router: react-router-dom

# Các bước thực hiện:

## Bước 1: Cài đặt UI fw
- Cách 1: dùng CDN vào index.html
- Cách 2: cài qua npm: `npm install bootstrap` => `import 'bootstrap/dist/css/bootstrap.min.css';` vào file main.jsx

## Bước 2: Cài react-router-dom
 Cài đặt package (v7) và init provider
- `npm i react-router-dom`
- Init provider `<BrowserRouter/>` wrap lấy `<App/>`
```jsx
// main.jsx
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
) 
```
- Sử dụng `<Routes>` và `<Route>` để tạo các route

## Bước 3: Tạo ra các page components
Ở bước này, chúng ta sẽ tạo ra các page components và map với router. Sau đó, mới tiếp tục tạo layout và phân cho các page components ứng với logic yêu cầu.
- Tạo thư mục `src/pages` để tổ chức các page components.
- Tạo thư mục `src/layouts` để tổ chức layout components. Gồm `ProtectedRoutes`
- Bắt đầu tạo layout chung. Tạo các components, ví dụ: `src/components/Header.jsx` ....

## Bước 4: setup ProtectedRoutes layout
Chúng ta sẽ nhận vào một prop `isLogged` là boolean-flag để xem người dùng đã đăng nhập chưa
- ✔️: Đã đăng nhập thì return ra match-route bằng `<Outlet/>`
- ❌: Chưa đăng nhập thì navigate user về trang login bằng `<Navigate to="/login">` của `react-router-dom`


## Bước 5: xử lý phần hiển thị danh sách users
Danh sách users sẽ được đặt tại `App.jsx` vì chúng ta dùng component này làm root. Trong thực tế sẽ nên đặt vào store thay vì đặt làm state như hiện tại (Props Drilling)
- `users[]` là mảng user với cấu trúc
```jsx
{
    id: int
    name: string,
    email: string,
    phone: string,
    role: string,
}
```
- render danh users tại `<UserList />` bằng props truyền từ `App.jsx`

## Bước 6: xử lý các thao tác còn lại với người dùng.
To be continue....