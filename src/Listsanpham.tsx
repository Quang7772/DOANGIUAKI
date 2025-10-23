import "./asset/CSS/layout.css";
import logo from "./asset/CSS/images/Ten-truong-do-1000x159.png";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      {/* ===== HEADER ===== */}
      <header className="header">
        {/* Banner chứa menu, logo, tìm kiếm */}
        <div className="banner">
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

          <div className="logo-center">
            <Link to="/">
              <img src={logo} alt="Logo trường" className="logo-img" />
            </Link>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm..." />
            <button>Tìm</button>
          </div>
        </div>

        {/* ===== Bootstrap Banner Carousel ===== */}
        <div
          id="bannerCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://via.placeholder.com/1200x400?text=Chào+mừng+đến+với+QDH"
                className="d-block w-100"
                alt="Banner 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x400?text=Ưu+đãi+đặc+biệt+cho+sinh+viên+mới"
                className="d-block w-100"
                alt="Banner 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x400?text=Sản+phẩm+trang+sức+cao+cấp"
                className="d-block w-100"
                alt="Banner 3"
              />
            </div>
          </div>

          {/* Nút điều hướng */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#bannerCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
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
