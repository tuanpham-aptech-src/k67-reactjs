import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

const MenuNav = {
  textDecoration: "none",
  color: "#222222",
  padding: "4px 12px",
};

function Header({ currentUser, handleLogout }) {
  const navigate = useNavigate();

  const links = [
    {
      path: "/",
      content: "Trang chủ",
    },
    {
      path: "/about",
      content: "Về chúng tôi",
    },
    {
      path: "/products",
      content: "Sản phẩm",
    },
  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Link key={link.content} to={link.path} style={MenuNav}>
                {link.content}{" "}
              </Link>
            ))}

            {currentUser ? (
              <NavDropdown
                title={`Xin chào, ${currentUser.name}`}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={handleLogout}>
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button onClick={() => navigate("/login")}>Đăng nhập</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
