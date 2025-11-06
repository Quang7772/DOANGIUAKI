import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        localStorage.setItem(
          "user",
          JSON.stringify({ username: "admin", role: "admin" })
        );
        alert("✅ Đăng nhập thành công với quyền Admin!");
        navigate("/admin/products");
      } else if (username && password) {
        localStorage.setItem(
          "user",
          JSON.stringify({ username, role: "user" })
        );
        alert("✅ Đăng nhập thành công!");
        navigate("/");
      } else {
        alert("❌ Vui lòng nhập đầy đủ thông tin!");
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl border border-gray-200 rounded-2xl p-10 w-[380px] text-center">
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Logo"
          className="w-12 h-12 mx-auto mb-4"
        />

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Đăng nhập tài khoản
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Chào mừng bạn quay trở lại! 👋
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5 text-left">
          {/* Username */}
          <div>
            <label className="text-sm text-gray-600">Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Nhập email hoặc username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white 
                       font-medium py-3 rounded-lg shadow-lg hover:from-blue-700 
                       hover:to-blue-600 transition-all disabled:opacity-60"
          >
            {loading ? "⏳ Đang xử lý..." : "Đăng nhập"}
          </button>
        </form>

        {/* Register link */}
        <p className="mt-6 text-sm text-gray-600">
          Bạn chưa có tài khoản?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Tạo ngay
          </Link>
        </p>

        {/* Social Login */}
        <div className="mt-8">
          <p className="text-gray-500 text-sm mb-3">Hoặc đăng nhập bằng</p>
          <div className="flex justify-center gap-4">
            {/* Google */}
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 border rounded-lg 
                         hover:bg-gray-100 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>

            {/* Facebook */}
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 border rounded-lg 
                         hover:bg-gray-100 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium text-gray-700">
                Facebook
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
