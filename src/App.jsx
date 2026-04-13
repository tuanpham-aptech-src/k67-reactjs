import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserCreate from "./pages/UserCreate";
import UserDetail from "./pages/UserDetail";
import Login from "./pages/Login";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import { useState } from "react";
function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Nguyễn Văn Hùng",
      email: "hung.nguyen@example.com",
      phone: "0901234567",
      role: "admin",
    },
    {
      id: 2,
      name: "Trần Thị Mai",
      email: "mai.tran@example.com",
      phone: "0912345678",
      role: "user",
    },
    {
      id: 3,
      name: "Lê Minh Tuấn",
      email: "tuan.le@example.com",
      phone: "0923456789",
      role: "user",
    },
    {
      id: 4,
      name: "Phạm Quang Huy",
      email: "huy.pham@example.com",
      phone: "0934567890",
      role: "moderator",
    },
    {
      id: 5,
      name: "Hoàng Thị Lan",
      email: "lan.hoang@example.com",
      phone: "0945678901",
      role: "user",
    },
  ]);

  const addUser = (user)=>{
    setUsers([...users, { id: users.length + 1, ...user }])

    // const currentUsers = [...users];
    // currentUsers.push({id: users.length + 1, ...user})
    // setUsers(currentUsers)
  }
  const updateUser = (user)=>{
    // tìm bản ghi bằng user.id
    // kiểm tra có không
    // dùng users[matchIdx] = user để update
    // set lại state - nhớ shallow copy để tạo ref mới
  }

  const removeUser = (userId)=>{
    const cloneUsers = [...users];
    const matchIdx = cloneUsers.findIndex(user => user.id === userId);
    if (matchIdx === -1) {
      return
    }
    cloneUsers.splice(matchIdx,1);
    setUsers(cloneUsers)
  }

  const getUserById = (user_id)=>{
    return users.find(user => user.id === user_id)
  }

  return (
    <>
      <Routes>
        {/* Các Routes được protect */}
        <Route path="/" element={<ProtectedRoutes isLogged={true} />}>
          <Route path="/" element={<UserList users={users} removeUser={removeUser} />}></Route>
          <Route path="/users/add" element={<UserCreate addUser={addUser} />}></Route>
          <Route path="/users/:user_id" element={<UserDetail getUserById={getUserById}  />}></Route>
        </Route>

        {/* Các Routes public */}
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
export default App;
