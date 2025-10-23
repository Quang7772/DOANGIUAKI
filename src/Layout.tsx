import "./asset/CSS/layout.css";
import logo from "./asset/CSS/images/Ten-truong-do-1000x159.png";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      {/* ===== HEADER ===== */}
      <header className="header">
        {/* Banner */}
        <div className="banner">
          {/* Menu trái */}
          <nav id="menutrai" className="menutrai">
            <ul>
              <li>
                <Link className="menutrai" to="/">
                  TRANG CHỦ
                </Link>
              </li>
              <li>
                <Link className="menutrai" to="/trang1">
                  EGOV
                </Link>
              </li>
              <li>
                <Link className="menutrai" to="/trang2">
                  SINH VIÊN
                </Link>
              </li>
              <li>
                <Link className="menutrai" to="/listsanpham">
                  SẢN PHẨM
                </Link>
              </li>
            </ul>
          </nav>

          {/* Logo giữa */}
          <div className="logo-center">
            <Link to="/">
              <img src={logo} alt="Logo trường" className="logo-img" />
            </Link>
          </div>

          {/* Ô tìm kiếm bên phải */}
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm..." />
            <button>Tìm</button>
          </div>
        </div>

        {/* Thanh đỏ bên dưới */}
        <div className="menubar">
          ƯU ĐÃI ĐẶC BIỆT - CHÀO MỪNG SINH VIÊN MỚI 2025
        </div>
      </header>

      {/* ===== NỘI DUNG TRANG ===== */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        © 2025 - Trường Cao Đẳng QDH. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
