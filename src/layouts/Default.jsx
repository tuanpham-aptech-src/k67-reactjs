import { Outlet, Link } from "react-router-dom";
import Header from '../components/Header'

export default function Default({currentUser, handleLogout}) {
    return (<>
    {/* <header>
        <ul>
          <li><Link to="/">Home </Link></li>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/products">Product </Link></li>
          <li><Link to="/products/detail">Product Detail</Link></li>
        </ul>
      </header> */}

      <Header currentUser={currentUser} handleLogout={handleLogout} />
      {/* Outlet đại diện cho toàn bộ child nếu có */}
      <div className="container">
        <Outlet/> 

        
      <footer><h1>Footer</h1></footer>
      </div>
    </>)
}