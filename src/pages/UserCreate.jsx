import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserCreate({ addUser }) {
  const navigate = useNavigate();
  const roles = [
    {
      id: "admin",
      label: "Quản trị viên",
    },
    {
      id: "user",
      label: "Người dùng",
    },
    {
      id: "editor",
      label: "Người chỉnh sửa",
    },
  ];

  const [userInfo, setUserInfo] = useState({
    name: "Nguyễn Văn Hùng",
    email: "hung.nguyen@example.com",
    phone: "0901234567",
    role: "admin",
  });

  const [formErrors, setFormErrors] = useState([])

  const handleChangeUserInfo = (ev) => {
    const value = ev.target.value;
    // key sẽ được khai báo trong element
    const key = ev.target.name;
    setUserInfo({ ...userInfo, [key]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setFormErrors([])
    const errors = []
    // Validate data
    if (!userInfo.name.trim()) {
        errors.push('name')
    }
    if (!userInfo.email.trim()) {
        errors.push('email')
    }
    if (!userInfo.phone.trim()) {
        errors.push('phone')
    }
    if (!userInfo.role.trim()) {
        errors.push('email')
    }
    if (errors.length) {
        setFormErrors(errors)
        return
    }

    addUser(userInfo);
    // chuyển về trang danh sách
    clearForm();
    navigate('/')
  };

  const clearForm = () => {
    setUserInfo({
      name: "",
      email: "",
      phone: "",
      role: "",
    });
  };

  return (
    <>
      <div
        className="p-4 bg-white"
        style={{ maxWidth: "560px", margin: "auto" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="user-name" className="form-label">
              Họ và tên <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${formErrors.includes('name') ? 'border-danger':''}`}
              id="user-name"
              placeholder="Tên nhân viên"
              name="name"
              value={userInfo.name}
              onChange={handleChangeUserInfo}
            />
            {
                formErrors.includes('name') ? <small className="text-danger">Vui lòng nhập tên người dùng</small>:null
            }
          </div>
          <div className="mb-3">
            <label htmlFor="user-email" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="text"
             className={`form-control ${formErrors.includes('email') ? 'border-danger':''}`}
              id="user-email"
              placeholder="Nhập email"
              name="email"
              value={userInfo.email}
              onChange={handleChangeUserInfo}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user-phone" className="form-label">
              Số điện thoại <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="user-phone"
              placeholder="Nhập số điện thoại"
              name="phone"
              value={userInfo.phone}
              onChange={handleChangeUserInfo}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user-role" className="form-label">
              Vai trò <span className="text-danger">*</span>
            </label>
            <select
              id="user-role"
              name="role"
              className="form-select"
              aria-label="Default select example"
              onChange={handleChangeUserInfo}
              value={userInfo.role}
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
