import { Link } from "react-router-dom";

export default function Header({currentUser}) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid text-white">
        <a className="navbar-brand text-white" href="#">
          Easy-User
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 ">
            <li className="nav-item">
              <Link className="nav-link text-white active" aria-current="page" to={"/"}>
                Người dùng
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white active"
                aria-current="page"
                to={"/users/add"}
              >
                Thêm người dùng
              </Link>
            </li>

            <li className="nav-item ms-auto d-flex align-items-center">
              <span>Xin chào, Tuấn </span>
              <button type="button" className="btn btn-danger ms-2">
                Đăng xuất
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}