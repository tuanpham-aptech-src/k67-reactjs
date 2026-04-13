import { useNavigate } from "react-router-dom";
import { useRef } from "react";


function UserRow({ user, removeUser, navigate }) {
  // dùng ref để lấy button close modal
  const closeBtn = useRef(null)
  const handleRemoveUser = ()=>{
    closeBtn.current.click()
    removeUser(user.id)
  }

  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.role}</td>
      <td>
        <div className="d-flex" style={{ gap: "8px" }}>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={()=>{navigate(`/users/${user.id}`)}}>
            Xem
          </button>
          <button type="button" className="btn btn-warning btn-sm">
            Sửa
          </button>

          <button
            type="button"
            className="btn btn-danger btn-sm"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal-${user.id}`}
          >
             Xóa
          </button>

          <div
            className="modal fade"
            id={`exampleModal-${user.id}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Xóa người dùng
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                    Bạn có chắc muốn xóa <b>"{user.name}"</b>?
                </div>
                <div className="modal-footer">
                  <button
                    ref={closeBtn}
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Đóng
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleRemoveUser}>
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default function UserList({ users, removeUser }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h3 className="mb-0 fs-4">Quản lý người dùng</h3>
          <small>Tổng cộng: 4 người dùng</small>
        </div>
        <button onClick={()=> navigate('/users/add') } type="button" className="btn btn-primary btn-sm">
          + Thêm người dùng
        </button>
      </div>

      {/* Danh sách người dùng */}
      <div className="border rounded overflow-hidden mt-3">
        <table className="table mb-0">
          <thead>
            <tr>
              <th
                className="bg-secondary-subtle text-uppercase fs-6"
                scope="col"
              >
                #
              </th>
              <th
                className="bg-secondary-subtle text-uppercase fs-6"
                scope="col"
              >
                HỌ VÀ TÊN
              </th>
              <th
                className="bg-secondary-subtle text-uppercase fs-6"
                scope="col"
              >
                Email
              </th>
              <th
                className="bg-secondary-subtle text-uppercase fs-6"
                scope="col"
              >
                Số điện thoại
              </th>
              <th
                className="bg-secondary-subtle text-uppercase fs-6"
                scope="col"
              >
                Vai trò
              </th>
              <th
                className="bg-secondary-subtle text-uppercase fs-6"
                scope="col"
              >
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} removeUser={removeUser} navigate={navigate} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
