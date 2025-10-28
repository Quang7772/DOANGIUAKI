{
  /* ===== FOOTER ===== */
}
<footer className="footer">
  <div className="footer-container">
    {/* Cột 1: Logo và mô tả */}
    <div className="footer-col">
      <img src={logo} alt="Logo trường" className="footer-logo" />
      <p className="footer-desc">
        Trường Cao Đẳng QDH - Nơi khởi đầu tương lai. Cung cấp môi trường học
        tập năng động, sáng tạo và hiện đại.
      </p>
    </div>

    {/* Cột 2: Liên kết nhanh */}
    <div className="footer-col">
      <h4>Liên kết nhanh</h4>
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/trang1">Egov</Link>
        </li>
        <li>
          <Link to="/trang2">Sinh viên</Link>
        </li>
        <li>
          <Link to="/listsanpham">Sản phẩm</Link>
        </li>
      </ul>
    </div>

    {/* Cột 3: Liên hệ */}
    <div className="footer-col">
      <h4>Liên hệ</h4>
      <p>📍 123 Nguyễn Trãi, Hà Nội</p>
      <p>📞 (024) 1234 5678</p>
      <p>✉️ qdhcollege@gmail.com</p>
    </div>

    {/* Cột 4: Mạng xã hội */}
    <div className="footer-col">
      <h4>Kết nối với chúng tôi</h4>
      <div className="social-links">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Youtube">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" aria-label="Tiktok">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    © 2025 - Trường Cao Đẳng QDH. All rights reserved.
  </div>
</footer>;
